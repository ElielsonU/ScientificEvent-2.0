import React, { PropsWithChildren } from "react";
import styled from "styled-components";
import { colors } from "@/theme";

import { Input } from "@/components/models";
import { ArticlesProps } from "@/theme/types";

const RadioArea = styled.div`
    overflow: hidden;

    input[type="radio"] {
        width: 0;
    }

    label {
        display: block;
    }

    input[type="radio"]:checked + label {
        background-color: #bfb;
        border-color: #4c4;
    }
`

interface RadioBoxProps extends PropsWithChildren {
    name?: string;
    id?: string;
    onClick?: React.MouseEventHandler;
    onDoubleClick?: React.MouseEventHandler;
    value?: number | string;
    articles?: Array<ArticlesProps>; 
}

const ArticlesRadio:React.FC<RadioBoxProps> = ({
    articles,
    onDoubleClick,
    onClick,
}) => {
    return (
        <RadioArea>
            {articles?.map((article, index) => (
                <>
                    <Input 
                    type="radio" 
                    name="article"
                    id={article.id} 
                    onClick={onClick}
                    value={index}/>
                    <label htmlFor={article.id} onDoubleClick={onDoubleClick}> 
                        {article.title}
                    </label>
                </>
            ))}
        </RadioArea>
    )
}

export default ArticlesRadio