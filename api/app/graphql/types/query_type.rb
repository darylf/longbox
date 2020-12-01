module Types
  class QueryType < Types::BaseObject
    field :book, resolver: Resolvers::BookResolver
    field :books, resolver: Resolvers::BooksResolver
    field :publisher, resolver: Resolvers::PublisherResolver
    field :publishers, resolver: Resolvers::PublishersResolver
    field :series, resolver: Resolvers::SeriesResolver
    field :series_list, resolver: Resolvers::SeriesListResolver
  end
end
