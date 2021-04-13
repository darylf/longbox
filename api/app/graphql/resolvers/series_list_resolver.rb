module Resolvers
  class SeriesListResolver < Resolvers::BaseResolver
    type [Types::SeriesType], null: false
    argument :limit, Integer, default_value: 20, prepare: ->(limit, _) { [limit, 30].min }, required: false

    def resolve(limit:)
      Series.all.limit(limit)
    end
  end
end
