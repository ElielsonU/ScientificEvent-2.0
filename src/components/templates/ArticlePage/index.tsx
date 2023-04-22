import { Box } from "@/components/models";
import React from "react";

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
        <Box>
            <Box as="h1">{article.title}</Box>
            <Box as="p">{article.content}</Box>
        </Box>
    )
}

export default ArticlePage  