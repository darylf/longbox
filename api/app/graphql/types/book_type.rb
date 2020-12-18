module Types
  class BookType < Types::BaseObject
    description 'A comic book or trade paperback'
    field :id, ID, null: false
    field :created_at, Types::DateTimeType, null: false
    field :updated_at, Types::DateTimeType, null: false

    field :title, String, null: true
    field :credits, [Types::CreditType], null: true
    field :format, String, null: true
    field :issue, String, null: true
    field :publisher_name, String, null: true
    field :series, Types::SeriesType, null: true
    field :series_name, String, null: true
  end
end
