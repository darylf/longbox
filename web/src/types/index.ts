export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type AuthenticationResult = {
  __typename?: "AuthenticationResult";
  accessToken: Scalars["String"];
  me?: Maybe<User>;
  refreshToken: Scalars["String"];
};

/** A comic book or trade paperback */
export type Book = {
  __typename?: "Book";
  ageRating?: Maybe<Scalars["String"]>;
  alternateTitle?: Maybe<Scalars["String"]>;
  coverImage?: Maybe<Image>;
  createdAt: Scalars["DateTime"];
  createdBy: User;
  credits?: Maybe<Array<Credit>>;
  displayName: Scalars["String"];
  featuredCreators: Array<Creator>;
  format?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  issue?: Maybe<Scalars["String"]>;
  pageCount?: Maybe<Scalars["String"]>;
  price?: Maybe<Scalars["String"]>;
  publicationDate?: Maybe<Scalars["String"]>;
  publisher?: Maybe<Publisher>;
  publisherName?: Maybe<Scalars["String"]>;
  series?: Maybe<Series>;
  seriesName?: Maybe<Scalars["String"]>;
  summary?: Maybe<Scalars["String"]>;
  updatedAt: Scalars["DateTime"];
  updatedBy: User;
};

/** A comic book or trade paperback */
export type BookCreditsArgs = {
  featured?: InputMaybe<Scalars["Boolean"]>;
};

/** The connection type for Book. */
export type BookConnection = {
  __typename?: "BookConnection";
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<BookEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Book>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type BookEdge = {
  __typename?: "BookEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<Book>;
};

export type BookInput = {
  ageRating?: InputMaybe<Scalars["String"]>;
  alternateTitle?: InputMaybe<Scalars["String"]>;
  creditIds?: InputMaybe<Array<Scalars["ID"]>>;
  credits: Array<InputMaybe<CreditInput>>;
  format?: InputMaybe<Scalars["String"]>;
  issue?: InputMaybe<Scalars["String"]>;
  pageCount?: InputMaybe<Scalars["String"]>;
  price?: InputMaybe<Scalars["String"]>;
  publicationDate?: InputMaybe<Scalars["String"]>;
  seriesId: Scalars["ID"];
  summary?: InputMaybe<Scalars["String"]>;
};

/** A person representing someone involved in the creation process of a book */
export type Creator = {
  __typename?: "Creator";
  createdAt: Scalars["DateTime"];
  credits: Array<Credit>;
  displayName?: Maybe<Scalars["String"]>;
  firstName?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  lastName?: Maybe<Scalars["String"]>;
  roles: Array<Scalars["String"]>;
  updatedAt: Scalars["DateTime"];
};

/** The connection type for Creator. */
export type CreatorConnection = {
  __typename?: "CreatorConnection";
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<CreatorEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Creator>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type CreatorEdge = {
  __typename?: "CreatorEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<Creator>;
};

export type CreatorInput = {
  firstName: Scalars["String"];
  lastName: Scalars["String"];
};

/** An association of book and creator */
export type Credit = {
  __typename?: "Credit";
  book: Book;
  createdAt: Scalars["DateTime"];
  creator: Creator;
  creatorName?: Maybe<Scalars["String"]>;
  featured: Scalars["Boolean"];
  id: Scalars["ID"];
  /** The position this creator should be listed in a featured list */
  position?: Maybe<Scalars["Int"]>;
  role: Scalars["String"];
  updatedAt: Scalars["DateTime"];
};

export type CreditInput = {
  bookId: Scalars["ID"];
  creatorId: Scalars["ID"];
  featured?: InputMaybe<Scalars["Boolean"]>;
  id?: InputMaybe<Scalars["ID"]>;
  position?: InputMaybe<Scalars["Int"]>;
  roleId: Scalars["ID"];
};

/** The function that a creator performs while creating a book */
export type CreditRole = {
  __typename?: "CreditRole";
  createdAt: Scalars["DateTime"];
  id: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
  updatedAt: Scalars["DateTime"];
};

/** A comic book or trade paperback */
export type Image = {
  __typename?: "Image";
  extension: ImageExtensionEnum;
  height?: Maybe<Scalars["Int"]>;
  id?: Maybe<Scalars["String"]>;
  url: Scalars["String"];
  width?: Maybe<Scalars["Int"]>;
};

export enum ImageExtensionEnum {
  Gif = "gif",
  Jpg = "jpg",
  Png = "png",
}

export enum ImageSizeEnum {
  /** Large */
  L = "L",
  /** Medium */
  M = "M",
  /** Small image size */
  S = "S",
}

export type LogInInput = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type LogOutInput = {
  everywhere?: InputMaybe<Scalars["Boolean"]>;
};

export type Message = {
  __typename?: "Message";
  message: Scalars["String"];
};

export type Mutation = {
  __typename?: "Mutation";
  createBook?: Maybe<Book>;
  createCreator?: Maybe<Creator>;
  createPublisher?: Maybe<Publisher>;
  createSeries?: Maybe<Series>;
  createUser?: Maybe<AuthenticationResult>;
  login?: Maybe<AuthenticationResult>;
  logout?: Maybe<Message>;
  refreshSession?: Maybe<AuthenticationResult>;
  register?: Maybe<AuthenticationResult>;
  updateBook?: Maybe<Book>;
  updateCredits?: Maybe<Array<Credit>>;
  updatePublisher?: Maybe<UpdatePublisherPayload>;
  updateSeries?: Maybe<UpdateSeriesPayload>;
};

export type MutationCreateBookArgs = {
  input: BookInput;
};

export type MutationCreateCreatorArgs = {
  input: CreatorInput;
};

export type MutationCreatePublisherArgs = {
  input: PublisherInput;
};

export type MutationCreateSeriesArgs = {
  input: SeriesInput;
};

export type MutationCreateUserArgs = {
  input: RegistrationInput;
};

export type MutationLoginArgs = {
  input: LogInInput;
};

export type MutationLogoutArgs = {
  input: LogOutInput;
};

export type MutationRegisterArgs = {
  input: RegistrationInput;
};

export type MutationUpdateBookArgs = {
  id: Scalars["ID"];
  input: BookInput;
};

export type MutationUpdateCreditsArgs = {
  bookId: Scalars["ID"];
  input: Array<CreditInput>;
};

export type MutationUpdatePublisherArgs = {
  attributes: PublisherInput;
  id: Scalars["ID"];
};

export type MutationUpdateSeriesArgs = {
  attributes: SeriesInput;
  id: Scalars["ID"];
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: "PageInfo";
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars["String"]>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars["Boolean"];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars["Boolean"];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars["String"]>;
};

/** A book publishing company */
export type Publisher = {
  __typename?: "Publisher";
  bookCount: Scalars["Int"];
  createdAt: Scalars["DateTime"];
  id: Scalars["ID"];
  logo?: Maybe<Image>;
  name: Scalars["String"];
  series: Array<Series>;
  seriesCount: Scalars["Int"];
  updatedAt: Scalars["DateTime"];
};

/** A book publishing company */
export type PublisherLogoArgs = {
  size?: InputMaybe<ImageSizeEnum>;
  type?: InputMaybe<ImageExtensionEnum>;
};

/** A book publishing company */
export type PublisherSeriesArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<SortAttributes>;
};

/** The connection type for Publisher. */
export type PublisherConnection = {
  __typename?: "PublisherConnection";
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PublisherEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Publisher>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type PublisherEdge = {
  __typename?: "PublisherEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<Publisher>;
};

export type PublisherInput = {
  name: Scalars["String"];
};

export type Query = {
  __typename?: "Query";
  book: Book;
  books: BookConnection;
  creator: Creator;
  creators: CreatorConnection;
  creditRoles: Array<CreditRole>;
  publisher: Publisher;
  publishers: PublisherConnection;
  series: Series;
  seriesList: SeriesConnection;
  user: User;
  users: UserConnection;
};

export type QueryBookArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryBooksArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<SortAttributes>;
};

export type QueryCreatorArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryCreatorsArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  search?: InputMaybe<Scalars["String"]>;
  sortBy?: InputMaybe<SortAttributes>;
};

export type QueryCreditRolesArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<SortAttributes>;
};

export type QueryPublisherArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QueryPublishersArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<SortAttributes>;
};

export type QuerySeriesArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QuerySeriesListArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<SortAttributes>;
};

export type QueryUserArgs = {
  id: Scalars["ID"];
};

export type QueryUsersArgs = {
  after?: InputMaybe<Scalars["String"]>;
  before?: InputMaybe<Scalars["String"]>;
  first?: InputMaybe<Scalars["Int"]>;
  last?: InputMaybe<Scalars["Int"]>;
  limit?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<SortAttributes>;
};

export type RegistrationInput = {
  email: Scalars["String"];
  password: Scalars["String"];
  username: Scalars["String"];
};

/** A collection of related books */
export type Series = {
  __typename?: "Series";
  bookCount: Scalars["Int"];
  /** A list of books released in this series */
  books?: Maybe<Array<Book>>;
  createdAt: Scalars["DateTime"];
  createdBy: User;
  id: Scalars["ID"];
  logo?: Maybe<Image>;
  name: Scalars["String"];
  publisher?: Maybe<Publisher>;
  publisherName?: Maybe<Scalars["String"]>;
  updatedAt: Scalars["DateTime"];
  updatedBy: User;
};

/** A collection of related books */
export type SeriesBooksArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
  sortBy?: InputMaybe<SortAttributes>;
};

/** The connection type for Series. */
export type SeriesConnection = {
  __typename?: "SeriesConnection";
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<SeriesEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Series>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type SeriesEdge = {
  __typename?: "SeriesEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<Series>;
};

export type SeriesInput = {
  name: Scalars["String"];
  publisherId: Scalars["ID"];
};

/** Attributes for defining the sorting of the query results */
export type SortAttributes = {
  /** direction of the sort */
  direction?: InputMaybe<SortDirectionEnum>;
  /** name of the field */
  field?: InputMaybe<Scalars["String"]>;
};

export enum SortDirectionEnum {
  /** Ascending */
  Asc = "ASC",
  /** Descending */
  Desc = "DESC",
}

/** Autogenerated return type of UpdatePublisher */
export type UpdatePublisherPayload = {
  __typename?: "UpdatePublisherPayload";
  errors: Array<UserError>;
  publisher?: Maybe<Publisher>;
};

/** Autogenerated return type of UpdateSeries */
export type UpdateSeriesPayload = {
  __typename?: "UpdateSeriesPayload";
  errors: Array<UserError>;
  series?: Maybe<Series>;
};

/** A website user */
export type User = {
  __typename?: "User";
  avatar: Scalars["String"];
  createdAt: Scalars["DateTime"];
  email: Scalars["String"];
  id: Scalars["ID"];
  roles: Array<Scalars["String"]>;
  updatedAt: Scalars["DateTime"];
  username: Scalars["String"];
};

/** The connection type for User. */
export type UserConnection = {
  __typename?: "UserConnection";
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<UserEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<User>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: "UserEdge";
  /** A cursor for use in pagination. */
  cursor: Scalars["String"];
  /** The item at the end of the edge. */
  node?: Maybe<User>;
};

/** A user-readable error */
export type UserError = {
  __typename?: "UserError";
  /** A description of the error */
  message: Scalars["String"];
  /** Which input value this error came from */
  path?: Maybe<Array<Scalars["String"]>>;
};

export type LoginMutationVariables = Exact<{
  email: Scalars["String"];
  password: Scalars["String"];
}>;

export type LoginMutation = {
  __typename?: "Mutation";
  login?:
    | {
        __typename?: "AuthenticationResult";
        accessToken: string;
        refreshToken: string;
        me?:
          | {
              __typename?: "User";
              id: string;
              avatar: string;
              email: string;
              roles: Array<string>;
              username: string;
            }
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type LogOutMutationVariables = Exact<{
  everywhere?: InputMaybe<Scalars["Boolean"]>;
}>;

export type LogOutMutation = {
  __typename?: "Mutation";
  logout?: { __typename?: "Message"; message: string } | null | undefined;
};

export type RegisterMutationVariables = Exact<{
  username: Scalars["String"];
  email: Scalars["String"];
  password: Scalars["String"];
}>;

export type RegisterMutation = {
  __typename?: "Mutation";
  register?:
    | {
        __typename?: "AuthenticationResult";
        accessToken: string;
        refreshToken: string;
        me?:
          | {
              __typename?: "User";
              id: string;
              avatar: string;
              email: string;
              roles: Array<string>;
              username: string;
            }
          | null
          | undefined;
      }
    | null
    | undefined;
};

export type BookQueryVariables = Exact<{
  id: Scalars["ID"];
}>;

export type BookQuery = {
  __typename?: "Query";
  book: {
    __typename?: "Book";
    id: string;
    ageRating?: string | null | undefined;
    alternateTitle?: string | null | undefined;
    createdAt: any;
    displayName: string;
    format?: string | null | undefined;
    issue?: string | null | undefined;
    pageCount?: string | null | undefined;
    price?: string | null | undefined;
    publicationDate?: string | null | undefined;
    summary?: string | null | undefined;
    updatedAt: any;
    coverImage?: { __typename?: "Image"; url: string } | null | undefined;
    createdBy: { __typename?: "User"; id: string; username: string };
    credits?:
      | Array<{
          __typename?: "Credit";
          creatorName?: string | null | undefined;
          featured: boolean;
          id: string;
          position?: number | null | undefined;
          role: string;
          creator: {
            __typename?: "Creator";
            id: string;
            firstName?: string | null | undefined;
            lastName?: string | null | undefined;
          };
        }>
      | null
      | undefined;
    featuredCreators: Array<{
      __typename?: "Creator";
      id: string;
      firstName?: string | null | undefined;
      lastName?: string | null | undefined;
    }>;
    publisher?:
      | { __typename?: "Publisher"; id: string; name: string }
      | null
      | undefined;
    series?:
      | { __typename?: "Series"; id: string; name: string }
      | null
      | undefined;
    updatedBy: { __typename?: "User"; id: string; username: string };
  };
};

export type BooksQueryVariables = Exact<{
  limit?: InputMaybe<Scalars["Int"]>;
}>;

export type BooksQuery = {
  __typename?: "Query";
  books: {
    __typename?: "BookConnection";
    nodes?:
      | Array<
          | {
              __typename?: "Book";
              id: string;
              displayName: string;
              format?: string | null | undefined;
              issue?: string | null | undefined;
              pageCount?: string | null | undefined;
              publicationDate?: string | null | undefined;
              price?: string | null | undefined;
              seriesName?: string | null | undefined;
              coverImage?:
                | { __typename?: "Image"; url: string }
                | null
                | undefined;
              credits?:
                | Array<{
                    __typename?: "Credit";
                    id: string;
                    featured: boolean;
                    position?: number | null | undefined;
                    creator: {
                      __typename?: "Creator";
                      id: string;
                      displayName?: string | null | undefined;
                    };
                  }>
                | null
                | undefined;
              publisher?:
                | { __typename?: "Publisher"; id: string; name: string }
                | null
                | undefined;
            }
          | null
          | undefined
        >
      | null
      | undefined;
  };
};

export type CreateBookMutationVariables = Exact<{
  ageRating?: InputMaybe<Scalars["String"]>;
  alternateTitle?: InputMaybe<Scalars["String"]>;
  credits: Array<CreditInput> | CreditInput;
  format: Scalars["String"];
  issue: Scalars["String"];
  pageCount?: InputMaybe<Scalars["String"]>;
  price?: InputMaybe<Scalars["String"]>;
  publicationDate?: InputMaybe<Scalars["String"]>;
  seriesId: Scalars["ID"];
  summary?: InputMaybe<Scalars["String"]>;
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

export type RankedBookListQueryVariables = Exact<{
  limit?: InputMaybe<Scalars["Int"]>;
  field: Scalars["String"];
  direction: SortDirectionEnum;
}>;

export type RankedBookListQuery = {
  __typename?: "Query";
  books: {
    __typename?: "BookConnection";
    nodes?:
      | Array<
          | {
              __typename?: "Book";
              id: string;
              displayName: string;
              publicationDate?: string | null | undefined;
              publisherName?: string | null | undefined;
            }
          | null
          | undefined
        >
      | null
      | undefined;
  };
};

export type UpdateBookMutationVariables = Exact<{
  id: Scalars["ID"];
  ageRating?: InputMaybe<Scalars["String"]>;
  alternateTitle?: InputMaybe<Scalars["String"]>;
  credits: Array<InputMaybe<CreditInput>> | InputMaybe<CreditInput>;
  format: Scalars["String"];
  issue: Scalars["String"];
  pageCount?: InputMaybe<Scalars["String"]>;
  price?: InputMaybe<Scalars["String"]>;
  publicationDate?: InputMaybe<Scalars["String"]>;
  seriesId: Scalars["ID"];
  summary?: InputMaybe<Scalars["String"]>;
}>;

export type UpdateBookMutation = {
  __typename?: "Mutation";
  updateBook?:
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
        credits?:
          | Array<{
              __typename?: "Credit";
              id: string;
              featured: boolean;
              position?: number | null | undefined;
              role: string;
              creator: {
                __typename?: "Creator";
                firstName?: string | null | undefined;
                lastName?: string | null | undefined;
              };
            }>
          | null
          | undefined;
        series?: { __typename?: "Series"; id: string } | null | undefined;
      }
    | null
    | undefined;
};

export type UpdateCreditsMutationVariables = Exact<{
  bookId: Scalars["ID"];
  input: Array<CreditInput> | CreditInput;
}>;

export type UpdateCreditsMutation = {
  __typename?: "Mutation";
  updateCredits?:
    | Array<{
        __typename?: "Credit";
        id: string;
        createdAt: any;
        featured: boolean;
        position?: number | null | undefined;
        role: string;
        updatedAt: any;
        creator: {
          __typename?: "Creator";
          id: string;
          displayName?: string | null | undefined;
        };
      }>
    | null
    | undefined;
};

export type CreateCreatorMutationVariables = Exact<{
  firstName: Scalars["String"];
  lastName: Scalars["String"];
}>;

export type CreateCreatorMutation = {
  __typename?: "Mutation";
  createCreator?:
    | {
        __typename?: "Creator";
        id: string;
        firstName?: string | null | undefined;
        lastName?: string | null | undefined;
      }
    | null
    | undefined;
};

export type CreatorQueryVariables = Exact<{
  id: Scalars["ID"];
}>;

export type CreatorQuery = {
  __typename?: "Query";
  creator: {
    __typename?: "Creator";
    id: string;
    firstName?: string | null | undefined;
    lastName?: string | null | undefined;
    createdAt: any;
    updatedAt: any;
    credits: Array<{
      __typename?: "Credit";
      id: string;
      role: string;
      book: { __typename?: "Book"; id: string; displayName: string };
    }>;
  };
};

export type CreatorsSearchQueryVariables = Exact<{
  search?: InputMaybe<Scalars["String"]>;
}>;

export type CreatorsSearchQuery = {
  __typename?: "Query";
  creators: {
    __typename?: "CreatorConnection";
    nodes?:
      | Array<
          | {
              __typename?: "Creator";
              id: string;
              displayName?: string | null | undefined;
              firstName?: string | null | undefined;
              lastName?: string | null | undefined;
            }
          | null
          | undefined
        >
      | null
      | undefined;
  };
};

export type CreatorsQueryVariables = Exact<{ [key: string]: never }>;

export type CreatorsQuery = {
  __typename?: "Query";
  creators: {
    __typename?: "CreatorConnection";
    nodes?:
      | Array<
          | {
              __typename?: "Creator";
              id: string;
              createdAt: any;
              firstName?: string | null | undefined;
              lastName?: string | null | undefined;
              roles: Array<string>;
            }
          | null
          | undefined
        >
      | null
      | undefined;
  };
};

export type CreditRolesQueryVariables = Exact<{ [key: string]: never }>;

export type CreditRolesQuery = {
  __typename?: "Query";
  creditRoles: Array<{
    __typename?: "CreditRole";
    id: string;
    name?: string | null | undefined;
    createdAt: any;
    updatedAt: any;
  }>;
};

export type CreatePublisherMutationVariables = Exact<{
  name: Scalars["String"];
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

export type PublisherQueryVariables = Exact<{
  id: Scalars["ID"];
}>;

export type PublisherQuery = {
  __typename?: "Query";
  publisher: {
    __typename?: "Publisher";
    id: string;
    createdAt: any;
    name: string;
    updatedAt: any;
    logo?: { __typename?: "Image"; url: string } | null | undefined;
    series: Array<{ __typename?: "Series"; id: string; name: string }>;
  };
};

export type PublishersQueryVariables = Exact<{
  field?: InputMaybe<Scalars["String"]>;
  direction?: InputMaybe<SortDirectionEnum>;
  limit?: InputMaybe<Scalars["Int"]>;
}>;

export type PublishersQuery = {
  __typename?: "Query";
  publishers: {
    __typename?: "PublisherConnection";
    nodes?:
      | Array<
          | {
              __typename?: "Publisher";
              id: string;
              name: string;
              seriesCount: number;
              logo?: { __typename?: "Image"; url: string } | null | undefined;
              series: Array<{ __typename?: "Series"; name: string }>;
            }
          | null
          | undefined
        >
      | null
      | undefined;
  };
};

export type RankedPublisherListQueryVariables = Exact<{
  limit?: InputMaybe<Scalars["Int"]>;
  field: Scalars["String"];
  direction: SortDirectionEnum;
}>;

export type RankedPublisherListQuery = {
  __typename?: "Query";
  publishers: {
    __typename?: "PublisherConnection";
    nodes?:
      | Array<
          | {
              __typename?: "Publisher";
              id: string;
              name: string;
              seriesCount: number;
            }
          | null
          | undefined
        >
      | null
      | undefined;
  };
};

export type UpdatePublisherMutationVariables = Exact<{
  id: Scalars["ID"];
  name: Scalars["String"];
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

export type CreateSeriesMutationVariables = Exact<{
  name: Scalars["String"];
  publisherId: Scalars["ID"];
}>;

export type CreateSeriesMutation = {
  __typename?: "Mutation";
  createSeries?:
    | {
        __typename?: "Series";
        id: string;
        name: string;
        createdAt: any;
        updatedAt: any;
      }
    | null
    | undefined;
};

export type RankedSeriesListQueryVariables = Exact<{
  limit?: InputMaybe<Scalars["Int"]>;
  field: Scalars["String"];
  direction: SortDirectionEnum;
}>;

export type RankedSeriesListQuery = {
  __typename?: "Query";
  seriesList: {
    __typename?: "SeriesConnection";
    nodes?:
      | Array<
          | {
              __typename?: "Series";
              id: string;
              name: string;
              publisherName?: string | null | undefined;
              bookCount: number;
            }
          | null
          | undefined
        >
      | null
      | undefined;
  };
};

export type SeriesListQueryVariables = Exact<{
  field?: InputMaybe<Scalars["String"]>;
  direction?: InputMaybe<SortDirectionEnum>;
  limit?: InputMaybe<Scalars["Int"]>;
}>;

export type SeriesListQuery = {
  __typename?: "Query";
  seriesList: {
    __typename?: "SeriesConnection";
    nodes?:
      | Array<
          | {
              __typename?: "Series";
              bookCount: number;
              id: string;
              name: string;
              publisherName?: string | null | undefined;
              logo?: { __typename?: "Image"; url: string } | null | undefined;
            }
          | null
          | undefined
        >
      | null
      | undefined;
  };
};

export type SeriesQueryVariables = Exact<{
  id: Scalars["ID"];
}>;

export type SeriesQuery = {
  __typename?: "Query";
  series: {
    __typename?: "Series";
    id: string;
    name: string;
    createdAt: any;
    publisherName?: string | null | undefined;
    updatedAt: any;
    books?:
      | Array<{
          __typename?: "Book";
          id: string;
          format?: string | null | undefined;
          issue?: string | null | undefined;
          price?: string | null | undefined;
          publicationDate?: string | null | undefined;
          pageCount?: string | null | undefined;
          displayName: string;
          credits?:
            | Array<{
                __typename?: "Credit";
                id: string;
                creatorName?: string | null | undefined;
                role: string;
              }>
            | null
            | undefined;
        }>
      | null
      | undefined;
    logo?: { __typename?: "Image"; url: string } | null | undefined;
  };
};

export type UserQueryVariables = Exact<{
  id: Scalars["ID"];
}>;

export type UserQuery = {
  __typename?: "Query";
  user: {
    __typename?: "User";
    id: string;
    email: string;
    username: string;
    avatar: string;
    roles: Array<string>;
    createdAt: any;
    updatedAt: any;
  };
};

export type UsersQueryVariables = Exact<{ [key: string]: never }>;

export type UsersQuery = {
  __typename?: "Query";
  users: {
    __typename?: "UserConnection";
    nodes?:
      | Array<
          | {
              __typename?: "User";
              id: string;
              avatar: string;
              email: string;
              roles: Array<string>;
              username: string;
            }
          | null
          | undefined
        >
      | null
      | undefined;
  };
};

export const namedOperations = {
  Query: {
    Book: "Book",
    Books: "Books",
    RankedBookList: "RankedBookList",
    Creator: "Creator",
    CreatorsSearch: "CreatorsSearch",
    Creators: "Creators",
    CreditRoles: "CreditRoles",
    Publisher: "Publisher",
    Publishers: "Publishers",
    RankedPublisherList: "RankedPublisherList",
    RankedSeriesList: "RankedSeriesList",
    SeriesList: "SeriesList",
    Series: "Series",
    User: "User",
    Users: "Users",
  },
  Mutation: {
    Login: "Login",
    LogOut: "LogOut",
    Register: "Register",
    CreateBook: "CreateBook",
    UpdateBook: "UpdateBook",
    UpdateCredits: "UpdateCredits",
    CreateCreator: "CreateCreator",
    CreatePublisher: "CreatePublisher",
    UpdatePublisher: "UpdatePublisher",
    CreateSeries: "CreateSeries",
  },
};
