import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    html,
    body {
        height: 100%;
        width: 100%;
    }
    body {
        margin: 0;
        font-family: "Segoe UI", sans-serif;
    }
`;

export default GlobalStyles;