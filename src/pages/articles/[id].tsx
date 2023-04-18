import React from "react";
import { GetStaticProps, GetStaticPaths } from "next";

export const getStaticPaths: GetStaticPaths = () => {
    return {
        paths: [],
        fallback: true,
    }
}

export const getStaticProps: GetStaticProps = (context) => {
    return {
        props: {} 
    }
}

export default function Article () {
    return <></>
}