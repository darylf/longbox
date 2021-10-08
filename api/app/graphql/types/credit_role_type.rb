module Types
  class CreditRoleType < Types::BaseObject
    description 'The function that a creator performs while creating a book'
    field :id, ID, null: false
    field :name, String, null: true
    field :created_at, Types::DateTimeType, null: false
    field :updated_at, Types::DateTimeType, null: false
  end
end
