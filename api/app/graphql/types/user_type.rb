module Types
  class UserType < Types::BaseObject
    description 'A website user'
    field :id, ID, null: false
    field :created_at, Types::DateTimeType, null: false
    field :updated_at, Types::DateTimeType, null: false
    field :name, String, null: false
    field :email, String, null: false
  end
end
