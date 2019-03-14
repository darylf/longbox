module Resolvers
  class PublishersResolver < Resolvers::BaseResolver
    type [Types::Publisher], null: false

    def resolve
      Publisher.all
    end
  end
end
