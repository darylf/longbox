module Types
  class Book < Types::BaseObject
    description 'A comic book or trade paperback'
    field :id, ID, null: false
    field :issue, String, null: false
    field :creators, [Types::Creator], null: true
  end
end
