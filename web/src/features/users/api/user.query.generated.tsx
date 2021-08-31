import * as Apollo from "@apollo/client";
import { gql } from "@apollo/client";
import * as Types from "../../../types";

const defaultOptions = {};
export type UserQueryVariables = Types.Exact<{
  id: Types.Scalars["ID"];
}>;

export type UserQuery = {
  __typename?: "Query";
  user: {
    __typename?: "User";
    id: string;
    email: string;
    username: string;
    avatar: string;
    roles: Array<string>;
    createdAt: any;
    updatedAt: any;
  };
};

export const UserDocument = gql`
  query User($id: ID!) {
    user(id: $id) {
      id
      email
      username
      avatar
      roles
      createdAt
      updatedAt
    }
  }
`;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUserQuery(
  baseOptions: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
}
export function useUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(
    UserDocument,
    options
  );
}
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
