module Mutations
  class CreateBook < Mutations::BaseMutation
    include AuthenticatableGraphqlUser

    argument :input, Inputs::BookInput, required: true

    type Types::BookType

    def resolve(input:)
      execution_error(error_data: 'Unauthorized') unless current_user

      result = SaveBook.call(input: input.to_h, user: current_user)

      if result.success?
        result.book
      else
        execution_error(error_data: result.error_data)
      end
    end
  end
end
