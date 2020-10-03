module Resolvers
  class PublisherResolver < Resolvers::BaseResolver
    type Types::PublisherType, null: false
    argument :id, ID, required: false

    def resolve(**args)
      Publisher.find(args[:id])
    end
  end
end
