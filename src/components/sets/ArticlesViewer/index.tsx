import React from "react"
import { widths, colors, fonts, radius, weights } from "@/theme"

import { Box, Button } from "@/components/models"
import { useEffect, useState } from "react"
import { getarticle, getusers } from "@/utils/api-connection"
import { useRouter } from "next/router"


const ArticlesViewer: React.FC = () => {

    const [articles, setArticles] = useState([{
        title: "",
        content: "",
        email: ""
    }])
    const [reading, setReading] = useState(0)
    const [users, setUsers] = useState(0)
    const router = useRouter()

    const nextArticle = () => {
        const length = articles.length

        if (reading + 1 < length) {
            setReading(reading + 1)
        } else {
            setReading(0)
        }
    }

    const previousArticle = () => {
        const length = articles.length

        if (reading - 1 >= 0) {
            setReading(reading - 1)
        } else {
            setReading(length - 1)
        }
    }

    useEffect(() => {
        (async function effect () {
            setArticles(await getarticle(router))
            setUsers(await getusers(router))
        })()
    }, [])

    return (
        <Box 
        alignItems="center"
        color={colors.c2}
        display="flex" 
        flexDirection="column"
        justifyContent="center"
        gap="20px"
        height={widths.w1} 
        width={widths.w1}>
            <Box display="flex" width={widths.w1} alignItems="flex-start" justifyContent="space-between">
                <Box as="span" fontSize={fonts.f7} color={colors.c2}>users signed: {users}</Box>
                <Box as="span" fontSize={fonts.f7}>articles submited: {articles.length}</Box>
            </Box>

            <Box flexGrow="1" width={widths.w3} display="flex" justifyContent="space-around" alignItems="center">
                
            <Box display="flex" width={widths.w2} alignItems="center" justifyContent="space-between">
                <Button 
                fontSize={fonts.f2} 
                fontWeight={weights.bold}
                backgroundColor={colors.transparent}
                onClick={previousArticle}>
                    {"<"}
                </Button>

                <Box as="h2" fontSize={fonts.f4} fontWeight={weights.bold} style={{maxWidth: "170px", wordWrap: "break-word"}} textAlign="center" overflow="auto">{articles[reading]?.title}</Box>

                <Button 
                fontSize={fonts.f2} 
                fontWeight={weights.bold}
                backgroundColor={colors.transparent}
                onClick={nextArticle}>
                    {">"}
                </Button>
            </Box>

                <Box borderRadius={radius.r6} borderWidth="5px" borderColor={colors.c1} boxSize= {{
                    lg: { width: 900, height: 400 },
                    md: { width: 700, height: 500 },
                    sm: { width: 800, height: 400 },
                    xs: { width: 400, height: 420 },
                }} height="80%" overflow="auto" fontSize={fonts.f5} backgroundColor={colors.c1} padding="3px 5px" color={colors.c3}>  
                    {articles[reading]?.content}
                </Box>
            </Box>
        </Box>
    )
}

export default ArticlesViewer