module Mutations
  class DestroySession < Mutations::BaseMutation
    class AuthenticationError < StandardError; end

    field :exit, String, null: true

    graphql_name 'Logout'

    def resolve(**_args)
      session = JWTSessions::Session.new
      session.flush_by_access_payload

      context[:current_user] = nil
      context[:jwt] = nil

      {
      }
    end
  end
end
