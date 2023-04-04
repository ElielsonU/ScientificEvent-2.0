import type { NextApiHandler } from 'next'
import type { UserProps } from '@/theme/types';
import { randomUUID } from 'crypto';
import jtw from "jsonwebtoken";

const usersKey = process.env.USERS_KEY || ""

const handler:NextApiHandler = ( req, res ) => {
    if (req.method == "POST") {
        const username = req.body.username
        const password = req.body.password
        const email = req.body.email
        const users = req.body.users

        if (!username || !password || !email) {
            return res.status(404).json({msg: `there's no users signed`})
        }

        let allUsers: any;
        const token = randomUUID()

        if (users) {
            try { 
                allUsers = jtw.verify(users, usersKey) 
                const emailAlredyExists = allUsers.array.filter((user: UserProps) => {
                    return (email == user.email)
                })[0]
                if (emailAlredyExists) {
                    return res.status(406).json({msg: `email alredy exists`})
                }
            } 
            catch (e) {
                return res.status(422).json({msg: `unrecognized token`})

            }
        } else { allUsers = {array: []} }

        allUsers.array.push({
            token,
            username,
            password,
            email,
        })

        const msg = jtw.sign(allUsers, usersKey)

        return res.status(200).json({msg, token})
    }

    return res.status(405).json({msg: `method: ${req.method} not allowed!`})
}


export default handler
