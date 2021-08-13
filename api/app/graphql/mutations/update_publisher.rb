module Mutations
  class UpdatePublisher < Mutations::BaseMutation
    field :publisher, Types::PublisherType, null: true
    field :errors, [Types::UserError], null: false

    argument :id, ID, required: true
    argument :attributes, Inputs::PublisherAttributesType, required: true

    def resolve(id:, attributes:)
      publisher = Publisher.find(id)
      if publisher.update(attributes.to_h)
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
