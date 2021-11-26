import * as Apollo from "@apollo/client";
import { gql } from "@apollo/client";
import * as Types from "../../../types";

const defaultOptions = {};
export type RankedPublisherListQueryVariables = Types.Exact<{
  limit?: Types.InputMaybe<Types.Scalars["Int"]>;
  field: Types.Scalars["String"];
  direction: Types.SortDirectionEnum;
}>;

export type RankedPublisherListQuery = {
  __typename?: "Query";
  publishers: {
    __typename?: "PublisherConnection";
    nodes?:
      | Array<
          | {
              __typename?: "Publisher";
              id: string;
              name: string;
              seriesCount: number;
            }
          | null
          | undefined
        >
      | null
      | undefined;
  };
};

export const RankedPublisherListDocument = gql`
  query RankedPublisherList(
    $limit: Int
    $field: String!
    $direction: SortDirectionEnum!
  ) {
    publishers(
      limit: $limit
      sortBy: { field: $field, direction: $direction }
    ) {
      nodes {
        id
        name
        seriesCount
      }
    }
  }
`;

/**
 * __useRankedPublisherListQuery__
 *
 * To run a query within a React component, call `useRankedPublisherListQuery` and pass it any options that fit your needs.
 * When your component renders, `useRankedPublisherListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRankedPublisherListQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      field: // value for 'field'
 *      direction: // value for 'direction'
 *   },
 * });
 */
export function useRankedPublisherListQuery(
  baseOptions: Apollo.QueryHookOptions<
    RankedPublisherListQuery,
    RankedPublisherListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    RankedPublisherListQuery,
    RankedPublisherListQueryVariables
  >(RankedPublisherListDocument, options);
}
export function useRankedPublisherListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    RankedPublisherListQuery,
    RankedPublisherListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    RankedPublisherListQuery,
    RankedPublisherListQueryVariables
  >(RankedPublisherListDocument, options);
}
export type RankedPublisherListQueryHookResult = ReturnType<
  typeof useRankedPublisherListQuery
>;
export type RankedPublisherListLazyQueryHookResult = ReturnType<
  typeof useRankedPublisherListLazyQuery
>;
export type RankedPublisherListQueryResult = Apollo.QueryResult<
  RankedPublisherListQuery,
  RankedPublisherListQueryVariables
>;
