module Resolvers
  class CreditRolesResolver < Resolvers::BaseResolver
    include Sortable
    include Truncatable

    type [Types::CreditRoleType], null: false

    argument :sort_by, Types::SortAttributes, required: false
    argument :limit, Integer, required: false

    def resolve(**args)
      trunc_list(sort_list(CreditRole.all, args[:sort_by]), args[:limit])
    end
  end
end
