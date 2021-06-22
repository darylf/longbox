module Mutations
  class DestroySession < Mutations::BaseMutation
    class AuthenticationError < StandardError; end

    field :exit, String, null: true

    graphql_name 'Logout'

    def resolve(**_args)
      session = JWTSessions::Session.new(payload: payload)
      session.flush_by_access_payload

      context[:current_user] = nil
      context[:jwt] = nil

      {
      }
    rescue AuthenticationError
      GraphQL::ExecutionError.new('Invalid credentials', options: { status: :unprocessable_entity, code: 401 })
    end
  end
end
