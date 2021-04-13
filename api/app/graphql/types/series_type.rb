module Types
  class SeriesType < Types::BaseObject
    description 'A collection of related books'
    field :id, ID, null: false
    field :name, String, null: false
    field :publisher, Types::PublisherType, null: true

    field :books, [Types::BookType], 'A list of books released in this series', null: true do
      argument :limit, Integer, required: false
    end

    def books(limit: nil)
      limit.nil? ? object.books : object.books.limit(limit)
    end
  end
end
