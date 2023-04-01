import { createGlobalStyle } from "styled-components";
import { colors } from "@/theme";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        color: inherit;
        font-size: inherit;
        font-family: inherit;
        padding: 0;
        margin: 0;
        border: 0 solid;
    }
    
    body, html, #__next {
        color: ${ colors.c1 };
        height: 100%;
        overflow: hidden;
    }
    
    #__next { background-color: ${colors.c2}; }
    
    body { font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; }

    input:hover { outline: none; }

    input:focus { outline: none; }

    a {
        color: inherit;
        text-decoration: none;
    }
`

export default GlobalStyle