module Mutations
  module Types
    class BookAttributesType < Types::BaseInputObject
      argument :alternate_title, String, required: false
      argument :credit_ids, [ID], required: false
      argument :issue, String, required: false
      argument :series_id, ID, required: false
    end
  end
end
