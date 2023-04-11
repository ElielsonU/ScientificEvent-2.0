import { createGlobalStyle } from "styled-components";
import { colors, radius } from "@/theme";

const GlobalStyle = createGlobalStyle`

    * {
        border: 0 solid;
        box-sizing: border-box;
        color: inherit;
        font-size: inherit;
        font-family: inherit;
        margin: 0;
        outline: 0 solid;
        padding: 0;
    }

    html { font-size: 12px; }
    
    body, html, #__next {
        color: ${ colors.c1 };
        height: 100%;
    }
    
    #__next { background-color: ${colors.c2}; }
    
    body { font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; }

    input:hover { outline: none; }

    input:focus { outline: none; }

    textarea { resize: none; }

    textarea::placeholder { color: inherit; }

    ::-webkit-scrollbar { width: 10px; }

    ::-webkit-scrollbar-track { background: ${colors.transparent}; }

    ::-webkit-scrollbar-thumb {
        background-color: #888;
        border-radius: ${radius.r6};
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #555;
        cursor: alias !important;
    }

    a {
        color: inherit;
        text-decoration: none;
    }
    
    @media (min-width: 1336px) {
        html {font-size: 12px; }
    }
    
    @media (max-width: 525px) {
        html { font-size: 10px; }
    }

    @media (max-height: 600px) {
        #auto-page-height { height: auto; }
    }

`

export default GlobalStyle