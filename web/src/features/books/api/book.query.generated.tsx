import * as Apollo from "@apollo/client";
import { gql } from "@apollo/client";
import * as Types from "../../../types";

const defaultOptions = {};
export type BookQueryVariables = Types.Exact<{
  id: Types.Scalars["ID"];
}>;

export type BookQuery = {
  __typename?: "Query";
  book: {
    __typename?: "Book";
    id: string;
    ageRating?: string | null | undefined;
    alternateTitle?: string | null | undefined;
    createdAt: any;
    displayName: string;
    format?: string | null | undefined;
    issue?: string | null | undefined;
    pageCount?: string | null | undefined;
    price?: string | null | undefined;
    publicationDate?: string | null | undefined;
    summary?: string | null | undefined;
    updatedAt: any;
    coverImage?: { __typename?: "Image"; url: string } | null | undefined;
    createdBy: { __typename?: "User"; id: string; username: string };
    credits?:
      | Array<{
          __typename?: "Credit";
          creatorName?: string | null | undefined;
          featured: boolean;
          id: string;
          position?: number | null | undefined;
          role: string;
          creator: {
            __typename?: "Creator";
            id: string;
            firstName?: string | null | undefined;
            lastName?: string | null | undefined;
          };
        }>
      | null
      | undefined;
    featuredCreators: Array<{
      __typename?: "Creator";
      id: string;
      firstName?: string | null | undefined;
      lastName?: string | null | undefined;
    }>;
    publisher?:
      | { __typename?: "Publisher"; id: string; name: string }
      | null
      | undefined;
    series?:
      | { __typename?: "Series"; id: string; name: string }
      | null
      | undefined;
    updatedBy: { __typename?: "User"; id: string; username: string };
  };
};

export const BookDocument = gql`
  query Book($id: ID!) {
    book(id: $id) {
      id
      ageRating
      alternateTitle
      coverImage {
        url
      }
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
        creatorName
        featured
        id
        position
        role
      }
      displayName
      featuredCreators {
        id
        firstName
        lastName
      }
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
export function useBookQuery(
  baseOptions: Apollo.QueryHookOptions<BookQuery, BookQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<BookQuery, BookQueryVariables>(BookDocument, options);
}
export function useBookLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<BookQuery, BookQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<BookQuery, BookQueryVariables>(
    BookDocument,
    options
  );
}
export type BookQueryHookResult = ReturnType<typeof useBookQuery>;
export type BookLazyQueryHookResult = ReturnType<typeof useBookLazyQuery>;
export type BookQueryResult = Apollo.QueryResult<BookQuery, BookQueryVariables>;
