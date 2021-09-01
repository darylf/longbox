module Mutations
  class CreateCreator < Mutations::BaseMutation
    include AuthenticatableGraphqlUser

    argument :input, Inputs::CreatorInput, required: true

    type Types::CreatorType

    def resolve(input:)
      execution_error(error_data: 'Unauthorized') unless current_user
      result = SaveCreator.call(input: input.to_h, user: current_user)

      if result.success?
        result.creator
      else
        execution_error(error_data: result.creator.error_data)
      end
    end
  end
end
