import * as Types from '../../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type RankedSeriesListQueryVariables = Types.Exact<{
  limit?: Types.Maybe<Types.Scalars['Int']>;
  field: Types.Scalars['String'];
  direction: Types.SortDirectionEnum;
}>;


export type RankedSeriesListQuery = { __typename?: 'Query', seriesList: { __typename?: 'SeriesConnection', nodes?: Types.Maybe<Array<Types.Maybe<{ __typename?: 'Series', id: string, name: string, publisherName?: Types.Maybe<string>, bookCount: number }>>> } };


export const RankedSeriesListDocument = gql`
    query RankedSeriesList($limit: Int, $field: String!, $direction: SortDirectionEnum!) {
  seriesList(limit: $limit, sortBy: {field: $field, direction: $direction}) {
    nodes {
      id
      name
      publisherName
      bookCount
    }
  }
}
    `;

/**
 * __useRankedSeriesListQuery__
 *
 * To run a query within a React component, call `useRankedSeriesListQuery` and pass it any options that fit your needs.
 * When your component renders, `useRankedSeriesListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRankedSeriesListQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      field: // value for 'field'
 *      direction: // value for 'direction'
 *   },
 * });
 */
export function useRankedSeriesListQuery(baseOptions: Apollo.QueryHookOptions<RankedSeriesListQuery, RankedSeriesListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RankedSeriesListQuery, RankedSeriesListQueryVariables>(RankedSeriesListDocument, options);
      }
export function useRankedSeriesListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RankedSeriesListQuery, RankedSeriesListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RankedSeriesListQuery, RankedSeriesListQueryVariables>(RankedSeriesListDocument, options);
        }
export type RankedSeriesListQueryHookResult = ReturnType<typeof useRankedSeriesListQuery>;
export type RankedSeriesListLazyQueryHookResult = ReturnType<typeof useRankedSeriesListLazyQuery>;
export type RankedSeriesListQueryResult = Apollo.QueryResult<RankedSeriesListQuery, RankedSeriesListQueryVariables>;