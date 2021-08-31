import * as Apollo from "@apollo/client";
import { gql } from "@apollo/client";
import * as Types from "../../../types";

const defaultOptions = {};
export type RegisterMutationVariables = Types.Exact<{
  username: Types.Scalars["String"];
  email: Types.Scalars["String"];
  password: Types.Scalars["String"];
}>;

export type RegisterMutation = {
  __typename?: "Mutation";
  register?: Types.Maybe<{
    __typename?: "AuthenticationResult";
    accessToken: string;
    refreshToken: string;
    me?: Types.Maybe<{
      __typename?: "User";
      id: string;
      avatar: string;
      email: string;
      roles: Array<string>;
      username: string;
    }>;
  }>;
};

export const RegisterDocument = gql`
  mutation Register($username: String!, $email: String!, $password: String!) {
    register(
      input: { username: $username, email: $email, password: $password }
    ) {
      me {
        id
        avatar
        email
        roles
        username
      }
      accessToken
      refreshToken
    }
  }
`;
export type RegisterMutationFn = Apollo.MutationFunction<
  RegisterMutation,
  RegisterMutationVariables
>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      username: // value for 'username'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useRegisterMutation(
  baseOptions?: Apollo.MutationHookOptions<
    RegisterMutation,
    RegisterMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(
    RegisterDocument,
    options
  );
}
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<
  RegisterMutation,
  RegisterMutationVariables
>;
