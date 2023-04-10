import { NextApiHandler } from "next";
import jtw from "jsonwebtoken"

const databaseKey = String(process.env.DATABASE_KEY)

const handler: NextApiHandler = ( req, res ) => {

    if (req.method = "POST") {
        const email = req.body.email
        const title = req.body.title
        const content = req.body.content
        const database = req.body.database
        
        if (!email || !title || !content ) {
            return res.status(404).json({msg: `missing some params (email, title, content)`})
        }

        if (!database) {
            return res.status(401).json({msg: `there's no users signed to submit an article`})
        }

        let databaseObj: any

        try {
            databaseObj = jtw.verify(database, databaseKey)
        } catch {
            return res.status(422).json({msg: "unrecognized token"})
        }

        if (!databaseObj.users) {
            return res.status(401).json({msg: `there's no users signed to submit an article`})
        }

        databaseObj.articles.push({
            content,
            email, 
            title,
        })
        
        const msg = jtw.sign(databaseObj, databaseKey)

        return res.status(200).json({msg})
    }

    return res.status(405).json({msg: `method: ${req.method} not allowed`})

}

export default handler