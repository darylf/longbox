module Mutations
  class UpdateSession < BaseMutation
    include AuthenticatableGraphqlUser

    type Types::AuthenticationResultType

    def resolve
      update_token = UpdateTokenPair.call(user: current_user, token: token, token_payload: token_payload)

      if update_token.success?
        update_token
      else
        execution_error(error_data: update_token.error_data)
      end
    end
  end
end
