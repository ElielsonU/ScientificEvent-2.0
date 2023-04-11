import { NextApiHandler } from "next";
import jtw from "jsonwebtoken";
import { UserProps } from "@/theme/types";

const databaseKey = String(process.env.DATABASE_KEY)

const handler: NextApiHandler = (req, res) => {

    if (req.method == "GET") {
        
        const database = String(req.query.database)
        const token = req.cookies.loggedAs
        
        if (!database) {
            return res.status(404).json({msg: `there's no users signed`})
        }

        if (!token) {
            return res.status(404).json({msg: `user not signed`})
        }

        let databaseObj: any;

        try {
            databaseObj = jtw.verify(database, databaseKey)
        } catch (e: any) {
            return res.status(422).json({msg: `unrecognized token`})
        }

        const user = databaseObj.users.filter((user: UserProps) => {
            return (user.token == token)
        })[0]

        if (!user) {
            return res.status(404).json({msg: `this user not exists`})
        }

        return res.status(202).json({
            user: {
                username: user.username,
                email: user.email,
                admin: user.admin,
            }
        })
    } 

    return res.status(405).json({msg: `method: ${req.method} not allowed!`})
}

export default handler