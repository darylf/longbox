module Types
  class Mutation < Types::BaseObject
    field :create_publisher, mutation: Mutations::CreatePublisher
  end
end
