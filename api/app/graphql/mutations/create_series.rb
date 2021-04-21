module Mutations
  class CreateSeries < Mutations::BaseMutation
    graphql_name 'CreateSeries'

    argument :name, String, required: true
    argument :publisher_id, ID, required: true

    type Types::SeriesType

    def resolve(**args)
      Series.create!(
        publisher_id: args[:publisher_id],
        name: args[:name]
      )
    rescue ActiveRecord::RecordInvalid => e
      e.record.errors.map do |error|
        GraphQL::ExecutionError.new(error.full_message)
      end
    end
  end
end
