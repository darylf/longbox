module Resolvers
  class SeriesListResolver < Resolvers::BaseResolver
    type [Types::SeriesType], null: false

    def resolve
      Series.all
    end
  end
end
