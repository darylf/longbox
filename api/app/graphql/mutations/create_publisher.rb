module Mutations
  class CreatePublisher < Mutations::BaseMutation
    field :publisher, Types::PublisherType, null: true
    field :errors, [Types::UserError], null: false, description: 'In case of failure, there will be errors in this list'

    argument :attributes, Inputs::PublisherAttributesType, required: true

    def resolve(attributes:)
      publisher = Publisher.create(name: attributes[:name])

      if publisher.save
        {
          publisher: publisher,
          errors: []
        }
      else
        user_errors = publisher.errors.map do |error|
          path = ["attributes", error.attribute.to_s.camelize(:lower)]
          {
            path: path,
            message: error.full_message
          }
        end
        {
          publisher: nil,
          errors: user_errors
        }
      end
    end
  end
end
