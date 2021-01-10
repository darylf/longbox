module Types
  class QueryType < Types::BaseObject
    field :book, resolver: Resolvers::BookResolver
    field :books, Types::BookType.connection_type, resolver: Resolvers::BooksResolver
    field :publisher, resolver: Resolvers::PublisherResolver
    field :publishers, Types::BookType.connection_type, resolver: Resolvers::PublishersResolver
    field :series, resolver: Resolvers::SeriesResolver
    field :series_list, Types::BookType.connection_type, resolver: Resolvers::SeriesListResolver
  end
end
