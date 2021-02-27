import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

/** A comic book or trade paperback */
export type Book = {
  __typename?: 'Book';
  ageRating?: Maybe<Scalars['String']>;
  alternateTitle?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  credits?: Maybe<Array<Credit>>;
  displayName: Scalars['String'];
  format?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  issue?: Maybe<Scalars['String']>;
  pageCount?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['String']>;
  publicationDate?: Maybe<Scalars['String']>;
  publisher?: Maybe<Publisher>;
  publisherName?: Maybe<Scalars['String']>;
  series?: Maybe<Series>;
  seriesName?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type BookAttributes = {
  ageRating?: Maybe<Scalars['String']>;
  alternateTitle?: Maybe<Scalars['String']>;
  creditIds?: Maybe<Array<Scalars['ID']>>;
  format?: Maybe<Scalars['String']>;
  issue?: Maybe<Scalars['String']>;
  pageCount?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['String']>;
  publicationDate?: Maybe<Scalars['String']>;
  seriesId?: Maybe<Scalars['ID']>;
  summary?: Maybe<Scalars['String']>;
};

/** The connection type for Book. */
export type BookConnection = {
  __typename?: 'BookConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<BookEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Book>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type BookEdge = {
  __typename?: 'BookEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Book>;
};

/** Autogenerated return type of CreateBook */
export type CreateBookPayload = {
  __typename?: 'CreateBookPayload';
  book?: Maybe<Book>;
  errors: Array<UserError>;
};

/** Autogenerated return type of CreatePublisher */
export type CreatePublisherPayload = {
  __typename?: 'CreatePublisherPayload';
  errors: Array<UserError>;
  publisher?: Maybe<Publisher>;
};

/** Autogenerated return type of CreateSeries */
export type CreateSeriesPayload = {
  __typename?: 'CreateSeriesPayload';
  errors: Array<UserError>;
  series?: Maybe<Series>;
};

/** A person representing someone involved in the creation process of a book */
export type Creator = {
  __typename?: 'Creator';
  createdAt: Scalars['DateTime'];
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastName?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

/** An association of book and creator */
export type Credit = {
  __typename?: 'Credit';
  book: Book;
  createdAt: Scalars['DateTime'];
  creator: Creator;
  id: Scalars['ID'];
  role: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};


/** Autogenerated return type of EditBook */
export type EditBookPayload = {
  __typename?: 'EditBookPayload';
  book?: Maybe<Book>;
  errors: Array<UserError>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createBook?: Maybe<CreateBookPayload>;
  createPublisher?: Maybe<CreatePublisherPayload>;
  createSeries?: Maybe<CreateSeriesPayload>;
  editBook?: Maybe<EditBookPayload>;
};


export type MutationCreateBookArgs = {
  attributes: BookAttributes;
};


export type MutationCreatePublisherArgs = {
  name: Scalars['String'];
};


export type MutationCreateSeriesArgs = {
  name: Scalars['String'];
  publisherId: Scalars['ID'];
};


export type MutationEditBookArgs = {
  id: Scalars['ID'];
  attributes: BookAttributes;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

/** A book publishing company */
export type Publisher = {
  __typename?: 'Publisher';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  series: Array<Series>;
  updatedAt: Scalars['DateTime'];
};

/** The connection type for Publisher. */
export type PublisherConnection = {
  __typename?: 'PublisherConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PublisherEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Publisher>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type PublisherEdge = {
  __typename?: 'PublisherEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Publisher>;
};

export type Query = {
  __typename?: 'Query';
  book: Book;
  books: BookConnection;
  publisher: Publisher;
  publishers: PublisherConnection;
  series: Series;
  seriesList: SeriesConnection;
};


export type QueryBookArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryBooksArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QueryPublisherArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryPublishersArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};


export type QuerySeriesArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QuerySeriesListArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** A collection of related books */
export type Series = {
  __typename?: 'Series';
  /** A list of books released in this series */
  books?: Maybe<Array<Book>>;
  id: Scalars['ID'];
  name: Scalars['String'];
  publisher?: Maybe<Publisher>;
};

/** The connection type for Series. */
export type SeriesConnection = {
  __typename?: 'SeriesConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<SeriesEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Series>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type SeriesEdge = {
  __typename?: 'SeriesEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<Series>;
};

/** A user-readable error */
export type UserError = {
  __typename?: 'UserError';
  /** A description of the error */
  message: Scalars['String'];
  /** Which input value this error came from */
  path?: Maybe<Array<Scalars['String']>>;
};

export type CreateBookMutationVariables = Exact<{
  attributes: BookAttributes;
}>;


export type CreateBookMutation = (
  { __typename?: 'Mutation' }
  & { createBook?: Maybe<(
    { __typename?: 'CreateBookPayload' }
    & { book?: Maybe<(
      { __typename?: 'Book' }
      & BookDetailsFragment
    )>, errors: Array<(
      { __typename?: 'UserError' }
      & Pick<UserError, 'message'>
    )> }
  )> }
);

export type EditBookMutationVariables = Exact<{
  id: Scalars['ID'];
  attributes: BookAttributes;
}>;


export type EditBookMutation = (
  { __typename?: 'Mutation' }
  & { editBook?: Maybe<(
    { __typename?: 'EditBookPayload' }
    & { book?: Maybe<(
      { __typename?: 'Book' }
      & BookDetailsFragment
    )>, errors: Array<(
      { __typename?: 'UserError' }
      & Pick<UserError, 'message'>
    )> }
  )> }
);

export type BookQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type BookQuery = (
  { __typename?: 'Query' }
  & { book: (
    { __typename?: 'Book' }
    & BookDetailsFragment
  ) }
);

export type BooksQueryVariables = Exact<{ [key: string]: never; }>;


export type BooksQuery = (
  { __typename?: 'Query' }
  & { books: (
    { __typename?: 'BookConnection' }
    & { nodes?: Maybe<Array<Maybe<(
      { __typename?: 'Book' }
      & BookDetailsFragment
    )>>> }
  ) }
);

export type BookDetailsFragment = (
  { __typename?: 'Book' }
  & Pick<Book, 'id' | 'alternateTitle' | 'displayName' | 'format' | 'issue' | 'pageCount' | 'price' | 'publicationDate' | 'publisherName' | 'seriesName' | 'summary' | 'createdAt' | 'updatedAt'>
  & { credits?: Maybe<Array<(
    { __typename?: 'Credit' }
    & Pick<Credit, 'id' | 'role'>
    & { creator: (
      { __typename?: 'Creator' }
      & Pick<Creator, 'id' | 'firstName' | 'lastName'>
    ) }
  )>>, publisher?: Maybe<(
    { __typename?: 'Publisher' }
    & Pick<Publisher, 'id'>
  )>, series?: Maybe<(
    { __typename?: 'Series' }
    & Pick<Series, 'id'>
  )> }
);

export type CreatePublisherMutationVariables = Exact<{
  name: Scalars['String'];
}>;


export type CreatePublisherMutation = (
  { __typename?: 'Mutation' }
  & { createPublisher?: Maybe<(
    { __typename?: 'CreatePublisherPayload' }
    & { publisher?: Maybe<(
      { __typename?: 'Publisher' }
      & Pick<Publisher, 'id' | 'name'>
    )>, errors: Array<(
      { __typename?: 'UserError' }
      & Pick<UserError, 'message'>
    )> }
  )> }
);

export type PublisherQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type PublisherQuery = (
  { __typename?: 'Query' }
  & { publisher: (
    { __typename?: 'Publisher' }
    & Pick<Publisher, 'id' | 'name'>
    & { series: Array<(
      { __typename?: 'Series' }
      & Pick<Series, 'id' | 'name'>
    )> }
  ) }
);

export type PublisherListQueryVariables = Exact<{ [key: string]: never; }>;


export type PublisherListQuery = (
  { __typename?: 'Query' }
  & { publishers: (
    { __typename?: 'PublisherConnection' }
    & { nodes?: Maybe<Array<Maybe<(
      { __typename?: 'Publisher' }
      & Pick<Publisher, 'id' | 'name'>
    )>>> }
  ) }
);

export type CreateSeriesMutationVariables = Exact<{
  name: Scalars['String'];
  publisherId: Scalars['ID'];
}>;


export type CreateSeriesMutation = (
  { __typename?: 'Mutation' }
  & { createSeries?: Maybe<(
    { __typename?: 'CreateSeriesPayload' }
    & { series?: Maybe<(
      { __typename?: 'Series' }
      & Pick<Series, 'id' | 'name'>
    )>, errors: Array<(
      { __typename?: 'UserError' }
      & Pick<UserError, 'message'>
    )> }
  )> }
);

export type SeriesQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type SeriesQuery = (
  { __typename?: 'Query' }
  & { series: (
    { __typename?: 'Series' }
    & Pick<Series, 'id' | 'name'>
    & { books?: Maybe<Array<(
      { __typename?: 'Book' }
      & BookDetailsFragment
    )>> }
  ) }
);

export type SeriesListQueryVariables = Exact<{ [key: string]: never; }>;


export type SeriesListQuery = (
  { __typename?: 'Query' }
  & { seriesList: (
    { __typename?: 'SeriesConnection' }
    & { nodes?: Maybe<Array<Maybe<(
      { __typename?: 'Series' }
      & Pick<Series, 'id' | 'name'>
      & { books?: Maybe<Array<(
        { __typename?: 'Book' }
        & BookDetailsFragment
      )>> }
    )>>> }
  ) }
);

export const BookDetailsFragmentDoc = gql`
    fragment BookDetails on Book {
  id
  alternateTitle
  displayName
  format
  issue
  pageCount
  price
  publicationDate
  publisherName
  seriesName
  summary
  credits {
    id
    role
    creator {
      id
      firstName
      lastName
    }
  }
  publisher {
    id
  }
  series {
    id
  }
  createdAt
  updatedAt
}
    `;
export const CreateBookDocument = gql`
    mutation CreateBook($attributes: BookAttributes!) {
  createBook(attributes: $attributes) {
    book {
      ...BookDetails
    }
    errors {
      message
    }
  }
}
    ${BookDetailsFragmentDoc}`;
export type CreateBookMutationFn = Apollo.MutationFunction<CreateBookMutation, CreateBookMutationVariables>;

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
 *      attributes: // value for 'attributes'
 *   },
 * });
 */
export function useCreateBookMutation(baseOptions?: Apollo.MutationHookOptions<CreateBookMutation, CreateBookMutationVariables>) {
        return Apollo.useMutation<CreateBookMutation, CreateBookMutationVariables>(CreateBookDocument, baseOptions);
      }
export type CreateBookMutationHookResult = ReturnType<typeof useCreateBookMutation>;
export type CreateBookMutationResult = Apollo.MutationResult<CreateBookMutation>;
export type CreateBookMutationOptions = Apollo.BaseMutationOptions<CreateBookMutation, CreateBookMutationVariables>;
export const EditBookDocument = gql`
    mutation EditBook($id: ID!, $attributes: BookAttributes!) {
  editBook(id: $id, attributes: $attributes) {
    book {
      ...BookDetails
    }
    errors {
      message
    }
  }
}
    ${BookDetailsFragmentDoc}`;
export type EditBookMutationFn = Apollo.MutationFunction<EditBookMutation, EditBookMutationVariables>;

/**
 * __useEditBookMutation__
 *
 * To run a mutation, you first call `useEditBookMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditBookMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editBookMutation, { data, loading, error }] = useEditBookMutation({
 *   variables: {
 *      id: // value for 'id'
 *      attributes: // value for 'attributes'
 *   },
 * });
 */
export function useEditBookMutation(baseOptions?: Apollo.MutationHookOptions<EditBookMutation, EditBookMutationVariables>) {
        return Apollo.useMutation<EditBookMutation, EditBookMutationVariables>(EditBookDocument, baseOptions);
      }
export type EditBookMutationHookResult = ReturnType<typeof useEditBookMutation>;
export type EditBookMutationResult = Apollo.MutationResult<EditBookMutation>;
export type EditBookMutationOptions = Apollo.BaseMutationOptions<EditBookMutation, EditBookMutationVariables>;
export const BookDocument = gql`
    query Book($id: ID!) {
  book(id: $id) {
    ...BookDetails
  }
}
    ${BookDetailsFragmentDoc}`;

/**
 * __useBookQuery__
 *
 * To run a query within a React component, call `useBookQuery` and pass it any options that fit your needs.
 * When your component renders, `useBookQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBookQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useBookQuery(baseOptions: Apollo.QueryHookOptions<BookQuery, BookQueryVariables>) {
        return Apollo.useQuery<BookQuery, BookQueryVariables>(BookDocument, baseOptions);
      }
export function useBookLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BookQuery, BookQueryVariables>) {
          return Apollo.useLazyQuery<BookQuery, BookQueryVariables>(BookDocument, baseOptions);
        }
export type BookQueryHookResult = ReturnType<typeof useBookQuery>;
export type BookLazyQueryHookResult = ReturnType<typeof useBookLazyQuery>;
export type BookQueryResult = Apollo.QueryResult<BookQuery, BookQueryVariables>;
export const BooksDocument = gql`
    query Books {
  books {
    nodes {
      ...BookDetails
    }
  }
}
    ${BookDetailsFragmentDoc}`;

/**
 * __useBooksQuery__
 *
 * To run a query within a React component, call `useBooksQuery` and pass it any options that fit your needs.
 * When your component renders, `useBooksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBooksQuery({
 *   variables: {
 *   },
 * });
 */
export function useBooksQuery(baseOptions?: Apollo.QueryHookOptions<BooksQuery, BooksQueryVariables>) {
        return Apollo.useQuery<BooksQuery, BooksQueryVariables>(BooksDocument, baseOptions);
      }
export function useBooksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BooksQuery, BooksQueryVariables>) {
          return Apollo.useLazyQuery<BooksQuery, BooksQueryVariables>(BooksDocument, baseOptions);
        }
export type BooksQueryHookResult = ReturnType<typeof useBooksQuery>;
export type BooksLazyQueryHookResult = ReturnType<typeof useBooksLazyQuery>;
export type BooksQueryResult = Apollo.QueryResult<BooksQuery, BooksQueryVariables>;
export const CreatePublisherDocument = gql`
    mutation CreatePublisher($name: String!) {
  createPublisher(name: $name) {
    publisher {
      id
      name
    }
    errors {
      message
    }
  }
}
    `;
export type CreatePublisherMutationFn = Apollo.MutationFunction<CreatePublisherMutation, CreatePublisherMutationVariables>;

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
export function useCreatePublisherMutation(baseOptions?: Apollo.MutationHookOptions<CreatePublisherMutation, CreatePublisherMutationVariables>) {
        return Apollo.useMutation<CreatePublisherMutation, CreatePublisherMutationVariables>(CreatePublisherDocument, baseOptions);
      }
export type CreatePublisherMutationHookResult = ReturnType<typeof useCreatePublisherMutation>;
export type CreatePublisherMutationResult = Apollo.MutationResult<CreatePublisherMutation>;
export type CreatePublisherMutationOptions = Apollo.BaseMutationOptions<CreatePublisherMutation, CreatePublisherMutationVariables>;
export const PublisherDocument = gql`
    query Publisher($id: ID!) {
  publisher(id: $id) {
    id
    name
    series {
      id
      name
    }
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
export function usePublisherQuery(baseOptions: Apollo.QueryHookOptions<PublisherQuery, PublisherQueryVariables>) {
        return Apollo.useQuery<PublisherQuery, PublisherQueryVariables>(PublisherDocument, baseOptions);
      }
export function usePublisherLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PublisherQuery, PublisherQueryVariables>) {
          return Apollo.useLazyQuery<PublisherQuery, PublisherQueryVariables>(PublisherDocument, baseOptions);
        }
export type PublisherQueryHookResult = ReturnType<typeof usePublisherQuery>;
export type PublisherLazyQueryHookResult = ReturnType<typeof usePublisherLazyQuery>;
export type PublisherQueryResult = Apollo.QueryResult<PublisherQuery, PublisherQueryVariables>;
export const PublisherListDocument = gql`
    query PublisherList {
  publishers {
    nodes {
      id
      name
    }
  }
}
    `;

/**
 * __usePublisherListQuery__
 *
 * To run a query within a React component, call `usePublisherListQuery` and pass it any options that fit your needs.
 * When your component renders, `usePublisherListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePublisherListQuery({
 *   variables: {
 *   },
 * });
 */
export function usePublisherListQuery(baseOptions?: Apollo.QueryHookOptions<PublisherListQuery, PublisherListQueryVariables>) {
        return Apollo.useQuery<PublisherListQuery, PublisherListQueryVariables>(PublisherListDocument, baseOptions);
      }
export function usePublisherListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PublisherListQuery, PublisherListQueryVariables>) {
          return Apollo.useLazyQuery<PublisherListQuery, PublisherListQueryVariables>(PublisherListDocument, baseOptions);
        }
export type PublisherListQueryHookResult = ReturnType<typeof usePublisherListQuery>;
export type PublisherListLazyQueryHookResult = ReturnType<typeof usePublisherListLazyQuery>;
export type PublisherListQueryResult = Apollo.QueryResult<PublisherListQuery, PublisherListQueryVariables>;
export const CreateSeriesDocument = gql`
    mutation CreateSeries($name: String!, $publisherId: ID!) {
  createSeries(name: $name, publisherId: $publisherId) {
    series {
      id
      name
    }
    errors {
      message
    }
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
        return Apollo.useMutation<CreateSeriesMutation, CreateSeriesMutationVariables>(CreateSeriesDocument, baseOptions);
      }
export type CreateSeriesMutationHookResult = ReturnType<typeof useCreateSeriesMutation>;
export type CreateSeriesMutationResult = Apollo.MutationResult<CreateSeriesMutation>;
export type CreateSeriesMutationOptions = Apollo.BaseMutationOptions<CreateSeriesMutation, CreateSeriesMutationVariables>;
export const SeriesDocument = gql`
    query Series($id: ID!) {
  series(id: $id) {
    id
    name
    books {
      ...BookDetails
    }
  }
}
    ${BookDetailsFragmentDoc}`;

/**
 * __useSeriesQuery__
 *
 * To run a query within a React component, call `useSeriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useSeriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSeriesQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSeriesQuery(baseOptions: Apollo.QueryHookOptions<SeriesQuery, SeriesQueryVariables>) {
        return Apollo.useQuery<SeriesQuery, SeriesQueryVariables>(SeriesDocument, baseOptions);
      }
export function useSeriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SeriesQuery, SeriesQueryVariables>) {
          return Apollo.useLazyQuery<SeriesQuery, SeriesQueryVariables>(SeriesDocument, baseOptions);
        }
export type SeriesQueryHookResult = ReturnType<typeof useSeriesQuery>;
export type SeriesLazyQueryHookResult = ReturnType<typeof useSeriesLazyQuery>;
export type SeriesQueryResult = Apollo.QueryResult<SeriesQuery, SeriesQueryVariables>;
export const SeriesListDocument = gql`
    query SeriesList {
  seriesList {
    nodes {
      id
      name
      books {
        ...BookDetails
      }
    }
  }
}
    ${BookDetailsFragmentDoc}`;

/**
 * __useSeriesListQuery__
 *
 * To run a query within a React component, call `useSeriesListQuery` and pass it any options that fit your needs.
 * When your component renders, `useSeriesListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSeriesListQuery({
 *   variables: {
 *   },
 * });
 */
export function useSeriesListQuery(baseOptions?: Apollo.QueryHookOptions<SeriesListQuery, SeriesListQueryVariables>) {
        return Apollo.useQuery<SeriesListQuery, SeriesListQueryVariables>(SeriesListDocument, baseOptions);
      }
export function useSeriesListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SeriesListQuery, SeriesListQueryVariables>) {
          return Apollo.useLazyQuery<SeriesListQuery, SeriesListQueryVariables>(SeriesListDocument, baseOptions);
        }
export type SeriesListQueryHookResult = ReturnType<typeof useSeriesListQuery>;
export type SeriesListLazyQueryHookResult = ReturnType<typeof useSeriesListLazyQuery>;
export type SeriesListQueryResult = Apollo.QueryResult<SeriesListQuery, SeriesListQueryVariables>;