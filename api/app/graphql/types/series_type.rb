module Types
  class SeriesType < Types::BaseObject
    description 'A collection of related books'
    field :id, ID, null: false
    field :book_count, Int, null: false
    field :created_at, Types::DateTimeType, null: false
    field :created_by, Types::UserType, null: false
    field :name, String, null: false
    field :publisher, Types::PublisherType, null: true
    field :publisher_name, String, null: true
    field :updated_at, Types::DateTimeType, null: false
    field :updated_by, Types::UserType, null: false

    field :books, [Types::BookType], 'A list of books released in this series', null: true do
      argument :limit, Integer, required: false
    end

    def books(limit: nil)
      limit.nil? ? object.books : object.books.limit(limit)
    end
  end
end
