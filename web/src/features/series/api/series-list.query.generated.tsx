import * as Types from '../../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type SeriesListQueryVariables = Types.Exact<{
  field?: Types.Maybe<Types.Scalars['String']>;
  direction?: Types.Maybe<Types.SortDirectionEnum>;
  limit?: Types.Maybe<Types.Scalars['Int']>;
}>;


export type SeriesListQuery = { __typename?: 'Query', seriesList: { __typename?: 'SeriesConnection', nodes?: Types.Maybe<Array<Types.Maybe<{ __typename?: 'Series', bookCount: number, id: string, name: string, publisherName?: Types.Maybe<string> }>>> } };


export const SeriesListDocument = gql`
    query SeriesList($field: String = "name", $direction: SortDirectionEnum = ASC, $limit: Int) {
  seriesList(sortBy: {field: $field, direction: $direction}, limit: $limit) {
    nodes {
      bookCount
      id
      name
      publisherName
    }
  }
}
    `;

/**
 * __useSeriesListQuery__
 *
 * To run a query within a React component, call `useSeriesListQuery` and pass it any options that fit your needs.
 * When your component renders, `useSeriesListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSeriesListQuery({
 *   variables: {
 *      field: // value for 'field'
 *      direction: // value for 'direction'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useSeriesListQuery(baseOptions?: Apollo.QueryHookOptions<SeriesListQuery, SeriesListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SeriesListQuery, SeriesListQueryVariables>(SeriesListDocument, options);
      }
export function useSeriesListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SeriesListQuery, SeriesListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SeriesListQuery, SeriesListQueryVariables>(SeriesListDocument, options);
        }
export type SeriesListQueryHookResult = ReturnType<typeof useSeriesListQuery>;
export type SeriesListLazyQueryHookResult = ReturnType<typeof useSeriesListLazyQuery>;
export type SeriesListQueryResult = Apollo.QueryResult<SeriesListQuery, SeriesListQueryVariables>;