class SaveSeries
  include Interactor

  delegate :input, :user, to: :context

  def call
    series = Series.new(name: input[:name], publisher_id: input[:publisher_id])
    series.created_by = user
    series.updated_by = user

    context.series = series
    context.fail!(error_data: error_data) unless context.series.save
  end

  private

  def error_data
    { message: "Record Invalid", detail: context.series.errors.to_a }
  end
end
