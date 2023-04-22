import React, { useState, useEffect } from "react"

import { widths, fonts, colors, thickness } from "@/theme";

import { Box, Button } from "@/components/models"
import ArticlesRadio from "../ArticlesRadio"
import { getarticlespage } from "@/utils/api-connection"


const ArticlesViewer: React.FC = () => {
    const [articles, setArticles ] = useState([{
        id: "",
        title: "",
        user_id: "",
        content: "",
    }])
    const [viewing, setViewing] = useState(-1)
    const [nextPage, setNextPage] = useState(false)
    const [page, setPage] = useState(1)

    useEffect(() => {
        (async function getArticlesList () {
            setArticles(await getarticlespage(page))
            setNextPage(Boolean((await getarticlespage(page + 1))[0]))
        })()
    }, [page])

    const goToNextPage = () => {
        if(nextPage) { 
            setViewing(-1)
            setPage(page + 1) 
        }
    }

    const goToPreviousPage = () => {
        if(page>1) { 
            setViewing(-1)
            setPage(page - 1)
        }
    }

    // (index+1)+((page-1)*10)

    const radioDoubleClickHandler = (index: number) => {

    }

    const radioClickHandler = (event: React.MouseEvent) => {
        const value = Number((event.target as HTMLInputElement).value)
        setViewing(value)
    }

    return (
        <Box 
        width={widths.w1} 
        height={widths.w1} 
        display="flex"
        alignItems="center"
        borderWidth={thickness.t1}
        borderColor={colors.c4}
        backgroundColor={colors.c4}
        gap="10px">
            <ArticlesRadio 
            articles={articles}
            onClick={radioClickHandler}
            onDoubleClick={radioDoubleClickHandler}
            />

            <Box>
                {articles[viewing]?.title}
            </Box>

            {page>1?<Button onClick={goToPreviousPage}>Back</Button>:null}
            {nextPage?<Button onClick={goToNextPage}>Next</Button>:null}
            
        </Box>
    )
}

export default ArticlesViewer