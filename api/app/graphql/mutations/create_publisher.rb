module Mutations
  class CreatePublisher < Mutations::BaseMutation
    include AuthenticatableGraphqlUser

    argument :input, Inputs::PublisherInput, required: true

    type Types::PublisherType

    def resolve(input:)
      execution_error(error_data: 'Unauthorized') unless current_user
      result = SavePublisher.call(input: input.to_h, user: current_user)

      if result.success?
        result.publisher
      else
        execution_error(error_data: result.publisher.error_data)
      end
    end
  end
end
