import * as Apollo from "@apollo/client";
import { gql } from "@apollo/client";
import * as Types from "../../../types";

const defaultOptions = {};
export type UsersQueryVariables = Types.Exact<{ [key: string]: never }>;

export type UsersQuery = {
  __typename?: "Query";
  users: {
    __typename?: "UserConnection";
    nodes?: Types.Maybe<
      Array<
        Types.Maybe<{
          __typename?: "User";
          id: string;
          avatar: string;
          email: string;
          roles: Array<string>;
          username: string;
        }>
      >
    >;
  };
};

export const UsersDocument = gql`
  query Users {
    users {
      nodes {
        id
        avatar
        email
        roles
        username
      }
    }
  }
`;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useUsersQuery(
  baseOptions?: Apollo.QueryHookOptions<UsersQuery, UsersQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<UsersQuery, UsersQueryVariables>(
    UsersDocument,
    options
  );
}
export function useUsersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<UsersQuery, UsersQueryVariables>(
    UsersDocument,
    options
  );
}
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersQueryResult = Apollo.QueryResult<
  UsersQuery,
  UsersQueryVariables
>;
