import * as Apollo from "@apollo/client";
import { gql } from "@apollo/client";
import * as Types from "../../../types";

const defaultOptions = {};
export type CreateBookMutationVariables = Types.Exact<{
  ageRating?: Types.Maybe<Types.Scalars["String"]>;
  alternateTitle?: Types.Maybe<Types.Scalars["String"]>;
  format: Types.Scalars["String"];
  issue: Types.Scalars["String"];
  pageCount?: Types.Maybe<Types.Scalars["String"]>;
  price?: Types.Maybe<Types.Scalars["String"]>;
  publicationDate?: Types.Maybe<Types.Scalars["String"]>;
  seriesId: Types.Scalars["ID"];
  summary?: Types.Maybe<Types.Scalars["String"]>;
}>;

export type CreateBookMutation = {
  __typename?: "Mutation";
  createBook?: Types.Maybe<{
    __typename?: "Book";
    id: string;
    displayName: string;
  }>;
};

export const CreateBookDocument = gql`
  mutation CreateBook(
    $ageRating: String
    $alternateTitle: String
    $format: String!
    $issue: String!
    $pageCount: String
    $price: String
    $publicationDate: String
    $seriesId: ID!
    $summary: String
  ) {
    createBook(
      input: {
        ageRating: $ageRating
        alternateTitle: $alternateTitle
        format: $format
        issue: $issue
        pageCount: $pageCount
        price: $price
        publicationDate: $publicationDate
        seriesId: $seriesId
        summary: $summary
      }
    ) {
      id
      displayName
    }
  }
`;
export type CreateBookMutationFn = Apollo.MutationFunction<
  CreateBookMutation,
  CreateBookMutationVariables
>;

/**
 * __useCreateBookMutation__
 *
 * To run a mutation, you first call `useCreateBookMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBookMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBookMutation, { data, loading, error }] = useCreateBookMutation({
 *   variables: {
 *      ageRating: // value for 'ageRating'
 *      alternateTitle: // value for 'alternateTitle'
 *      format: // value for 'format'
 *      issue: // value for 'issue'
 *      pageCount: // value for 'pageCount'
 *      price: // value for 'price'
 *      publicationDate: // value for 'publicationDate'
 *      seriesId: // value for 'seriesId'
 *      summary: // value for 'summary'
 *   },
 * });
 */
export function useCreateBookMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateBookMutation,
    CreateBookMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateBookMutation, CreateBookMutationVariables>(
    CreateBookDocument,
    options
  );
}
export type CreateBookMutationHookResult = ReturnType<
  typeof useCreateBookMutation
>;
export type CreateBookMutationResult =
  Apollo.MutationResult<CreateBookMutation>;
export type CreateBookMutationOptions = Apollo.BaseMutationOptions<
  CreateBookMutation,
  CreateBookMutationVariables
>;
