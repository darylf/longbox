module Mutations
  class CreateSession < Mutations::BaseMutation
    class AuthenticationError < StandardError; end

    graphql_name 'Login'

    field :user, Types::UserType, null: true
    field :csrf, String, null: false
    field :jwt, String, null: false
    field :expires_at, String, null: false
    field :refresh, String, null: false
    field :refresh_expires_at, String, null: false

    argument :email, String, required: true
    argument :password, String, required: true

    def resolve(**args)
      user = User.find_by(email: args[:email])
      raise AuthenticationError unless user&.authenticate(args[:password])

      payload = { user_id: user.id }
      session = JWTSessions::Session.new(payload: payload, refresh_by_access_allowed: true)
      tokens = session.login

      context[:current_user] = user
      context[:session_tokens] = tokens

      {
        user: user,
        csrf: tokens[:csrf],
        jwt: tokens[:access],
        expires_at: tokens[:access_expires_at],
        refresh: tokens[:refresh],
        refresh_expires_at: tokens[:refresh_expires_at]
      }
    rescue AuthenticationError
      GraphQL::ExecutionError.new('Invalid credentials', options: { status: :unprocessable_entity, code: 401 })
    end
  end
end
