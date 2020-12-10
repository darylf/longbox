module Types
  class BaseInputObject < GraphQL::Schema::InputObject
  end
end

module Types
  class BookAttributes < Types::BaseInputObject
    description "Attributes for creating or updating a book"
    argument :issue, String, required: false
    argument :format, String, required: false
    argument :series, [Types::SeriesType], required: false
  end
end
