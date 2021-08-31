import * as Apollo from "@apollo/client";
import { gql } from "@apollo/client";
import * as Types from "../../../types";

const defaultOptions = {};
export type SeriesQueryVariables = Types.Exact<{
  id: Types.Scalars["ID"];
}>;

export type SeriesQuery = {
  __typename?: "Query";
  series: {
    __typename?: "Series";
    name: string;
    createdAt: any;
    updatedAt: any;
    books?: Types.Maybe<
      Array<{ __typename?: "Book"; id: string; displayName: string }>
    >;
  };
};

export const SeriesDocument = gql`
  query Series($id: ID!) {
    series(id: $id) {
      name
      createdAt
      updatedAt
      books {
        id
        displayName
      }
    }
  }
`;

/**
 * __useSeriesQuery__
 *
 * To run a query within a React component, call `useSeriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useSeriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSeriesQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSeriesQuery(
  baseOptions: Apollo.QueryHookOptions<SeriesQuery, SeriesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<SeriesQuery, SeriesQueryVariables>(
    SeriesDocument,
    options
  );
}
export function useSeriesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<SeriesQuery, SeriesQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<SeriesQuery, SeriesQueryVariables>(
    SeriesDocument,
    options
  );
}
export type SeriesQueryHookResult = ReturnType<typeof useSeriesQuery>;
export type SeriesLazyQueryHookResult = ReturnType<typeof useSeriesLazyQuery>;
export type SeriesQueryResult = Apollo.QueryResult<
  SeriesQuery,
  SeriesQueryVariables
>;
