import { NextApiHandler } from "next";
import jtw from "jsonwebtoken"

const databaseKey = String(process.env.DATABASE_KEY)

const handler: NextApiHandler = ( req, res ) => {
    if ( req.method == "GET" ) {
        const database = String(req.query.database) 
        
        try {
            const articles = jtw.verify(database, databaseKey)
            if ( typeof articles != "string") {
                return res.status(202).json({articles: articles.articles})
            }

            return res.status(406).json({msg: "invalid content"})

        } catch {
            return res.status(422).json({msg: "unrecognized token"})
        }
    }

    return res.status(405).json({msg: `method: ${req.method} not allowed`})
}

export default handler