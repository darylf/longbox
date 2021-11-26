import * as Apollo from "@apollo/client";
import { gql } from "@apollo/client";
import * as Types from "../../../types";

const defaultOptions = {};
export type RankedBookListQueryVariables = Types.Exact<{
  limit?: Types.InputMaybe<Types.Scalars["Int"]>;
  field: Types.Scalars["String"];
  direction: Types.SortDirectionEnum;
}>;

export type RankedBookListQuery = {
  __typename?: "Query";
  books: {
    __typename?: "BookConnection";
    nodes?:
      | Array<
          | {
              __typename?: "Book";
              id: string;
              displayName: string;
              publicationDate?: string | null | undefined;
              publisherName?: string | null | undefined;
            }
          | null
          | undefined
        >
      | null
      | undefined;
  };
};

export const RankedBookListDocument = gql`
  query RankedBookList(
    $limit: Int
    $field: String!
    $direction: SortDirectionEnum!
  ) {
    books(limit: $limit, sortBy: { field: $field, direction: $direction }) {
      nodes {
        id
        displayName
        publicationDate
        publisherName
      }
    }
  }
`;

/**
 * __useRankedBookListQuery__
 *
 * To run a query within a React component, call `useRankedBookListQuery` and pass it any options that fit your needs.
 * When your component renders, `useRankedBookListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRankedBookListQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      field: // value for 'field'
 *      direction: // value for 'direction'
 *   },
 * });
 */
export function useRankedBookListQuery(
  baseOptions: Apollo.QueryHookOptions<
    RankedBookListQuery,
    RankedBookListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<RankedBookListQuery, RankedBookListQueryVariables>(
    RankedBookListDocument,
    options
  );
}
export function useRankedBookListLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    RankedBookListQuery,
    RankedBookListQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<RankedBookListQuery, RankedBookListQueryVariables>(
    RankedBookListDocument,
    options
  );
}
export type RankedBookListQueryHookResult = ReturnType<
  typeof useRankedBookListQuery
>;
export type RankedBookListLazyQueryHookResult = ReturnType<
  typeof useRankedBookListLazyQuery
>;
export type RankedBookListQueryResult = Apollo.QueryResult<
  RankedBookListQuery,
  RankedBookListQueryVariables
>;
