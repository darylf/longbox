import * as Apollo from "@apollo/client";
import { gql } from "@apollo/client";
import * as Types from "../../../types";

const defaultOptions = {};
export type CreditRolesQueryVariables = Types.Exact<{ [key: string]: never }>;

export type CreditRolesQuery = {
  __typename?: "Query";
  creditRoles: Array<{
    __typename?: "CreditRole";
    id: string;
    name?: Types.Maybe<string>;
    createdAt: any;
    updatedAt: any;
  }>;
};

export const CreditRolesDocument = gql`
  query CreditRoles {
    creditRoles {
      id
      name
      createdAt
      updatedAt
    }
  }
`;

/**
 * __useCreditRolesQuery__
 *
 * To run a query within a React component, call `useCreditRolesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCreditRolesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCreditRolesQuery({
 *   variables: {
 *   },
 * });
 */
export function useCreditRolesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    CreditRolesQuery,
    CreditRolesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<CreditRolesQuery, CreditRolesQueryVariables>(
    CreditRolesDocument,
    options
  );
}
export function useCreditRolesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CreditRolesQuery,
    CreditRolesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<CreditRolesQuery, CreditRolesQueryVariables>(
    CreditRolesDocument,
    options
  );
}
export type CreditRolesQueryHookResult = ReturnType<typeof useCreditRolesQuery>;
export type CreditRolesLazyQueryHookResult = ReturnType<
  typeof useCreditRolesLazyQuery
>;
export type CreditRolesQueryResult = Apollo.QueryResult<
  CreditRolesQuery,
  CreditRolesQueryVariables
>;
