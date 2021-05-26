import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import * as React from 'react';
import { AUTH_TOKEN } from '../modules/auth/useAuthenticationToken';

interface Props {
  children?: React.ReactNode;
}

const httpLink = createHttpLink({
  uri: 'http://localhost/backend/graphql'
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token if it exists
  const token = sessionStorage.getItem(AUTH_TOKEN);
  const authorization_header = token
    ? { authorization: `X-CSRF-TOKEN ${token}` }
    : null;
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      ...authorization_header
    }
  };
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink)
});

function DataProvider({ children }: Props): JSX.Element {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}

export default DataProvider;
