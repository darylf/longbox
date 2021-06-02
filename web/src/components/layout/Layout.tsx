import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from '../../theme';
import { Content, Footer, HeaderBar, Sidebar } from '.';

const Wrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 7fr;
  grid-template-areas:
    'sidebar content'
    'sidebar footer';
`;
interface Props {
  children?: React.ReactNode;
}

function Layout({ children }: Props): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrap>
        <Sidebar />
        <Content>
          <HeaderBar />
          {children}
          <Footer />
        </Content>
      </Wrap>
    </ThemeProvider>
  );
}

export default Layout;
