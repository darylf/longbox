module Resolvers
  class CreatorsResolver < Resolvers::BaseResolver
    include Sortable
    include Truncatable

    type [Types::CreatorType], null: false

    argument :sort_by, Types::SortAttributes, required: false
    argument :limit, Integer, required: false

    def resolve(**args)
      trunc_list(sort_list(Creator.all, args[:sort_by]), args[:limit])
    end
  end
end
