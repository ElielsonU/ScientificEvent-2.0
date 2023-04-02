import styled from "styled-components";
import { getMediaQuery } from "@/utils/algorithm";
import breakpoints from "@/styles/breakpoints";
import { BreakPointsProps } from "@/theme/types";

interface StyledButtonProps {
    backgroundColor?: string;
    BoxSize?: BreakPointsProps;
    borderColor?: string;
    borderRadius?: string;
    borderWidth?: string;
    fontSize?: string;
    fontWeight?: string;
    padding?: string;
    height? : string;
    width?: string;
}  

const Button = styled.button<StyledButtonProps>`
    background-color: ${props => props.backgroundColor};
    border-radius: ${props => props.borderRadius};
    border-width: ${props => props.borderWidth};
    border-color: ${props => props.borderColor};
    color: ${props => props.color};
    font-size: ${props => props.fontSize};
    font-weight: ${props => props.fontWeight};
    padding: ${props => props.padding};
    height: ${props => props.height};
    text-align: center;
    transition: all 150ms ease-in;
    width: ${props => props.width};

    &:active {
        filter: brightness(75%);
        box-shadow: 0px 0px 10px 2px${props => props.backgroundColor};
    }

    ${({BoxSize}) => {
        if (BoxSize) {
            return breakpoints.map((breakpoint) => (
                 getMediaQuery(BoxSize, breakpoint)
            ))
        }
    }}
`

export default Button