import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
  concat,
} from "@apollo/client";
import React, { ReactElement, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const httpLink = new HttpLink({
  uri: "http://localhost/backend/graphql",
});

const token = sessionStorage.getItem("token");

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

const DataProvider = ({ children }: Props): ReactElement => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);

DataProvider.defaultProps = { children: <></> };

export default DataProvider;
