import { NextApiHandler } from "next";
import jtw from "jsonwebtoken";
import { UserProps } from "@/theme/types";

const usersKey = process.env.USERS_KEY || ""

const handler: NextApiHandler = (req, res) => {
    if (req.method == "POST") {
        const users = req.body.users
        const token = req.body.loggedAs
        
        if (!users) {
            return res.status(404).json({msg: `there's no users signed`})
        }

        if (!token) {
            return res.status(404).json({msg: `user not signed`})
        }

        let allUsers: any;

        try {
            allUsers = jtw.verify(users, usersKey)
        } catch (e: any) {
            return res.status(422).json({msg: `invalid user`})
        }

        const user = allUsers.array.filter((user: UserProps) => {
            return (user.token == token)
        })[0]

        if (!user) {
            return res.status(404).json({msg: `this user not exists`})
        }

        return res.status(202).json({
            username: user.username,
            email: user.email
        })
    } 

    return res.status(405).json({msg: `method: ${req.method} not allowed!`})
}

export default handler