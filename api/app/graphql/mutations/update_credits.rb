module Mutations
  class UpdateCredits < Mutations::BaseMutation
    include AuthenticatableGraphqlUser

    argument :book_id, ID, required: true
    argument :input, [Inputs::CreditInput], required: true

    type [Types::CreditType]

    def resolve(book_id:, input:)
      execution_error(error_data: 'Unauthorized') unless current_user

      result = SaveCredits.call(book_id: book_id, input: input.to_h, user: current_user)

      if result.success?
        result.book
      else
        execution_error(error_data: result.error_data)
      end
    end
  end
end
