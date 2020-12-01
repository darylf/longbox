module Resolvers
  class SeriesResolver < Resolvers::BaseResolver
    type Types::SeriesType, null: false
    argument :id, ID, required: false

    def resolve(**args)
      Series.find(args[:id])
    end
  end
end
