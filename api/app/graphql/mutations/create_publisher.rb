module Mutations
  class CreatePublisher < Mutations::BaseMutation
    include AuthenticatableGraphqlUser

    argument :input, Inputs::PublisherInput, required: true

    type Types::PublisherType

    def resolve(input:)
      publisher = SavePublisher.call(input.to_h)

      if publisher.success?
        publisher
      else
        execution_error(error_data: publisher.error_data)
      end
    end
  end
end
