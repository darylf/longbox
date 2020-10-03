module Types
  class QueryType < Types::BaseObject
    field :publishers, resolver: Resolvers::PublishersResolver
    field :publisher, resolver: Resolvers::PublisherResolver
  end
end
