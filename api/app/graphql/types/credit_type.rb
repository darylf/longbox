module Types
  class CreditType < Types::BaseObject
    description 'An association of book and creator'
    field :id, ID, null: false
    field :created_at, Types::DateTimeType, null: false
    field :updated_at, Types::DateTimeType, null: false
    field :book, Types::BookType, null: false
    field :creator, Types::CreatorType, null: false
    field :role, String, null: false
    field :featured, Boolean, null: false
    field :position, Integer, null: true, description: "The position this creator should be listed in a featured list"
  end
end
