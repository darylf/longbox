class SaveCreator
  include Interactor

  delegate :input, :user, to: :context

  def call
    creator = Creator.new(first_name: input[:first_name], last_name: input[:last_name])
    creator.created_by = user
    creator.updated_by = user

    context.creator = creator
    context.fail!(error_data: error_data) unless context.creator.save
  end

  private

  def error_data
    { message: "Record Invalid", detail: context.creator.errors.to_a }
  end
end
