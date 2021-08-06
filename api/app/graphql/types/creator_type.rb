module Types
  class CreatorType < Types::BaseObject
    description 'A person representing someone involved in the creation process of a book'
    field :id, ID, null: false
    field :first_name, String, null: true
    field :last_name, String, null: true
    field :credits, [Types::CreditType], null: false
    field :created_at, Types::DateTimeType, null: false
    field :updated_at, Types::DateTimeType, null: false
  end
end
