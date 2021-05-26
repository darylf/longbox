module Mutations
  class CreateUser < Mutations::BaseMutation
    graphql_name 'Register'

    field :user, Types::UserType, null: true

    argument :email, String, required: true
    argument :password, String, required: true
    argument :name, String, required: true

    def resolve(**args)
      Rails.logger.debug "*******************REGISTER USER*******************"
      Rails.logger.debug "Email: #{args[:email]}"
      Rails.logger.debug "Name: #{args[:name]}"
      Rails.logger.debug "*******************REGISTER USER*******************"

      user = User.new(email: args[:email], password: args[:password], name: args[:name])

      Rails.logger.debug "*******************USER ERRORS?*******************"
      Rails.logger.debug "Valid: #{user.valid?}"
      Rails.logger.debug "Errors: #{user.errors.full_messages}"
      Rails.logger.debug "*******************USER ERRORS*******************"

      return error_messages(full_messages: user.errors.full_messages) if user.invalid?

      user.save!

      Rails.logger.debug "*******************USER SAVED!*******************"

      payload  = { user_id: user.id }
      session = JWTSessions::Session.new(payload: payload, refresh_by_access_allowed: true)
      tokens = session.login

      Rails.logger.debug "*******************SESSION DEATILS*******************"
      Rails.logger.debug "User id: #{user.id}"
      Rails.logger.debug "CSRF: #{tokens[:access]}"
      Rails.logger.debug "*******************USER ERRORS*******************"


      response.set_cookie(JWTSessions.access_cookie,
                          value: tokens[:access],
                          httponly: true,
                          secure: Rails.env.production?)

      user
    end

    private

    def error_messages(msgs)
      errors = []
      msgs.each do |msg|
        errors << GraphQL::ExecutionError.new(msg)
      end
      errors
    end
  end
end
