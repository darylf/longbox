module Mutations
  class UpdateBook < Mutations::BaseMutation
    include AuthenticatableGraphqlUser

    argument :id, ID, required: true
    argument :input, Inputs::BookInput, required: true

    type Types::BookType

    def resolve(id:, input:)
      execution_error(error_data: 'Unauthorized') unless current_user

      result = SaveBook.call(id: id, input: input.to_h, user: current_user)

      if result.success?
        result.book
      else
        execution_error(error_data: result.error_data)
      end
    end
  end
end
