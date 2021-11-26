import * as Apollo from "@apollo/client";
import { gql } from "@apollo/client";
import * as Types from "../../../types";

const defaultOptions = {};
export type CreatorQueryVariables = Types.Exact<{
  id: Types.Scalars["ID"];
}>;

export type CreatorQuery = {
  __typename?: "Query";
  creator: {
    __typename?: "Creator";
    id: string;
    firstName?: string | null | undefined;
    lastName?: string | null | undefined;
    createdAt: any;
    updatedAt: any;
    credits: Array<{
      __typename?: "Credit";
      id: string;
      role: string;
      book: { __typename?: "Book"; id: string; displayName: string };
    }>;
  };
};

export const CreatorDocument = gql`
  query Creator($id: ID!) {
    creator(id: $id) {
      id
      firstName
      lastName
      createdAt
      updatedAt
      credits {
        id
        role
        book {
          id
          displayName
        }
      }
    }
  }
`;

/**
 * __useCreatorQuery__
 *
 * To run a query within a React component, call `useCreatorQuery` and pass it any options that fit your needs.
 * When your component renders, `useCreatorQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCreatorQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCreatorQuery(
  baseOptions: Apollo.QueryHookOptions<CreatorQuery, CreatorQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<CreatorQuery, CreatorQueryVariables>(
    CreatorDocument,
    options
  );
}
export function useCreatorLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<CreatorQuery, CreatorQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<CreatorQuery, CreatorQueryVariables>(
    CreatorDocument,
    options
  );
}
export type CreatorQueryHookResult = ReturnType<typeof useCreatorQuery>;
export type CreatorLazyQueryHookResult = ReturnType<typeof useCreatorLazyQuery>;
export type CreatorQueryResult = Apollo.QueryResult<
  CreatorQuery,
  CreatorQueryVariables
>;
