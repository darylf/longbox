import * as Apollo from "@apollo/client";
import { gql } from "@apollo/client";
import * as Types from "../../../types";

const defaultOptions = {};
export type CreatorsSearchQueryVariables = Types.Exact<{
  search?: Types.InputMaybe<Types.Scalars["String"]>;
}>;

export type CreatorsSearchQuery = {
  __typename?: "Query";
  creators: {
    __typename?: "CreatorConnection";
    nodes?:
      | Array<
          | {
              __typename?: "Creator";
              id: string;
              displayName?: string | null | undefined;
              firstName?: string | null | undefined;
              lastName?: string | null | undefined;
            }
          | null
          | undefined
        >
      | null
      | undefined;
  };
};

export const CreatorsSearchDocument = gql`
  query CreatorsSearch($search: String) {
    creators(search: $search) {
      nodes {
        id
        displayName
        firstName
        lastName
      }
    }
  }
`;

/**
 * __useCreatorsSearchQuery__
 *
 * To run a query within a React component, call `useCreatorsSearchQuery` and pass it any options that fit your needs.
 * When your component renders, `useCreatorsSearchQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCreatorsSearchQuery({
 *   variables: {
 *      search: // value for 'search'
 *   },
 * });
 */
export function useCreatorsSearchQuery(
  baseOptions?: Apollo.QueryHookOptions<
    CreatorsSearchQuery,
    CreatorsSearchQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<CreatorsSearchQuery, CreatorsSearchQueryVariables>(
    CreatorsSearchDocument,
    options
  );
}
export function useCreatorsSearchLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CreatorsSearchQuery,
    CreatorsSearchQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<CreatorsSearchQuery, CreatorsSearchQueryVariables>(
    CreatorsSearchDocument,
    options
  );
}
export type CreatorsSearchQueryHookResult = ReturnType<
  typeof useCreatorsSearchQuery
>;
export type CreatorsSearchLazyQueryHookResult = ReturnType<
  typeof useCreatorsSearchLazyQuery
>;
export type CreatorsSearchQueryResult = Apollo.QueryResult<
  CreatorsSearchQuery,
  CreatorsSearchQueryVariables
>;
