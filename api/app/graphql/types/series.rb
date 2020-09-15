module Types
  class Series < Types::BaseObject
    description 'A collection of related books'
    field :id, ID, null: false
    field :name, String, null: false
    field :books, [Types::Book], 'A list of books released in this series', null: true
  end
end
