import type { NextApiHandler } from 'next'
import type { UserProps } from '@/theme/types';
import { randomUUID } from 'crypto';
import jtw from "jsonwebtoken";

const databaseKey = process.env.DATABASE_KEY || ""

const handler:NextApiHandler = ( req, res ) => {
    if (req.method == "POST") {
        const username = req.body.username
        const password = req.body.password
        const admin = req.body.admin
        const email = req.body.email
        const database = req.body.database

        if (!username || !password || !email || typeof admin != "boolean") {
            return res.status(404).json({msg: `missing params`})
        }

        let databaseObj: any;
        const token = randomUUID()

        if (database) {
            try { 
                databaseObj = jtw.verify(database, databaseKey) 
                
                const emailAlredyExists = databaseObj.users.filter((user: UserProps) => {
                    return (email == user.email)
                })[0]
                if (emailAlredyExists) {
                    return res.status(406).json({msg: `email alredy exists`})
                }
            } 
            catch (e) {
                return res.status(422).json({msg: `unrecognized token`})
            }
        } else { databaseObj = {users: [], articles: []} }

        databaseObj.users.push({
            username,
            password,
            admin,
            token,
            email,
        })

        const msg = jtw.sign(databaseObj, databaseKey)

        return res.status(200).json({msg, token})
    }

    return res.status(405).json({msg: `method: ${req.method} not allowed!`})
}


export default handler
