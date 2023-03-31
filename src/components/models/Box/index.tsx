import styled, { css } from "styled-components";
import { getElement } from "@/utils/algorithm";
import { 
    ContentProps,
    DisplayProps, 
    ItemsProps, 
    LinearGradientProps, 
    FlexDirectionProps,
    BreakPointsProps,
} from "@/types";

interface StyledBoxProps {
    alignContent?: ContentProps;
    alignItems?: ItemsProps;
    backgroundColor?: string;
    backgroundImage?: string;
    backgroundSize?: string;
    BoxSize?: BreakPointsProps;
    display?: DisplayProps;
    flexDirection?: FlexDirectionProps;
    fontSize?: string;
    gridTemplateColumns?: string;
    gridTemplateRows?: string;
    height? : string;
    justifyContent?: ContentProps | "space-evenly"; 
    justifyItems?: ItemsProps;
    linearGradient?: LinearGradientProps;
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

    ${({linearGradient}) => {
        if (linearGradient) {
            return css`
                background: linear-gradient( ${linearGradient.degrees}, ${linearGradient.c1} 50%, ${linearGradient.c2} 50% );
            `
        }
    }}


`

export default Box