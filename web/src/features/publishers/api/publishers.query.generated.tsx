import * as Apollo from "@apollo/client";
import { gql } from "@apollo/client";
import * as Types from "../../../types";

const defaultOptions = {};
export type PublishersQueryVariables = Types.Exact<{
  field?: Types.Maybe<Types.Scalars["String"]>;
  direction?: Types.Maybe<Types.SortDirectionEnum>;
  limit?: Types.Maybe<Types.Scalars["Int"]>;
}>;

export type PublishersQuery = {
  __typename?: "Query";
  publishers: {
    __typename?: "PublisherConnection";
    nodes?: Types.Maybe<
      Array<
        Types.Maybe<{
          __typename?: "Publisher";
          id: string;
          name: string;
          seriesCount: number;
          logo?: Types.Maybe<{ __typename?: "Image"; url: string }>;
          series: Array<{ __typename?: "Series"; name: string }>;
        }>
      >
    >;
  };
};

export const PublishersDocument = gql`
  query Publishers(
    $field: String = "name"
    $direction: SortDirectionEnum = ASC
    $limit: Int
  ) {
    publishers(
      sortBy: { field: $field, direction: $direction }
      limit: $limit
    ) {
      nodes {
        id
        logo {
          url
        }
        name
        series {
          name
        }
        seriesCount
      }
    }
  }
`;

/**
 * __usePublishersQuery__
 *
 * To run a query within a React component, call `usePublishersQuery` and pass it any options that fit your needs.
 * When your component renders, `usePublishersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePublishersQuery({
 *   variables: {
 *      field: // value for 'field'
 *      direction: // value for 'direction'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function usePublishersQuery(
  baseOptions?: Apollo.QueryHookOptions<
    PublishersQuery,
    PublishersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<PublishersQuery, PublishersQueryVariables>(
    PublishersDocument,
    options
  );
}
export function usePublishersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    PublishersQuery,
    PublishersQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<PublishersQuery, PublishersQueryVariables>(
    PublishersDocument,
    options
  );
}
export type PublishersQueryHookResult = ReturnType<typeof usePublishersQuery>;
export type PublishersLazyQueryHookResult = ReturnType<
  typeof usePublishersLazyQuery
>;
export type PublishersQueryResult = Apollo.QueryResult<
  PublishersQuery,
  PublishersQueryVariables
>;
