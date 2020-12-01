module Resolvers
  class CreatorsResolver < Resolvers::BaseResolver
    type [Types::CreatorType], null: false

    def resolve
      Creator.all
    end
  end
end
