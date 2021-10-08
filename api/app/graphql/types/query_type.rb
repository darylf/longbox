module Types
  class QueryType < Types::BaseObject
    field :book, resolver: Resolvers::BookResolver
    field :books, Types::BookType.connection_type, resolver: Resolvers::BooksResolver
    field :creator, resolver: Resolvers::CreatorResolver
    field :creators, Types::CreatorType.connection_type, resolver: Resolvers::CreatorsResolver
    field :credit_roles, [Types::CreditRoleType], resolver: Resolvers::CreditRolesResolver
    field :publisher, resolver: Resolvers::PublisherResolver
    field :publishers, Types::PublisherType.connection_type, resolver: Resolvers::PublishersResolver
    field :series, resolver: Resolvers::SeriesResolver
    field :series_list, Types::SeriesType.connection_type, resolver: Resolvers::SeriesListResolver
    field :user, resolver: Resolvers::UserResolver
    field :users, Types::UserType.connection_type, resolver: Resolvers::UsersResolver
  end
end
