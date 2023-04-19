import React, { useState, useEffect } from "react"

import Link from "next/link"
import { Box, Button } from "@/components/models"
import { getarticlespage } from "@/utils/api-connection"


const ArticlesList: React.FC = () => {
    const [articles, setArticles ] = useState([{
        id: "",
        title: ""
    }])
    const [page, setPage] = useState(1)
    const [nextPage, setNextPage] = useState(false)

    useEffect(() => {
        (async function getArticlesList () {
            setArticles(await getarticlespage(page))
            setNextPage(Boolean((await getarticlespage(page + 1))[0]))
        })()
    }, [page])

    const goToNextPage = () => {
        if(nextPage) { setPage(page + 1) }
    }

    return (
        <Box >
            <Box as="ul">
                {articles.map((article, index) => (
                    <Box as="li" key={article.id}>
                        <Link href={`/articles/${(index+1)+((page-1)*10)}`}>       
                            {article.title}
                        </Link>
                    </Box>
                ))}
            </Box>
            {nextPage?<Button onClick={goToNextPage}>Next</Button>:null}
            
        </Box>
    )
}

export default ArticlesList