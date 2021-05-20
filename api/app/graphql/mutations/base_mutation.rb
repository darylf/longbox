module Mutations
  class BaseMutation < GraphQL::Schema::Mutation
    private

    def execution_error(message: nil, status: :unprocessable_entity, code: 422)
      GraphQL::ExecutionError.new(message, options: { status: status, code: code })
    end
  end
end
