module Mutations
  class CreateSession < Mutations::BaseMutation
    class AuthenticationError < StandardError; end

    graphql_name 'Login'

    field :user, Types::UserType, null: true
    field :token, String, null: false

    argument :email, String, required: true
    argument :password, String, required: true

    def resolve(**args)
      user = User.find_by(email: args[:email])
      raise AuthenticationError unless user&.authenticate(args[:password])

      payload = { user_id: user.id }
      session = JWTSessions::Session.new(payload: payload)

      # jwt = AuthenticationTokenService.generate(user.id)
      context[:current_user] = user
      context[:jwt] = session

      Rails.logger.debug "Current user: #{context[:current_user]}"
      Rails.logger.debug "JWT Token: #{context[:jwt]}"

      {
        user: user,
        token: session
      }
    rescue AuthenticationError
      GraphQL::ExecutionError.new('Invalid credentials', options: { status: :unprocessable_entity, code: 401 })
    end
  end
end
