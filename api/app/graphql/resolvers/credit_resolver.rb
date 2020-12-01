module Resolvers
  class CreditResolver < Resolvers::BaseResolver
    type Types::CreditType, null: false
    argument :id, ID, required: false

    def resolve(**args)
      Creator.find(args[:id])
    end
  end
end
