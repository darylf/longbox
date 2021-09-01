import * as Apollo from "@apollo/client";
import { gql } from "@apollo/client";
import * as Types from "../../../types";

const defaultOptions = {};
export type CreateCreatorMutationVariables = Types.Exact<{
  firstName: Types.Scalars["String"];
  lastName: Types.Scalars["String"];
}>;

export type CreateCreatorMutation = {
  __typename?: "Mutation";
  createCreator?: Types.Maybe<{
    __typename?: "Creator";
    id: string;
    firstName?: Types.Maybe<string>;
    lastName?: Types.Maybe<string>;
  }>;
};

export const CreateCreatorDocument = gql`
  mutation CreateCreator($firstName: String!, $lastName: String!) {
    createCreator(input: { firstName: $firstName, lastName: $lastName }) {
      id
      firstName
      lastName
    }
  }
`;
export type CreateCreatorMutationFn = Apollo.MutationFunction<
  CreateCreatorMutation,
  CreateCreatorMutationVariables
>;

/**
 * __useCreateCreatorMutation__
 *
 * To run a mutation, you first call `useCreateCreatorMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCreatorMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCreatorMutation, { data, loading, error }] = useCreateCreatorMutation({
 *   variables: {
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *   },
 * });
 */
export function useCreateCreatorMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateCreatorMutation,
    CreateCreatorMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateCreatorMutation,
    CreateCreatorMutationVariables
  >(CreateCreatorDocument, options);
}
export type CreateCreatorMutationHookResult = ReturnType<
  typeof useCreateCreatorMutation
>;
export type CreateCreatorMutationResult =
  Apollo.MutationResult<CreateCreatorMutation>;
export type CreateCreatorMutationOptions = Apollo.BaseMutationOptions<
  CreateCreatorMutation,
  CreateCreatorMutationVariables
>;
