import * as Apollo from "@apollo/client";
import { gql } from "@apollo/client";
import * as Types from "../../../types";

const defaultOptions = {};
export type PublisherQueryVariables = Types.Exact<{
  id: Types.Scalars["ID"];
}>;

export type PublisherQuery = {
  __typename?: "Query";
  publisher: {
    __typename?: "Publisher";
    id: string;
    createdAt: any;
    name: string;
    updatedAt: any;
    logo?: Types.Maybe<{ __typename?: "Image"; url: string }>;
    series: Array<{ __typename?: "Series"; id: string; name: string }>;
  };
};

export const PublisherDocument = gql`
  query Publisher($id: ID!) {
    publisher(id: $id) {
      id
      createdAt
      logo {
        url
      }
      name
      series(sortBy: { field: "name", direction: ASC }) {
        id
        name
      }
      updatedAt
    }
  }
`;

/**
 * __usePublisherQuery__
 *
 * To run a query within a React component, call `usePublisherQuery` and pass it any options that fit your needs.
 * When your component renders, `usePublisherQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePublisherQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePublisherQuery(
  baseOptions: Apollo.QueryHookOptions<PublisherQuery, PublisherQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<PublisherQuery, PublisherQueryVariables>(
    PublisherDocument,
    options
  );
}
export function usePublisherLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    PublisherQuery,
    PublisherQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<PublisherQuery, PublisherQueryVariables>(
    PublisherDocument,
    options
  );
}
export type PublisherQueryHookResult = ReturnType<typeof usePublisherQuery>;
export type PublisherLazyQueryHookResult = ReturnType<
  typeof usePublisherLazyQuery
>;
export type PublisherQueryResult = Apollo.QueryResult<
  PublisherQuery,
  PublisherQueryVariables
>;
