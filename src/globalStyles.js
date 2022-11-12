import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    html {
        scroll-behaviour: smooth;

    }

    * {
        padding: 0;
        margin: 0;
        position: relative;
        box-sizing: content-box;
        font-family: 'Red Rose', cursive;
        font-weight: 400;
    }

    body {
        background: white;
        width: 100%;
        padding: 24px 0;
        min-height: 100vh;
    }

    a {
        color: initial;
        text-decoration: none;

        &:hover, &:active, &:visited {
            color: initial;
        }
    }

    #root {
        width: 100%;
        max-width: 1240px;
        padding: 0 24px;
        margin: auto;
    }
`;

export default GlobalStyles;