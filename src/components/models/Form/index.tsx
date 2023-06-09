import styled from "styled-components";
import { ContentProps, FlexDirectionProps, ItemsProps } from "@/theme/types";
import breakpoints from "@/styles/breakpoints";
import { getMediaQuery } from "@/utils/algorithm";

type BreakPointsValuesProps = {
    width: number;
    height: number;
}

type BreakPointsProps = {
    lg?: BreakPointsValuesProps;
    md?: BreakPointsValuesProps;
    sm?: BreakPointsValuesProps;
    xs?: BreakPointsValuesProps;
}

interface StyledFormProps {
    alignItems?: ItemsProps;
    backgorundColor?: string;
    borderRadius?: string;
    borderWidth?: string;
    borderColor?: string;
    flexDirection?: FlexDirectionProps;
    formSize?: BreakPointsProps;
    justifyContent?: ContentProps | "space-evenly";
    height?: string;
    outlineColor?: string;
    outlineWidth?: string;
    width?: string;
}

const Form = styled.form<StyledFormProps>`
    align-items: ${props => props.alignItems};
    background-color: ${props => props.backgorundColor};
    border-color: ${props => props.borderColor};
    border-radius: ${props => props.borderRadius};
    border-width: ${props => props.borderWidth};
    display: flex;
    flex-wrap: wrap;
    justify-content: ${props => props.justifyContent};
    flex-direction: ${props => props.flexDirection};
    height: ${props => props.height};
    outline-color: ${props => props.outlineColor};
    outline-width: ${props => props.outlineWidth};
    transition: all 50ms ease-in;
    width: ${props => props.width};
    ${({formSize}) => {
        if(formSize){
            return breakpoints.map((breakpoint) => (
                getMediaQuery(formSize, breakpoint)            
            )
        )}
    }}
`

export default Form