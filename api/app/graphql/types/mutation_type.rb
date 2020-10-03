module Types
  class MutationType < Types::BaseObject
    field :create_publisher, mutation: Mutations::CreatePublisher
  end
end
