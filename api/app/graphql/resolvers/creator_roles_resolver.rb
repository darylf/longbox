module Resolvers
  class CreatorRoleResolver < Resolvers::BaseResolver
    include Sortable
    include Truncatable

    type [Types::CreatorType], null: false

    argument :limit, Integer, required: false
    argument :search, String, required: false
    argument :sort_by, Types::SortAttributes, required: false

    def resolve(**args)
      return [] if args[:search] && (args[:search].size <= 3)

      creators = if args[:search]
                   Creator.where("CONCAT(first_name, last_name) ILIKE ?", "%#{args[:search]}%")
                 else
                   Creator.all
                 end
      trunc_list(sort_list(creators, args[:sort_by]), args[:limit])
    end
  end
end
