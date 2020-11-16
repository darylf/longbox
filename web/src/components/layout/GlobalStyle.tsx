import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Poppins', monospace;
    font-size: 14px;
  }

  h1,
h2,
h3,
h4,
h5,
h6 {
  clear: both;
  font-family: Bitter, Georgia, serif;
  line-height: 1.3; }

h1 {
  font-size: 48px;
  margin: 33px 0; }

h2 {
  font-size: 30px;
  margin: 25px 0; }

h3 {
  font-size: 22px;
  margin: 22px 0; }

h4 {
  font-size: 20px;
  margin: 25px 0; }

h5 {
  font-size: 18px;
  margin: 30px 0; }

h6 {
  font-size: 16px;
  margin: 36px 0; }
`;

export default GlobalStyle;
