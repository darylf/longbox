class SavePublisher
  include Interactor

  delegate :input, :user, to: :context

  def call
    publisher = Publisher.new(name: input[:name])
    publisher.created_by = user
    publisher.updated_by = user

    context.publisher = publisher
    context.fail!(error_data: error_data) unless context.publisher.save
  end

  private

  def error_data
    { message: "Record Invalid", detail: context.publisher.errors.to_a }
  end
end
