module Mutations
  class UpdateSeries < Mutations::BaseMutation
    field :series, Types::SeriesType, null: true
    field :errors, [Types::UserError], null: false

    argument :id, ID, required: true
    argument :attributes, Inputs::SeriesAttributesType, required: true

    def resolve(id:, attributes:)
      series = Series.find(id)
      if series.update(attributes.to_h)
        {
          series: series,
          errors: []
        }
      else
        user_errors = series.errors.map do |error|
          path = ["attributes", error.attribute.to_s.camelize(:lower)]
          {
            path: path,
            message: error.full_message
          }
        end
        {
          series: nil,
          errors: user_errors
        }
      end
    end
  end
end
