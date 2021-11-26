import * as Apollo from "@apollo/client";
import { gql } from "@apollo/client";
import * as Types from "../../../types";

const defaultOptions = {};
export type CreatePublisherMutationVariables = Types.Exact<{
  name: Types.Scalars["String"];
}>;

export type CreatePublisherMutation = {
  __typename?: "Mutation";
  createPublisher?:
    | {
        __typename?: "Publisher";
        id: string;
        name: string;
        createdAt: any;
        updatedAt: any;
      }
    | null
    | undefined;
};

export const CreatePublisherDocument = gql`
  mutation CreatePublisher($name: String!) {
    createPublisher(input: { name: $name }) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export type CreatePublisherMutationFn = Apollo.MutationFunction<
  CreatePublisherMutation,
  CreatePublisherMutationVariables
>;

/**
 * __useCreatePublisherMutation__
 *
 * To run a mutation, you first call `useCreatePublisherMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePublisherMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPublisherMutation, { data, loading, error }] = useCreatePublisherMutation({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useCreatePublisherMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreatePublisherMutation,
    CreatePublisherMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreatePublisherMutation,
    CreatePublisherMutationVariables
  >(CreatePublisherDocument, options);
}
export type CreatePublisherMutationHookResult = ReturnType<
  typeof useCreatePublisherMutation
>;
export type CreatePublisherMutationResult =
  Apollo.MutationResult<CreatePublisherMutation>;
export type CreatePublisherMutationOptions = Apollo.BaseMutationOptions<
  CreatePublisherMutation,
  CreatePublisherMutationVariables
>;
