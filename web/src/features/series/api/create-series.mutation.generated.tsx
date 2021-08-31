import * as Types from '../../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type CreateSeriesMutationVariables = Types.Exact<{
  name: Types.Scalars['String'];
  publisherId: Types.Scalars['ID'];
}>;


export type CreateSeriesMutation = { __typename?: 'Mutation', createSeries?: Types.Maybe<{ __typename?: 'Series', id: string, name: string, createdAt: any, updatedAt: any }> };


export const CreateSeriesDocument = gql`
    mutation CreateSeries($name: String!, $publisherId: ID!) {
  createSeries(input: {name: $name, publisherId: $publisherId}) {
    id
    name
    createdAt
    updatedAt
  }
}
    `;
export type CreateSeriesMutationFn = Apollo.MutationFunction<CreateSeriesMutation, CreateSeriesMutationVariables>;

/**
 * __useCreateSeriesMutation__
 *
 * To run a mutation, you first call `useCreateSeriesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSeriesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSeriesMutation, { data, loading, error }] = useCreateSeriesMutation({
 *   variables: {
 *      name: // value for 'name'
 *      publisherId: // value for 'publisherId'
 *   },
 * });
 */
export function useCreateSeriesMutation(baseOptions?: Apollo.MutationHookOptions<CreateSeriesMutation, CreateSeriesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSeriesMutation, CreateSeriesMutationVariables>(CreateSeriesDocument, options);
      }
export type CreateSeriesMutationHookResult = ReturnType<typeof useCreateSeriesMutation>;
export type CreateSeriesMutationResult = Apollo.MutationResult<CreateSeriesMutation>;
export type CreateSeriesMutationOptions = Apollo.BaseMutationOptions<CreateSeriesMutation, CreateSeriesMutationVariables>;