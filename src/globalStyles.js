import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    html {
        scroll-behaviour: smooth;

    }

    * {
        padding: 0;
        margin: 0;
        position: relative;
        box-sizing: border-box;
        font-family: 'Red Rose', cursive;
        font-weight: 400;
    }

    body {
        background: white;
        width: 100%;
        min-height: 100vh;
        overflow: hidden;
    }

    a {
        color: initial;
        text-decoration: none;

        &:hover, &:active, &:visited {
            color: initial;
        }
    }

    p {
        line-height: 35px;
    }
`;

export default GlobalStyles;