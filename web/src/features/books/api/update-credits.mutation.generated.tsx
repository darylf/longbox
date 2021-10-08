import * as Apollo from "@apollo/client";
import { gql } from "@apollo/client";
import * as Types from "../../../types";

const defaultOptions = {};
export type UpdateCreditsMutationVariables = Types.Exact<{
  bookId: Types.Scalars["ID"];
  input: Array<Types.CreditInput> | Types.CreditInput;
}>;

export type UpdateCreditsMutation = {
  __typename?: "Mutation";
  updateCredits?: Types.Maybe<
    Array<{
      __typename?: "Credit";
      id: string;
      createdAt: any;
      featured: boolean;
      position?: Types.Maybe<number>;
      role: string;
      updatedAt: any;
      creator: {
        __typename?: "Creator";
        id: string;
        displayName?: Types.Maybe<string>;
      };
    }>
  >;
};

export const UpdateCreditsDocument = gql`
  mutation UpdateCredits($bookId: ID!, $input: [CreditInput!]!) {
    updateCredits(bookId: $bookId, input: $input) {
      id
      createdAt
      creator {
        id
        displayName
      }
      featured
      position
      role
      updatedAt
    }
  }
`;
export type UpdateCreditsMutationFn = Apollo.MutationFunction<
  UpdateCreditsMutation,
  UpdateCreditsMutationVariables
>;

/**
 * __useUpdateCreditsMutation__
 *
 * To run a mutation, you first call `useUpdateCreditsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCreditsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCreditsMutation, { data, loading, error }] = useUpdateCreditsMutation({
 *   variables: {
 *      bookId: // value for 'bookId'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateCreditsMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdateCreditsMutation,
    UpdateCreditsMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdateCreditsMutation,
    UpdateCreditsMutationVariables
  >(UpdateCreditsDocument, options);
}
export type UpdateCreditsMutationHookResult = ReturnType<
  typeof useUpdateCreditsMutation
>;
export type UpdateCreditsMutationResult =
  Apollo.MutationResult<UpdateCreditsMutation>;
export type UpdateCreditsMutationOptions = Apollo.BaseMutationOptions<
  UpdateCreditsMutation,
  UpdateCreditsMutationVariables
>;
