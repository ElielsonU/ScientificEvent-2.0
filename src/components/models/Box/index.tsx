import styled from "styled-components";
import { ContentProps, ItemsProps } from "@/props";

interface StyledBoxProps {
    alignContent?: ContentProps;
    alignItems?: ItemsProps;
    backgroundColor?: string;
    backgroundImage?: string;
    backgroundSize? : "contain" | "center" | string;
    display?: "flex" | "grid";
    fontSize?: string;
    gridTemplateColumns?: string;
    gridTemplateRows?: string;
    height? : string;
    justifyContent?: ContentProps | "space-evenly"; 
    justifyItems?: ItemsProps;
    width?: string;
}

const Box = styled.div<StyledBoxProps>`
    align-content: ${props => props.alignContent}; 
    align-items: ${props => props.alignItems};
    background-color: ${props => props.backgroundColor};
    background-image: url(${props => props.backgroundImage});
    background-repeat: no-repeat;
    background-size: ${props => props.backgroundSize};
    color: ${props => props.color};
    display: ${props => props.display};
    flex-wrap: wrap;
    font-size: ${props => props.fontSize};
    grid-template-columns: ${props => props.gridTemplateColumns};
    grid-template-rows: ${props => props.gridTemplateRows};
    height: ${props => props.height};
    justify-content: ${props => props.justifyContent};
    justify-items: ${props => props.justifyItems};
    width: ${props => props.width};
`

export default Box