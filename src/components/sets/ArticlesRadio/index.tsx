import React, { PropsWithChildren } from "react";
import styled from "styled-components";
import { colors, fonts, widths, thickness, radius } from "@/theme";

import { Input, Box } from "@/components/models";
import { ArticlesProps } from "@/theme/types";

const RadioArea = styled.div`
    overflow: hidden;
    border: ${thickness.t3} solid ${colors.c2};
    border-radius: 15px 15px 0px 0px;
    background-color: ${colors.c2};
    font-size: ${fonts.f4};
    width: ${widths.w1};
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: stretch;
    height: ${widths.w4};
    
    input[type="radio"] {
        position: absolute;
        width: 0;
    }
    
    label {
        display: block;
        padding: 4px 8px;
        width: ${widths.w1};
        white-space: nowrap;
    }

    input[type="radio"]:checked + label { 
        background-color: ${colors.c3};
        border-color: #4c4;
    }
`

interface RadioBoxProps {
    onClick?: React.MouseEventHandler;
    onDoubleClick?: Function;
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
                <Box key={article.id}
                alignItems="stretch"
                justifyContent="stretch"
                display="flex" 
                overflow="hidden" 
                height={widths.w9}
                borderRadius={radius.r6}>
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