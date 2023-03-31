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
    }
    
    body, html, #__next {
        color: ${ colors.main };
        height: 100%;
        overflow: hidden;
    }
    
    #__next { background-color: ${colors.c2}; }

    a {
        color: inherit;
        text-decoration: none;
    }
`

export default GlobalStyle