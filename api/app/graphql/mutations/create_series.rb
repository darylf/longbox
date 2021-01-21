module Mutations
  class CreateSeries < Mutations::BaseMutation
    graphql_name 'CreateSeries'

    field :series, Types::SeriesType, null: true
    field :errors, [Types::UserError], null: false

    argument :name, String, required: true
    argument :publisher_id, ID, required: true

    def resolve(**args)
      series = Series.new do |s|
        s.publisher_id = args[:publisher_id]
        s.name = args[:name]
      end

      if series.save
        {
          series: series,
          errors: []
        }
      else
        series.id = 0

        # Convert Rails model errors into GraphQL-ready error hashes
        user_errors = series.errors.map do |attribute, message|
          # This is the GraphQL argument which corresponds to the validation error:
          path = ["attributes", attribute.to_s.camelize(:lower)]
          {
            path: path,
            message: message
          }
        end

        {
          series: series,
          errors: user_errors
        }
      end
    end
  end
end
