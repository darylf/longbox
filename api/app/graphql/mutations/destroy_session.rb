module Mutations
  class DestroySession < Mutations::BaseMutation
    class AuthenticationError < StandardError; end

    graphql_name 'Logout'

    def resolve(**args)
      Rails.logger.debug "Current user: #{context[:current_user]}"
      Rails.logger.debug "JWT Token: #{context[:jwt]}"

      context[:current_user] = nil
      context[:jwt] = nil

      {
      }
    rescue AuthenticationError
      GraphQL::ExecutionError.new('Invalid credentials', options: { status: :unprocessable_entity, code: 401 })
    end
  end
end
