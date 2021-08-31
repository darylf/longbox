import * as Types from '../../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type BookQueryVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;


export type BookQuery = { __typename?: 'Query', book: { __typename?: 'Book', id: string, ageRating?: Types.Maybe<string>, alternateTitle?: Types.Maybe<string>, createdAt: any, displayName: string, format?: Types.Maybe<string>, issue?: Types.Maybe<string>, pageCount?: Types.Maybe<string>, price?: Types.Maybe<string>, publicationDate?: Types.Maybe<string>, summary?: Types.Maybe<string>, updatedAt: any, createdBy: { __typename?: 'User', id: string, username: string }, credits?: Types.Maybe<Array<{ __typename?: 'Credit', role: string, creator: { __typename?: 'Creator', id: string, firstName?: Types.Maybe<string>, lastName?: Types.Maybe<string> } }>>, publisher?: Types.Maybe<{ __typename?: 'Publisher', id: string, name: string }>, series?: Types.Maybe<{ __typename?: 'Series', id: string, name: string }>, updatedBy: { __typename?: 'User', id: string, username: string } } };


export const BookDocument = gql`
    query Book($id: ID!) {
  book(id: $id) {
    id
    ageRating
    alternateTitle
    createdAt
    createdBy {
      id
      username
    }
    credits {
      creator {
        id
        firstName
        lastName
      }
      role
    }
    displayName
    format
    issue
    pageCount
    price
    publicationDate
    publisher {
      id
      name
    }
    series {
      id
      name
    }
    summary
    updatedAt
    updatedBy {
      id
      username
    }
  }
}
    `;

/**
 * __useBookQuery__
 *
 * To run a query within a React component, call `useBookQuery` and pass it any options that fit your needs.
 * When your component renders, `useBookQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBookQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useBookQuery(baseOptions: Apollo.QueryHookOptions<BookQuery, BookQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BookQuery, BookQueryVariables>(BookDocument, options);
      }
export function useBookLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BookQuery, BookQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BookQuery, BookQueryVariables>(BookDocument, options);
        }
export type BookQueryHookResult = ReturnType<typeof useBookQuery>;
export type BookLazyQueryHookResult = ReturnType<typeof useBookLazyQuery>;
export type BookQueryResult = Apollo.QueryResult<BookQuery, BookQueryVariables>;