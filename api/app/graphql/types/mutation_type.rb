module Types
  class MutationType < Types::BaseObject
    field :create_book, mutation: Mutations::CreateBook
    field :create_publisher, mutation: Mutations::CreatePublisher
    field :create_series, mutation: Mutations::CreateSeries
    field :create_user, mutation: Mutations::CreateUser
    field :edit_book, mutation: Mutations::EditBook
    field :login_user, mutation: Mutations::LoginUser
  end
end
