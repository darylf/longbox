module Types
  class CreditType < Types::BaseObject
    description 'An association of book and creator'
    field :id, ID, null: false
    field :created_at, Types::DateTimeType, null: false
    field :updated_at, Types::DateTimeType, null: false
    field :book, Types::BookType, null: false
    field :creator, Types::CreatorType, null: false
    field :role, String, null: false
  end
end
