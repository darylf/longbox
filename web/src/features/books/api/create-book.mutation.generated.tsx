import * as Apollo from "@apollo/client";
import { gql } from "@apollo/client";
import * as Types from "../../../types";

const defaultOptions = {};
export type CreateBookMutationVariables = Types.Exact<{
  ageRating?: Types.InputMaybe<Types.Scalars["String"]>;
  alternateTitle?: Types.InputMaybe<Types.Scalars["String"]>;
  credits: Array<Types.CreditInput> | Types.CreditInput;
  format: Types.Scalars["String"];
  issue: Types.Scalars["String"];
  pageCount?: Types.InputMaybe<Types.Scalars["String"]>;
  price?: Types.InputMaybe<Types.Scalars["String"]>;
  publicationDate?: Types.InputMaybe<Types.Scalars["String"]>;
  seriesId: Types.Scalars["ID"];
  summary?: Types.InputMaybe<Types.Scalars["String"]>;
}>;

export type CreateBookMutation = {
  __typename?: "Mutation";
  createBook?:
    | {
        __typename?: "Book";
        id: string;
        ageRating?: string | null | undefined;
        alternateTitle?: string | null | undefined;
        displayName: string;
        format?: string | null | undefined;
        issue?: string | null | undefined;
        pageCount?: string | null | undefined;
        price?: string | null | undefined;
        publicationDate?: string | null | undefined;
        summary?: string | null | undefined;
        series?: { __typename?: "Series"; id: string } | null | undefined;
      }
    | null
    | undefined;
};

export const CreateBookDocument = gql`
  mutation CreateBook(
    $ageRating: String
    $alternateTitle: String
    $credits: [CreditInput!]!
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
        credits: $credits
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
      ageRating
      alternateTitle
      displayName
      format
      issue
      pageCount
      price
      publicationDate
      series {
        id
      }
      summary
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
 *      credits: // value for 'credits'
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
