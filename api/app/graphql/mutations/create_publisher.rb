module Mutations
  class CreatePublisher < Mutations::BaseMutation
    graphql_name 'CreatePublisher'

    field :publisher, Types::Publisher, null: true
    field :result, Boolean, null: true

    argument :name, String, required: true

    def resolve(**args)
      publisher = Publisher.create(name: args[:name])
      {
        publisher: publisher,
        result: publisher.errors.blank?
      }
    end
  end
end

