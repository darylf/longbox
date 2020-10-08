import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import * as React from 'react';
import * as Pages from './pages';
import { PublisherList } from './components/publisher';

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache()
});

const App = (): JSX.Element => {
  return (
    <ApolloProvider client={client}>
      <Pages.HomePage />
      <PublisherList />
    </ApolloProvider>
  );
};

export default App;
