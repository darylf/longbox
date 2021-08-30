module Mutations
  class CreateSeries < Mutations::BaseMutation
    include AuthenticatableGraphqlUser

    argument :input, Inputs::SeriesInput, required: true

    type Types::SeriesType

    def resolve(input:)
      execution_error(error_data: 'Unauthorized') unless current_user

      series = SaveSeries.call(input: input.to_h, user: current_user)

      if series.success?
        series
      else
        execution_error(error_data: series.error_data)
      end
    end
  end
end
