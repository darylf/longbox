import { createGlobalStyle } from 'styled-components';

// Codes for color palette
export const colors = {
  disabled: 'hsl(212.3, 16.7%, 69.4%)',
  error: 'hsl(359.6, 82.1%, 62.7%)',
  errorActive: 'hsl(359.6, 82.1%, 42.7%)',
  errorHover: 'hsl(359.6, 82.1%, 65%)',
  primary: 'hsl(209.6, 100%, 55.9%)',
  primaryActive: 'hsl(209.6, 100%, 35.9%)',
  primaryHover: 'hsl(209.6, 100%, 65%)',
  secondary: 'hsl(29.4, 100%, 63.1%)',
  secondaryActive: 'hsl(29.4, 100%, 43.1%)',
  secondaryHover: 'hsl(29.4, 100%, 65%)',
  success: 'hsl(164, 75.6%, 46.7%)',
  successActive: 'hsl(164, 75.6%, 26.7%)',
  successHover: 'hsl(164, 75.6%, 60%)',
  text: 'hsl(223.8, 81.3%, 6.3%)'
};

// Sizes for typography scale
export const sizes = {
  xs: '12px',
  sm: '14px',
  base: '16px',
  lg: '18px',
  xl: '20px',
  xxl: '24px',
  xxxl: '30px',
  xxxxl: '36px'
};

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    background: ${colors.primary};
    color: ${colors.text};
    font-size: 1.1em;
    line-height: 1.5;
    text-align: center;
  }

  h1, h2, h3, h4, h5, h6, ul, li {
    margin: 0;
    padding: 0;
  }

  a {
    color: hsla(${colors.secondary}, 100%, 47%, 1);
  }
`;

export default GlobalStyle;
