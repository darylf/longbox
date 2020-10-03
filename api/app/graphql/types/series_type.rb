module Types
  class SeriesType < Types::BaseObject
    description 'A collection of related books'
    field :id, ID, null: false
    field :name, String, null: false
    field :books, [Types::BookType], 'A list of books released in this series', null: true
  end
end
