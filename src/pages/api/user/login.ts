import type { NextApiHandler } from 'next';
import type { UserProps } from '@/theme/types';
import jtw from "jsonwebtoken";

const databaseKey = String(process.env.DATABASE_KEY)

const handler:NextApiHandler = ( req, res ) => {
    
    if (req.method == "POST") {
        const email = req.body.email
        const password = req.body.password
        const database = req.body.database

        if (!email || !password) {
            return res.status(404).json({msg: `missing email or password`})
        }

        if (!database) {
            return res.status(404).json({msg: `there's no users signed`})
        }
        
        let databaseObj: any

        try {
            databaseObj = jtw.verify(database, databaseKey)
        } catch {
            return res.status(422).json({msg: "unrecognized token"})
        }
        
        const accountExists = databaseObj.users.filter((user: UserProps) => {
            return (email == user.email && password == user.password)
        })[0]
        
        if (!accountExists) {
            return res.status(404).json({msg: `email or password wrong`})
        }

        const token = accountExists.token

        return res.status(202).json({token})
    }
    
    return res.status(405).json({msg: `method: ${req.method} not allowed`})
}

export default handler