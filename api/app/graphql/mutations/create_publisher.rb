module Mutations
  class CreatePublisher < Mutations::BaseMutation
    graphql_name 'CreatePublisher'

    field :publisher, Types::PublisherType, null: true
    field :errors, [Types::UserError], null: false

    argument :name, String, required: true

    def resolve(**args)
      publisher = Publisher.create(name: args[:name])

      if publisher.save
        {
          publisher: publisher,
          errors: []
        }
      else
        # Convert Rails model errors into GraphQL-ready error hashes
        user_errors = publisher.errors.map do |error|
          # This is the GraphQL argument which corresponds to the validation error:
          # path = ["attributes", error.attribute.to_s.camelize(:lower)]
          {
            # path: path,
            message: error.message
          }
        end
        {
          publisher: publisher,
          errors: user_errors
        }
      end

    end
  end
end
