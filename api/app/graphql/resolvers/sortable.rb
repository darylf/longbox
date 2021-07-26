module Resolvers
  module Sortable
    extend ActiveSupport::Concern
    def sort_list(items, sort_by)
      return items if sort_by.nil?

      items = items.sort_by { |item| item.send(sort_by[:field].to_sym) }
      items = items.reverse if sort_by[:direction] == "DESC"
      items
    end
  end
end
