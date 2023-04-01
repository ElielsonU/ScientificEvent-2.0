import styled from "styled-components";
import { BreakPointsProps } from "@/theme/types";

interface StyledButtonProps {
    backgroundColor?: string;
    BoxSize?: BreakPointsProps;
    borderRadius?: string;
    fontSize?: string;
    fontWeight?: string;
    padding?: string;
    height? : string;
    width?: string;
}

const Button = styled.button<StyledButtonProps>`
    background-color: ${props => props.backgroundColor};
    border-radius: ${props => props.borderRadius};
    color: ${props => props.color};
    font-size: ${props => props.fontSize};
    font-weight: ${props => props.fontWeight};
    padding: ${props => props.padding};
    height: ${props => props.height};
    text-align: center;
    transition: all 200ms ease-in;
    width: ${props => props.width};

    &:active {
        filter: brightness(75%);
        box-shadow: 0px 0px 10px 2px${props => props.backgroundColor};
    }
`

export default Button