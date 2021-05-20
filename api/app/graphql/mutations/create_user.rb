module Mutations
  class CreateUser < Mutations::BaseMutation
    graphql_name 'Register'

    field :user, Types::UserType, null: true

    argument :email, String, required: true
    argument :password, String, required: true
    argument :name, String, required: true

    def resolve(**args)
      user = User.new(email: args[:email], password: args[:password], name: args[:name])
      return error_messages(full_messages: user.errors.full_messages) if user.invalid?

      user.save!

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
