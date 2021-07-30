import { createGlobalStyle } from "styled-components";
import { ThemeType } from "./theme";

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  html {font-size: 100%} /*16px*/

  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    line-height: 1.75;
  }

  p {margin-bottom: ${({ theme }) => theme.fontSizes.base}}

  h1, h2, h3, h4, h5 {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    line-height: 1.3;
  }

  h1 {
    margin-top: 0;
    font-size: ${({ theme }) => theme.fontSizes.xxl};
  }

  h2 {font-size: ${({ theme }) => theme.fontSizes.xl};}

  h3 {font-size: ${({ theme }) => theme.fontSizes.lg};}

  h4 {font-size: ${({ theme }) => theme.fontSizes.base};}

  small, .text_small {font-size: ${({ theme }) => theme.fontSizes.sm};}
`;

export default GlobalStyle;
