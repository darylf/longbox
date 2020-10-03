module Types
  class BookType < Types::BaseObject
    description 'A comic book or trade paperback'
    field :id, ID, null: false
    field :issue, String, null: false
    field :creators, [Types::CreatorType], null: true
  end
end
