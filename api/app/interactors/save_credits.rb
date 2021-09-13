class SaveBook
  include Interactor

  delegate :input, :user, to: :context

  def call
    credits = []
    input.each do |credit_input|
      credit = if credit_input.id.nil?
                 Credit.create(
                   book_id: credit_input[:book_id],
                   credit_role_id: credit_input[:role_id],
                   creator_id: credit_input[:creator_id],
                   featured: credit_input[:featured],
                   position: credit_input[:position],
                   created_by: user,
                   updated_by: user
                 )
               else
                 c = Credit.find(credit_input[:id])
                 c.attributes = {
                   id: credit_input[:id],
                   book_id: credit_input[:book_id],
                   credit_role_id: credit_input[:role_id],
                   creator_id: credit_input[:creator_id],
                   featured: credit_input[:featured],
                   position: credit_input[:position],
                   updated_by: user
                 }
                 c.save
                 c
               end

      credits << credit
    end

    context.credits = credits
    context.fail!(error_data: error_data) unless context.credits.any?(&:errors)
  end

  private

  def error_data
    { message: "Record Invalid", detail: context.credits.errors.to_a }
  end
end
