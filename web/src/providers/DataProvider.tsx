import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  concat,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import * as React from "react";
import { AUTH_TOKEN } from "../components/auth/useAuthenticationToken";

interface Props {
  children?: React.ReactNode;
}

const httpLink = new HttpLink({
  uri: "http://localhost/backend/graphql",
});

const token = sessionStorage.getItem(AUTH_TOKEN);

const authMiddleware = new ApolloLink((operation, forward) => {
  if (token) {
    operation.setContext({
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  return forward(operation);
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: concat(authMiddleware, httpLink),
});

function DataProvider({ children }: Props): JSX.Element {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}

export default DataProvider;
