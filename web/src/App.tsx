import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  Content,
  Footer,
  GlobalStyle,
  Header,
  Layout,
  Sidebar
} from './components/layout';
import * as Pages from './pages';

const client = new ApolloClient({
  uri: process.env.API_URL,
  cache: new InMemoryCache()
});

const App = (): JSX.Element => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <GlobalStyle />
        <Layout>
          <Header title="Longbox" />
          <Sidebar />
          <Content>
            <Switch>
              <Route path="/books">
                <Pages.Books />
              </Route>
              <Route path="/publishers">
                <Pages.Publishers />
              </Route>
              <Route path="/">
                <Pages.HomePage />
              </Route>
            </Switch>
          </Content>
          <Footer />
        </Layout>
      </Router>
    </ApolloProvider>
  );
};

export default App;
