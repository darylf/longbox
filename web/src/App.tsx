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
  );
};

export default App;
