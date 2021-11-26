import * as Apollo from "@apollo/client";
import { gql } from "@apollo/client";
import * as Types from "../../../types";

const defaultOptions = {};
export type UpdatePublisherMutationVariables = Types.Exact<{
  id: Types.Scalars["ID"];
  name: Types.Scalars["String"];
}>;

export type UpdatePublisherMutation = {
  __typename?: "Mutation";
  updatePublisher?:
    | {
        __typename?: "UpdatePublisherPayload";
        publisher?:
          | {
              __typename?: "Publisher";
              id: string;
              name: string;
              updatedAt: any;
            }
          | null
          | undefined;
        errors: Array<{
          __typename?: "UserError";
          path?: Array<string> | null | undefined;
          message: string;
        }>;
      }
    | null
    | undefined;
};

export const UpdatePublisherDocument = gql`
  mutation UpdatePublisher($id: ID!, $name: String!) {
    updatePublisher(id: $id, attributes: { name: $name }) {
      publisher {
        id
        name
        updatedAt
      }
      errors {
        path
        message
      }
    }
  }
`;
export type UpdatePublisherMutationFn = Apollo.MutationFunction<
  UpdatePublisherMutation,
  UpdatePublisherMutationVariables
>;

/**
 * __useUpdatePublisherMutation__
 *
 * To run a mutation, you first call `useUpdatePublisherMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePublisherMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePublisherMutation, { data, loading, error }] = useUpdatePublisherMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useUpdatePublisherMutation(
  baseOptions?: Apollo.MutationHookOptions<
    UpdatePublisherMutation,
    UpdatePublisherMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    UpdatePublisherMutation,
    UpdatePublisherMutationVariables
  >(UpdatePublisherDocument, options);
}
export type UpdatePublisherMutationHookResult = ReturnType<
  typeof useUpdatePublisherMutation
>;
export type UpdatePublisherMutationResult =
  Apollo.MutationResult<UpdatePublisherMutation>;
export type UpdatePublisherMutationOptions = Apollo.BaseMutationOptions<
  UpdatePublisherMutation,
  UpdatePublisherMutationVariables
>;
