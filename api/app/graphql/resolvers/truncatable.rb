module Resolvers
  module Truncatable
    def trunc_list(items, limit)
      return items if limit.nil?

      items.take(limit)
    end
  end
end
