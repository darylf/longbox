module Mutations
  class CreateSeries < Mutations::BaseMutation
    include AuthenticatableGraphqlUser

    argument :input, Inputs::SeriesInput, required: true

    type Types::SeriesType

    def resolve(input:)
      execution_error(error_data: 'Unauthorized') unless current_user

      result = SaveSeries.call(input: input.to_h, user: current_user)

      if result.success?
        result.series
      else
        execution_error(error_data: result.error_data)
      end
    end
  end
end
