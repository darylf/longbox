module Types
  class SortAttributes < Types::BaseInputObject
    description "Attributes for defining the sorting of the query results"
    argument :field, String, "name of the field", required: false
    argument :direction, Types::SortDirectionEnum, "direction of the sort", required: false
  end
end
