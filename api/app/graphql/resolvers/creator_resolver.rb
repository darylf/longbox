module Resolvers
  class CreatorResolver < Resolvers::BaseResolver
    type Types::CreatorType, null: false
    argument :id, ID, required: false

    def resolve(**args)
      Creator.find(args[:id])
    end
  end
end
