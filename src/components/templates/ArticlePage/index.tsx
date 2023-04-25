import { Box } from "@/components/models";
import React from "react";

import { widths, colors, fonts } from "@/theme";

interface ArticlesPageProps {
    article: {
        title: string,
        content: string,
        user_id: number,
        id: number,
    }
}

const ArticlePage:React.FC<ArticlesPageProps> = ({ article }) => {
    return (
        <Box 
        backgroundColor={colors.c1} 
        height={widths.w1} 
        color={colors.c2} 
        display="flex"
        flexDirection="column"
        alignItems="center"
        textAlign="center"
        padding="3px 5px"
        gap="20px">
            <Box as="h1" fontSize={fonts.f3}>{article?.title}</Box>
            <Box as="p" fontSize={fonts.f5}>{article?.content}</Box>
        </Box>
    )
}

export default ArticlePage  