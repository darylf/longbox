module Resolvers
  module Sortable
    extend ActiveSupport::Concern
    def sort_list(items, sort_by)
      return items if sort_by.nil?
      return [] unless items.size.positive?
      raise ArgumentError, "Field '#{sort_by[:field]}' is not supported on type '#{items[0].class.name}'" unless items[0].methods.include? sort_by[:field].to_sym

      items = items.sort_by { |item| item.send(sort_by[:field].to_sym) }
      items = items.reverse if sort_by[:direction] == "DESC"
      items
    end
  end
end
