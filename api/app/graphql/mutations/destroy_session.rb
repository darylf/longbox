module Mutations
  class DestroySession < BaseMutation
    include AuthenticatableGraphqlUser
    graphql_name 'Logout'

    argument :input, Inputs::LogOutInput, required: true

    type Types::MessageType

    def resolve(input:)
      LogOutUser.call(token: token, user: current_user, everywhere: input.everywhere)

      {
        message: "User signed out successfully"
      }
    end
  end
end
