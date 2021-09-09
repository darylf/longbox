export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
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
  ageRating?: Maybe<Scalars["String"]>;
  alternateTitle?: Maybe<Scalars["String"]>;
  creditIds?: Maybe<Array<Scalars["ID"]>>;
  format?: Maybe<Scalars["String"]>;
  issue?: Maybe<Scalars["String"]>;
  pageCount?: Maybe<Scalars["String"]>;
  price?: Maybe<Scalars["String"]>;
  publicationDate?: Maybe<Scalars["String"]>;
  seriesId: Scalars["ID"];
  summary?: Maybe<Scalars["String"]>;
  credits: Array<Maybe<CreditInput>>;
};

/** A person representing someone involved in the creation process of a book */
export type Creator = {
  __typename?: "Creator";
  createdAt: Scalars["DateTime"];
  credits: Array<Credit>;
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
  featured: Scalars["Boolean"];
  id: Scalars["ID"];
  /** The position this creator should be listed in a featured list */
  position?: Maybe<Scalars["Int"]>;
  role: Scalars["String"];
  updatedAt: Scalars["DateTime"];
};

export type CreditInput = {
  creatorId: Scalars["ID"];
  featured?: Maybe<Scalars["Boolean"]>;
  position?: Maybe<Scalars["Int"]>;
  roleId: Scalars["ID"];
};

/** A comic book or trade paperback */
export type Image = {
  __typename?: "Image";
  extension: ImageExtensionEnum;
  height?: Maybe<Scalars["Int"]>;
  url: Scalars["String"];
  width?: Maybe<Scalars["Int"]>;
};

export enum ImageExtensionEnum {
  Jpg = "jpg",
  Png = "png",
  Gif = "gif",
}

export enum ImageSizeEnum {
  /** Small image size */
  S = "S",
  /** Medium */
  M = "M",
  /** Large */
  L = "L",
}

export type LogInInput = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type LogOutInput = {
  everywhere?: Maybe<Scalars["Boolean"]>;
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

export type MutationUpdatePublisherArgs = {
  id: Scalars["ID"];
  attributes: PublisherInput;
};

export type MutationUpdateSeriesArgs = {
  id: Scalars["ID"];
  attributes: SeriesInput;
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
  size?: Maybe<ImageSizeEnum>;
  type?: Maybe<ImageExtensionEnum>;
};

/** A book publishing company */
export type PublisherSeriesArgs = {
  limit?: Maybe<Scalars["Int"]>;
  sortBy?: Maybe<SortAttributes>;
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
  publisher: Publisher;
  publishers: PublisherConnection;
  series: Series;
  seriesList: SeriesConnection;
  user: User;
  users: UserConnection;
};

export type QueryBookArgs = {
  id?: Maybe<Scalars["ID"]>;
};

export type QueryBooksArgs = {
  sortBy?: Maybe<SortAttributes>;
  limit?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type QueryCreatorArgs = {
  id?: Maybe<Scalars["ID"]>;
};

export type QueryCreatorsArgs = {
  sortBy?: Maybe<SortAttributes>;
  limit?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type QueryPublisherArgs = {
  id?: Maybe<Scalars["ID"]>;
};

export type QueryPublishersArgs = {
  sortBy?: Maybe<SortAttributes>;
  limit?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type QuerySeriesArgs = {
  id?: Maybe<Scalars["ID"]>;
};

export type QuerySeriesListArgs = {
  sortBy?: Maybe<SortAttributes>;
  limit?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
};

export type QueryUserArgs = {
  id: Scalars["ID"];
};

export type QueryUsersArgs = {
  sortBy?: Maybe<SortAttributes>;
  limit?: Maybe<Scalars["Int"]>;
  after?: Maybe<Scalars["String"]>;
  before?: Maybe<Scalars["String"]>;
  first?: Maybe<Scalars["Int"]>;
  last?: Maybe<Scalars["Int"]>;
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
  limit?: Maybe<Scalars["Int"]>;
  sortBy?: Maybe<SortAttributes>;
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
  /** name of the field */
  field?: Maybe<Scalars["String"]>;
  /** direction of the sort */
  direction?: Maybe<SortDirectionEnum>;
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
  login?: Maybe<{
    __typename?: "AuthenticationResult";
    accessToken: string;
    refreshToken: string;
    me?: Maybe<{
      __typename?: "User";
      id: string;
      avatar: string;
      email: string;
      roles: Array<string>;
      username: string;
    }>;
  }>;
};

export type LogOutMutationVariables = Exact<{
  everywhere?: Maybe<Scalars["Boolean"]>;
}>;

export type LogOutMutation = {
  __typename?: "Mutation";
  logout?: Maybe<{ __typename?: "Message"; message: string }>;
};

export type RegisterMutationVariables = Exact<{
  username: Scalars["String"];
  email: Scalars["String"];
  password: Scalars["String"];
}>;

export type RegisterMutation = {
  __typename?: "Mutation";
  register?: Maybe<{
    __typename?: "AuthenticationResult";
    accessToken: string;
    refreshToken: string;
    me?: Maybe<{
      __typename?: "User";
      id: string;
      avatar: string;
      email: string;
      roles: Array<string>;
      username: string;
    }>;
  }>;
};

export type BookQueryVariables = Exact<{
  id: Scalars["ID"];
}>;

export type BookQuery = {
  __typename?: "Query";
  book: {
    __typename?: "Book";
    id: string;
    ageRating?: Maybe<string>;
    alternateTitle?: Maybe<string>;
    createdAt: any;
    displayName: string;
    format?: Maybe<string>;
    issue?: Maybe<string>;
    pageCount?: Maybe<string>;
    price?: Maybe<string>;
    publicationDate?: Maybe<string>;
    summary?: Maybe<string>;
    updatedAt: any;
    coverImage?: Maybe<{ __typename?: "Image"; url: string }>;
    createdBy: { __typename?: "User"; id: string; username: string };
    credits?: Maybe<
      Array<{
        __typename?: "Credit";
        role: string;
        creator: {
          __typename?: "Creator";
          id: string;
          firstName?: Maybe<string>;
          lastName?: Maybe<string>;
        };
      }>
    >;
    featuredCreators: Array<{
      __typename?: "Creator";
      id: string;
      firstName?: Maybe<string>;
      lastName?: Maybe<string>;
    }>;
    publisher?: Maybe<{ __typename?: "Publisher"; id: string; name: string }>;
    series?: Maybe<{ __typename?: "Series"; id: string; name: string }>;
    updatedBy: { __typename?: "User"; id: string; username: string };
  };
};

export type BooksQueryVariables = Exact<{
  limit?: Maybe<Scalars["Int"]>;
}>;

export type BooksQuery = {
  __typename?: "Query";
  books: {
    __typename?: "BookConnection";
    nodes?: Maybe<
      Array<
        Maybe<{
          __typename?: "Book";
          id: string;
          publisherName?: Maybe<string>;
          seriesName?: Maybe<string>;
          issue?: Maybe<string>;
          format?: Maybe<string>;
          publicationDate?: Maybe<string>;
          price?: Maybe<string>;
          pageCount?: Maybe<string>;
        }>
      >
    >;
  };
};

export type CreateBookMutationVariables = Exact<{
  ageRating?: Maybe<Scalars["String"]>;
  alternateTitle?: Maybe<Scalars["String"]>;
  credits: Array<CreditInput> | CreditInput;
  format: Scalars["String"];
  issue: Scalars["String"];
  pageCount?: Maybe<Scalars["String"]>;
  price?: Maybe<Scalars["String"]>;
  publicationDate?: Maybe<Scalars["String"]>;
  seriesId: Scalars["ID"];
  summary?: Maybe<Scalars["String"]>;
}>;

export type CreateBookMutation = {
  __typename?: "Mutation";
  createBook?: Maybe<{
    __typename?: "Book";
    id: string;
    ageRating?: Maybe<string>;
    alternateTitle?: Maybe<string>;
    displayName: string;
    format?: Maybe<string>;
    issue?: Maybe<string>;
    pageCount?: Maybe<string>;
    price?: Maybe<string>;
    publicationDate?: Maybe<string>;
    summary?: Maybe<string>;
    series?: Maybe<{ __typename?: "Series"; id: string }>;
  }>;
};

export type RankedBookListQueryVariables = Exact<{
  limit?: Maybe<Scalars["Int"]>;
  field: Scalars["String"];
  direction: SortDirectionEnum;
}>;

export type RankedBookListQuery = {
  __typename?: "Query";
  books: {
    __typename?: "BookConnection";
    nodes?: Maybe<
      Array<
        Maybe<{
          __typename?: "Book";
          id: string;
          displayName: string;
          publicationDate?: Maybe<string>;
          publisherName?: Maybe<string>;
        }>
      >
    >;
  };
};

export type UpdateBookMutationVariables = Exact<{
  id: Scalars["ID"];
  ageRating?: Maybe<Scalars["String"]>;
  alternateTitle?: Maybe<Scalars["String"]>;
  credits: Array<Maybe<CreditInput>> | Maybe<CreditInput>;
  format: Scalars["String"];
  issue: Scalars["String"];
  pageCount?: Maybe<Scalars["String"]>;
  price?: Maybe<Scalars["String"]>;
  publicationDate?: Maybe<Scalars["String"]>;
  seriesId: Scalars["ID"];
  summary?: Maybe<Scalars["String"]>;
}>;

export type UpdateBookMutation = {
  __typename?: "Mutation";
  updateBook?: Maybe<{
    __typename?: "Book";
    id: string;
    ageRating?: Maybe<string>;
    alternateTitle?: Maybe<string>;
    displayName: string;
    format?: Maybe<string>;
    issue?: Maybe<string>;
    pageCount?: Maybe<string>;
    price?: Maybe<string>;
    publicationDate?: Maybe<string>;
    summary?: Maybe<string>;
    credits?: Maybe<
      Array<{
        __typename?: "Credit";
        id: string;
        featured: boolean;
        position?: Maybe<number>;
        role: string;
        creator: {
          __typename?: "Creator";
          firstName?: Maybe<string>;
          lastName?: Maybe<string>;
        };
      }>
    >;
    series?: Maybe<{ __typename?: "Series"; id: string }>;
  }>;
};

export type CreateCreatorMutationVariables = Exact<{
  firstName: Scalars["String"];
  lastName: Scalars["String"];
}>;

export type CreateCreatorMutation = {
  __typename?: "Mutation";
  createCreator?: Maybe<{
    __typename?: "Creator";
    id: string;
    firstName?: Maybe<string>;
    lastName?: Maybe<string>;
  }>;
};

export type CreatorQueryVariables = Exact<{
  id: Scalars["ID"];
}>;

export type CreatorQuery = {
  __typename?: "Query";
  creator: {
    __typename?: "Creator";
    id: string;
    firstName?: Maybe<string>;
    lastName?: Maybe<string>;
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

export type CreatorsQueryVariables = Exact<{ [key: string]: never }>;

export type CreatorsQuery = {
  __typename?: "Query";
  creators: {
    __typename?: "CreatorConnection";
    nodes?: Maybe<
      Array<
        Maybe<{
          __typename?: "Creator";
          id: string;
          createdAt: any;
          firstName?: Maybe<string>;
          lastName?: Maybe<string>;
          roles: Array<string>;
        }>
      >
    >;
  };
};

export type CreatePublisherMutationVariables = Exact<{
  name: Scalars["String"];
}>;

export type CreatePublisherMutation = {
  __typename?: "Mutation";
  createPublisher?: Maybe<{
    __typename?: "Publisher";
    id: string;
    name: string;
    createdAt: any;
    updatedAt: any;
  }>;
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
    logo?: Maybe<{ __typename?: "Image"; url: string }>;
    series: Array<{ __typename?: "Series"; id: string; name: string }>;
  };
};

export type PublishersQueryVariables = Exact<{
  field?: Maybe<Scalars["String"]>;
  direction?: Maybe<SortDirectionEnum>;
  limit?: Maybe<Scalars["Int"]>;
}>;

export type PublishersQuery = {
  __typename?: "Query";
  publishers: {
    __typename?: "PublisherConnection";
    nodes?: Maybe<
      Array<
        Maybe<{
          __typename?: "Publisher";
          id: string;
          name: string;
          seriesCount: number;
          logo?: Maybe<{ __typename?: "Image"; url: string }>;
          series: Array<{ __typename?: "Series"; name: string }>;
        }>
      >
    >;
  };
};

export type RankedPublisherListQueryVariables = Exact<{
  limit?: Maybe<Scalars["Int"]>;
  field: Scalars["String"];
  direction: SortDirectionEnum;
}>;

export type RankedPublisherListQuery = {
  __typename?: "Query";
  publishers: {
    __typename?: "PublisherConnection";
    nodes?: Maybe<
      Array<
        Maybe<{
          __typename?: "Publisher";
          id: string;
          name: string;
          seriesCount: number;
        }>
      >
    >;
  };
};

export type UpdatePublisherMutationVariables = Exact<{
  id: Scalars["ID"];
  name: Scalars["String"];
}>;

export type UpdatePublisherMutation = {
  __typename?: "Mutation";
  updatePublisher?: Maybe<{
    __typename?: "UpdatePublisherPayload";
    publisher?: Maybe<{
      __typename?: "Publisher";
      id: string;
      name: string;
      updatedAt: any;
    }>;
    errors: Array<{
      __typename?: "UserError";
      path?: Maybe<Array<string>>;
      message: string;
    }>;
  }>;
};

export type CreateSeriesMutationVariables = Exact<{
  name: Scalars["String"];
  publisherId: Scalars["ID"];
}>;

export type CreateSeriesMutation = {
  __typename?: "Mutation";
  createSeries?: Maybe<{
    __typename?: "Series";
    id: string;
    name: string;
    createdAt: any;
    updatedAt: any;
  }>;
};

export type RankedSeriesListQueryVariables = Exact<{
  limit?: Maybe<Scalars["Int"]>;
  field: Scalars["String"];
  direction: SortDirectionEnum;
}>;

export type RankedSeriesListQuery = {
  __typename?: "Query";
  seriesList: {
    __typename?: "SeriesConnection";
    nodes?: Maybe<
      Array<
        Maybe<{
          __typename?: "Series";
          id: string;
          name: string;
          publisherName?: Maybe<string>;
          bookCount: number;
        }>
      >
    >;
  };
};

export type SeriesListQueryVariables = Exact<{
  field?: Maybe<Scalars["String"]>;
  direction?: Maybe<SortDirectionEnum>;
  limit?: Maybe<Scalars["Int"]>;
}>;

export type SeriesListQuery = {
  __typename?: "Query";
  seriesList: {
    __typename?: "SeriesConnection";
    nodes?: Maybe<
      Array<
        Maybe<{
          __typename?: "Series";
          bookCount: number;
          id: string;
          name: string;
          publisherName?: Maybe<string>;
          logo?: Maybe<{ __typename?: "Image"; url: string }>;
        }>
      >
    >;
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
    publisherName?: Maybe<string>;
    updatedAt: any;
    books?: Maybe<
      Array<{
        __typename?: "Book";
        id: string;
        displayName: string;
        format?: Maybe<string>;
        issue?: Maybe<string>;
        price?: Maybe<string>;
        pageCount?: Maybe<string>;
        publicationDate?: Maybe<string>;
      }>
    >;
    logo?: Maybe<{ __typename?: "Image"; url: string }>;
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
    nodes?: Maybe<
      Array<
        Maybe<{
          __typename?: "User";
          id: string;
          avatar: string;
          email: string;
          roles: Array<string>;
          username: string;
        }>
      >
    >;
  };
};

export const namedOperations = {
  Query: {
    Book: "Book",
    Books: "Books",
    RankedBookList: "RankedBookList",
    Creator: "Creator",
    Creators: "Creators",
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
    CreateCreator: "CreateCreator",
    CreatePublisher: "CreatePublisher",
    UpdatePublisher: "UpdatePublisher",
    CreateSeries: "CreateSeries",
  },
};
