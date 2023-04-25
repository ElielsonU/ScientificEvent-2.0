import React, { useState, useEffect } from "react"
import { useRouter } from "next/router";

import { widths, fonts, colors, thickness, radius, weights } from "@/theme";

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

    const router = useRouter()

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

    const selectArticle = (index: number) => {
        if (index > -1 && index < 10) {
            router.push(`/articles/${(index+1)+((page-1)*10)}`)
        }
    }

    const radioClickHandler = (event: React.MouseEvent) => {
        const value = Number((event.target as HTMLInputElement).value)
        setViewing(value)
    }

    return (
        <Box 
        width={widths.w1} 
        flexGrow="1"
        display="flex"
        alignItems="center">
            <ArticlesRadio 
            articles={articles}
            onClick={radioClickHandler}
            onDoubleClick={selectArticle}/>
            <Box width={widths.w1} display="flex" height={widths.w4} 
            borderRadius="0px 0px 15px 15px"backgroundColor={colors.c1} overflow="hidden" 
            flexDirection="column" borderWidth={thickness.t3} borderColor={colors.c2}>
                <Box display="flex" width={widths.w1} flexGrow="1" padding="8px 5px" color={colors.c2} flexDirection="column">
                    <Box as="h2" fontSize={fonts.f2}>
                        Title: {articles[viewing]?.title}
                    </Box>
                    <Box fontSize={fonts.f4} fontWeight={weights.bold} display="flex" justifyContent="space-between">
                        <Box>ID: {articles[viewing]?.id}</Box>
                        <Box>User ID: {articles[viewing]?.user_id}</Box>
                    </Box>
                </Box>

                <Box 
                display="flex"  
                fontSize={fonts.f4} 
                fontWeight={weights.bold}
                gap="2px"
                alignItems="stretch">
                    <Button 
                    onClick={goToPreviousPage} 
                    style={{flexGrow: "1"}}
                    padding="5px 0px">Back</Button>
                    <Button 
                    onClick={() => {selectArticle(viewing)}} 
                    style={{flexGrow: "1"}}
                    padding="5px 0px">o</Button>
                    <Button 
                    onClick={goToNextPage} 
                    style={{flexGrow: "1"}}
                    padding="5px 0px">Next</Button>
                </Box>
            </Box>
        </Box>
    )
}

export default ArticlesViewer