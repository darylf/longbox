module Types
  class Query < Types::BaseObject
    field :publishers, resolver: Resolvers::PublishersResolver
    field :publisher, resolver: Resolvers::PublisherResolver
  end
end
