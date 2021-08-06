module Types
  class QueryType < Types::BaseObject
    field :book, resolver: Resolvers::BookResolver
    field :books, Types::BookType.connection_type, resolver: Resolvers::BooksResolver
    field :creator, resolver: Resolvers::CreatorResolver
    field :creators, resolver: Resolvers::CreatorsResolver
    field :publisher, resolver: Resolvers::PublisherResolver
    field :publishers, Types::PublisherType.connection_type, resolver: Resolvers::PublishersResolver
    field :series, resolver: Resolvers::SeriesResolver
    field :series_list, Types::SeriesType.connection_type, resolver: Resolvers::SeriesListResolver
    field :users, Types::UserType.connection_type, resolver: Resolvers::UsersResolver
  end
end
