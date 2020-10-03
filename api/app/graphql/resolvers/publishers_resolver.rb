module Resolvers
  class PublishersResolver < Resolvers::BaseResolver
    type [Types::PublisherType], null: false

    def resolve
      Publisher.all
    end
  end
end
