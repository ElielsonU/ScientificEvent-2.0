import React, { PropsWithChildren } from "react";
import styled from "styled-components";
import { colors, fonts, widths, thickness, radius } from "@/theme";

import { Input, Box } from "@/components/models";
import { ArticlesProps } from "@/theme/types";

const RadioArea = styled.div`
    overflow: hidden;
    border: ${thickness.t3} solid ${colors.c2};
    border-radius: ${radius.r4};
    background-color: ${colors.c2};
    width: ${widths.w5};
    font-size: ${fonts.f3};
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: stretch;
    height: 365px;
    
    input[type="radio"] {
        position: absolute;
        width: 0;
    }
    
    label {
        display: block;
        padding: 4px 8px;
    }

    input[type="radio"]:checked + label { 
        background-color: ${colors.c3};
        border-color: #4c4;
    }
`

interface RadioBoxProps extends PropsWithChildren {
    name?: string;
    onClick?: React.MouseEventHandler;
    onDoubleClick?: Function;
    value?: number | string;
    articles?: Array<ArticlesProps>; 
}

const ArticlesRadio:React.FC<RadioBoxProps> = ({
    articles,
    onDoubleClick,
    onClick,
}) => {

    const doubleClickHandler = (index: number) => { 
        if ( onDoubleClick ) { onDoubleClick(index) } 
    }

    return (
        <RadioArea>
            {articles?.map((article, index) => (
                <Box key={article.id} overflow="hidden" borderRadius={radius.r6}>
                    <Input 
                    type="radio" 
                    name="article"
                    id={article.id}
                    onClick={onClick}
                    value={index}/>
                    <label 
                    htmlFor={article.id} 
                    onDoubleClick={() => doubleClickHandler(index)}> 
                        {article.title}
                    </label>
                </Box>
            ))}
        </RadioArea>
    )
}

export default ArticlesRadio