import styled from "styled-components";
import { InputProps } from "@/theme/types";
import { weights } from "@/theme";

const Input = styled.input<InputProps>`
    color: ${props => props.color};
    background-color: ${props => props.backgroundColor};
    border-color: ${props => props.borderColor};
    border-width: ${props => props.borderWidth};
    border-radius: ${props => props.borderRadius};
    height: ${props => props.height};
    font-size: ${props => props.fontSize};
    font-weight: ${props => props.fontWeight};
    padding: ${props => props.padding};
    text-align: ${props => props.textAlign};
    width: ${props => props.width};

    &::placeholder { 
        color: ${props => props.color};
        font-weight: ${weights.bold};
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover, 
    &:-webkit-autofill:focus, 
    &:-webkit-autofill:active,
    &:-internal-autofill-selected {
        -webkit-text-fill-color: ${props => props.color};
        -webkit-box-shadow: 0 0 0 30px ${props => props.backgroundColor} inset !important;
        caret-color: ${props => props.color};
    }
`

export default Input