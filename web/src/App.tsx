import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Content, Footer, Header, Layout, Sidebar } from './components/layout';
import * as Pages from './pages';
import { GlobalStyle, theme } from './theme';

const client = new ApolloClient({
  uri: process.env.API_URL,
  cache: new InMemoryCache()
});

const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <Router>
          <GlobalStyle />
          <Layout>
            <Header title="Longbox" />
            <Content>
              <Switch>
                <Route path="/books" component={Pages.Books} />
                <Route path="/publishers" component={Pages.Publishers} />
                <Route exact path="/" component={Pages.HomePage} />
              </Switch>
            </Content>
            <Sidebar />
            <Footer />
          </Layout>
        </Router>
      </ApolloProvider>
    </ThemeProvider>
  );
};

export default App;
