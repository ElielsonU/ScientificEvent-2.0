import React from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import ArticlePage from "@/components/templates/ArticlePage";
import { getarticleslength, getarticle } from "@/utils/api-connection";


export const getStaticPaths: GetStaticPaths = async () => {

    let lenght = await getarticleslength()
    const paths = []

    while (lenght) {
        paths.push({
            params: {
                id: lenght.toString()
            }
        })
        --lenght
    }

    return {
        paths,
        fallback: "blocking",
    }
}

export const getStaticProps: GetStaticProps = async (context) => {
    const article = await getarticle(Number(context.params?.id))

    return {
        props: { article } 
    }
}

interface ArticleProps {
    article: {
        title: string,
        content: string,
        user_id: number,
        id: number,
    }
}

export default function Article (props: ArticleProps) {
    return <ArticlePage article={props.article}/>
}