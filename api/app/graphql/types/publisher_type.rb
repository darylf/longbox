module Types
  class PublisherType < Types::BaseObject
    description 'A book publishing company'
    field :id, ID, null: false
    field :created_at, Types::DateTimeType, null: false
    field :updated_at, Types::DateTimeType, null: false
    field :name, String, null: false
    field :series, [Types::SeriesType], null: false
    field :series_count, Int, null: false
    field :book_count, Int, null: false
  end
end
