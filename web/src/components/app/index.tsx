import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import * as React from 'react';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import * as Pages from '../../modules/pages';
import { GlobalStyle, theme } from '../../theme';
import { Content, Footer, HeaderBar, Layout, Sidebar } from '../layout';
import HomePage from './HomePage';

const client = new ApolloClient({
  uri: process.env.API_URL,
  cache: new InMemoryCache()
});

const ComingSoon = () => <h1>Coming Soon</h1>;

const Admin = () => (
  <div>
    <h1>Admin</h1>
    <ul>
      <li>
        <Link to="/publishers/new">Create Publisher</Link>
      </li>
      <li>
        <Link to="/series/new">Create Series</Link>
      </li>
      <li>
        <Link to="/books/new">Create Book</Link>
      </li>
    </ul>
  </div>
);

const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <Router>
          <GlobalStyle />
          <Layout>
            <Sidebar />
            <Content>
              <HeaderBar />
              <Switch>
                <Route path="/books" component={Pages.Books} />
                <Route path="/publishers" component={Pages.Publishers} />
                <Route path="/series" component={Pages.Series} />
                <Route path="/trending" component={ComingSoon} />
                <Route path="/my-wishlist" component={ComingSoon} />
                <Route path="/my-accout" component={ComingSoon} />
                <Route path="/about" component={ComingSoon} />
                <Route path="/contribute" component={ComingSoon} />
                <Route path="/admin" component={Admin} />
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
