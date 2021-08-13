module Mutations
  class CreateSession < Mutations::BaseMutation
    graphql_name 'Login'

    argument :input, Inputs::LogInInput, required: true

    type Types::AuthenticationResultType

    def resolve(input:)
      signin_user = LogInUser.call(input.to_h)

      if signin_user.success?
        signin_user
      else
        execution_error(error_data: signin_user.error_data)
      end
    end
  end
end
