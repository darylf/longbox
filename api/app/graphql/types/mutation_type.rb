module Types
  class MutationType < Types::BaseObject
    field :create_book, mutation: Mutations::CreateBook
    field :create_creator, mutation: Mutations::CreateCreator
    field :create_publisher, mutation: Mutations::CreatePublisher
    field :create_series, mutation: Mutations::CreateSeries
    field :create_user, mutation: Mutations::CreateUser
    field :login, mutation: Mutations::CreateSession
    field :logout, mutation: Mutations::DestroySession
    field :refresh_session, mutation: Mutations::UpdateSession
    field :register, mutation: Mutations::CreateUser
    field :update_book, mutation: Mutations::UpdateBook
    field :update_publisher, mutation: Mutations::UpdatePublisher
    field :update_series, mutation: Mutations::UpdateSeries
  end
end
