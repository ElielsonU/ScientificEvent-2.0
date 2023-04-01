import styled, { css } from "styled-components";
import breakpoints from "@/styles/breakpoints";
import { getMediaQuery } from "@/utils/algorithm";
import { 
    ContentProps,
    DisplayProps, 
    ItemsProps, 
    LinearGradientProps, 
    FlexDirectionProps,
    BreakPointsProps,
} from "@/theme/types";

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
    fontWeight?: string;
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
    flex-direction: ${props => props.flexDirection};
    font-size: ${props => props.fontSize};
    font-weight: ${props => props.fontWeight};
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
    ${({BoxSize}) => {
        if (BoxSize) {
            return breakpoints.map((breakpoint) => (
                 getMediaQuery(BoxSize, breakpoint)
            ))
        }
    }}

`

export default Box