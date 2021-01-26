import { createGlobalStyle } from 'styled-components';
import { ThemeType } from './theme';

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.1em;
    line-height: 1.5;
  }

  h1, h2, h3, h4, h5, h6, ul, li {
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
