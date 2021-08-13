module Mutations
  class CreateUser < BaseMutation
    graphql_name 'Register'
    argument :input, Inputs::RegistrationInput, required: true

    type Types::AuthenticationResultType

    def resolve(input:)
      signup_user = RegisterUser.call(user_params: input.to_h)

      if signup_user.success?
        signup_user
      else
        execution_error(error_data: signup_user.error_data)
      end
    end
  end
end
