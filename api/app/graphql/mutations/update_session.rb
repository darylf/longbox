module Mutations
  class UpdateSession < Mutations::BaseMutation
    class AuthenticationError < StandardError; end

    field :csrf, String, null: false

    graphql_name 'Refresh'

    def resolve(**_args)
      authorize_refresh_by_access_request!

      session = JWTSessions::Session.new(payload: claimless_payload, refresh_by_access_allowed: true)

      tokens = session.refresh_by_access_payload do
        raise JWTSessions::Errors::Unauthorized, 'Malicious activity detected'
      end

      response.set_cookie(JWTSessions.access_cookie,
                          value: tokens[:access],
                          httponly: true,
                          secure: Rails.env.production?)

      { csrf: tokens[:csrf] }
    rescue AuthenticationError
      GraphQL::ExecutionError.new('Invalid credentials', options: { status: :unprocessable_entity, code: 401 })
    end
  end
end
