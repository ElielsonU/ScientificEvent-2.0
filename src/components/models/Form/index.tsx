import styled, { css } from "styled-components";
import { ContentProps, ItemsProps } from "@/types";
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

interface FormProps {
    alignItems?: ItemsProps;
    backgorundColor?: string;
    borderRadius?: string;
    formSize?: BreakPointsProps;
    justifyContent?: ContentProps | "space-evenly";
    heigth?: string;
    width?: string;
}

const Form = styled.form<FormProps>`
    align-items: ${props => props.alignItems};
    background-color: ${props => props.backgorundColor};
    border-radius: ${props => props.borderRadius};
    display: flex;
    flex-wrap: wrap;
    justify-content: ${props => props.justifyContent};
    height: ${props => props.heigth};
    transition: all 50ms ease-in ;
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