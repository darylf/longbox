import * as Types from '../../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type BooksQueryVariables = Types.Exact<{
  limit?: Types.Maybe<Types.Scalars['Int']>;
}>;


export type BooksQuery = { __typename?: 'Query', books: { __typename?: 'BookConnection', nodes?: Types.Maybe<Array<Types.Maybe<{ __typename?: 'Book', id: string, publisherName?: Types.Maybe<string>, seriesName?: Types.Maybe<string>, issue?: Types.Maybe<string>, format?: Types.Maybe<string>, publicationDate?: Types.Maybe<string>, price?: Types.Maybe<string>, pageCount?: Types.Maybe<string> }>>> } };


export const BooksDocument = gql`
    query Books($limit: Int) {
  books(limit: $limit) {
    nodes {
      id
      publisherName
      seriesName
      issue
      format
      publicationDate
      price
      pageCount
    }
  }
}
    `;

/**
 * __useBooksQuery__
 *
 * To run a query within a React component, call `useBooksQuery` and pass it any options that fit your needs.
 * When your component renders, `useBooksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBooksQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useBooksQuery(baseOptions?: Apollo.QueryHookOptions<BooksQuery, BooksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BooksQuery, BooksQueryVariables>(BooksDocument, options);
      }
export function useBooksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BooksQuery, BooksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BooksQuery, BooksQueryVariables>(BooksDocument, options);
        }
export type BooksQueryHookResult = ReturnType<typeof useBooksQuery>;
export type BooksLazyQueryHookResult = ReturnType<typeof useBooksLazyQuery>;
export type BooksQueryResult = Apollo.QueryResult<BooksQuery, BooksQueryVariables>;