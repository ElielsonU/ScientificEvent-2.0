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
    borderRadius?: string;
    borderColor?: string;
    borderWidth?: string;
    boxSize?: BreakPointsProps;
    display?: DisplayProps;
    flexDirection?: FlexDirectionProps;
    flexGrow?: string;
    fontSize?: string;
    fontWeight?: string;
    gap?: string;
    gridTemplateColumns?: string;
    gridTemplateRows?: string;
    height?: string;
    hideOverflow?: boolean;
    justifyContent?: ContentProps | "space-evenly"; 
    justifyItems?: ItemsProps;
    linearGradient?: LinearGradientProps;
    outlineColor?: string;
    outlineWidth?: string;
    padding?: string;
    width?: string;
}

const Box = styled.div<StyledBoxProps>`
    align-content: ${props => props.alignContent}; 
    align-items: ${props => props.alignItems};
    background-color: ${props => props.backgroundColor};
    background-image: url(${props => props.backgroundImage});
    background-repeat: no-repeat;
    background-size: ${props => props.backgroundSize};
    border-radius: ${props => props.borderRadius};
    border-color: ${props => props.borderColor};
    border-width: ${props => props.borderWidth};
    color: ${props => props.color};
    display: ${props => props.display};
    flex-direction: ${props => props.flexDirection};
    flex-grow: ${props => props.flexGrow};
    flex-wrap: wrap;
    font-size: ${props => props.fontSize};
    font-weight: ${props => props.fontWeight};
    gap: ${props => props.gap};
    grid-template-columns: ${props => props.gridTemplateColumns};
    grid-template-rows: ${props => props.gridTemplateRows};
    height: ${props => props.height};
    justify-content: ${props => props.justifyContent};
    justify-items: ${props => props.justifyItems};
    outline-color: ${props => props.outlineColor};
    outline-width: ${props => props.outlineWidth};
    overflow: ${props => props.hideOverflow?"hidden":null};
    padding: ${props => props.padding};
    width: ${props => props.width};

    ${({linearGradient}) => {
        if (linearGradient) {
            return css`
                background: linear-gradient( ${linearGradient.degrees}, ${linearGradient.c1} 50%, ${linearGradient.c2} 50% );
            `
        }
    }}
    ${({boxSize}) => {
        if (boxSize) {
            return breakpoints.map((breakpoint) => (
                 getMediaQuery(boxSize, breakpoint)
            ))
        }
    }}

`

export default Box