import * as Apollo from "@apollo/client";
import { gql } from "@apollo/client";
import * as Types from "../../../types";

const defaultOptions = {};
export type CreatorsQueryVariables = Types.Exact<{ [key: string]: never }>;

export type CreatorsQuery = {
  __typename?: "Query";
  creators: {
    __typename?: "CreatorConnection";
    nodes?: Types.Maybe<
      Array<
        Types.Maybe<{
          __typename?: "Creator";
          id: string;
          createdAt: any;
          firstName?: Types.Maybe<string>;
          lastName?: Types.Maybe<string>;
          roles: Array<string>;
        }>
      >
    >;
  };
};

export const CreatorsDocument = gql`
  query Creators {
    creators {
      nodes {
        id
        createdAt
        firstName
        lastName
        roles
      }
    }
  }
`;

/**
 * __useCreatorsQuery__
 *
 * To run a query within a React component, call `useCreatorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCreatorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCreatorsQuery({
 *   variables: {
 *   },
 * });
 */
export function useCreatorsQuery(
  baseOptions?: Apollo.QueryHookOptions<CreatorsQuery, CreatorsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<CreatorsQuery, CreatorsQueryVariables>(
    CreatorsDocument,
    options
  );
}
export function useCreatorsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CreatorsQuery,
    CreatorsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<CreatorsQuery, CreatorsQueryVariables>(
    CreatorsDocument,
    options
  );
}
export type CreatorsQueryHookResult = ReturnType<typeof useCreatorsQuery>;
export type CreatorsLazyQueryHookResult = ReturnType<
  typeof useCreatorsLazyQuery
>;
export type CreatorsQueryResult = Apollo.QueryResult<
  CreatorsQuery,
  CreatorsQueryVariables
>;
