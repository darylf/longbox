import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import * as React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import * as Pages from '../../modules/pages';
import { GlobalStyle, theme } from '../../theme';
import { Content, Footer, HeaderBar, Layout, Navigation } from '../layout';
import HomePage from '.';

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
            <Navigation />
            <Content>
              <HeaderBar />
              <Switch>
                <Route path="/books" component={Pages.Books} />
                <Route path="/publishers" component={Pages.Publishers} />
                <Route path="/series" component={Pages.Series} />
                <Route exact path="/" component={HomePage} />
              </Switch>
              <Footer />
            </Content>
          </Layout>
        </Router>
      </ApolloProvider>
    </ThemeProvider>
  );
};

export default App;
