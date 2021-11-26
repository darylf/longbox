import * as Apollo from "@apollo/client";
import { gql } from "@apollo/client";
import * as Types from "../../../types";

const defaultOptions = {};
export type BooksQueryVariables = Types.Exact<{
  limit?: Types.InputMaybe<Types.Scalars["Int"]>;
}>;

export type BooksQuery = {
  __typename?: "Query";
  books: {
    __typename?: "BookConnection";
    nodes?:
      | Array<
          | {
              __typename?: "Book";
              id: string;
              displayName: string;
              format?: string | null | undefined;
              issue?: string | null | undefined;
              pageCount?: string | null | undefined;
              publicationDate?: string | null | undefined;
              price?: string | null | undefined;
              seriesName?: string | null | undefined;
              coverImage?:
                | { __typename?: "Image"; url: string }
                | null
                | undefined;
              credits?:
                | Array<{
                    __typename?: "Credit";
                    id: string;
                    featured: boolean;
                    position?: number | null | undefined;
                    creator: {
                      __typename?: "Creator";
                      id: string;
                      displayName?: string | null | undefined;
                    };
                  }>
                | null
                | undefined;
              publisher?:
                | { __typename?: "Publisher"; id: string; name: string }
                | null
                | undefined;
            }
          | null
          | undefined
        >
      | null
      | undefined;
  };
};

export const BooksDocument = gql`
  query Books($limit: Int) {
    books(limit: $limit) {
      nodes {
        id
        coverImage {
          url
        }
        credits {
          id
          creator {
            id
            displayName
          }
          featured
          position
        }
        displayName
        format
        issue
        pageCount
        publisher {
          id
          name
        }
        publicationDate
        price
        seriesName
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
export function useBooksQuery(
  baseOptions?: Apollo.QueryHookOptions<BooksQuery, BooksQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<BooksQuery, BooksQueryVariables>(
    BooksDocument,
    options
  );
}
export function useBooksLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<BooksQuery, BooksQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<BooksQuery, BooksQueryVariables>(
    BooksDocument,
    options
  );
}
export type BooksQueryHookResult = ReturnType<typeof useBooksQuery>;
export type BooksLazyQueryHookResult = ReturnType<typeof useBooksLazyQuery>;
export type BooksQueryResult = Apollo.QueryResult<
  BooksQuery,
  BooksQueryVariables
>;
