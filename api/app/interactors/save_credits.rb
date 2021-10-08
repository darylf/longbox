class SaveBook
  include Interactor

  delegate :book_id, :input, :user, to: :context

  def call
    book = Book.find(book_id)

    input.each do |credit_input|
      if credit_input.id.nil?
        book.credits.build(
          credit_role_id: credit_input[:role_id],
          creator_id: credit_input[:creator_id],
          featured: credit_input[:featured],
          position: credit_input[:position],
          created_by: user,
          updated_by: user
        )
      else
        book.credits.find(credit_input.id).update(
          id: credit_input[:id],
          credit_role_id: credit_input[:role_id],
          creator_id: credit_input[:creator_id],
          featured: credit_input[:featured],
          position: credit_input[:position],
          updated_by: user
        )
      end
    end

    context.book = book
    context.fail!(error_data: error_data) unless book.save
  end

  private

  def error_data
    { message: "Record Invalid", detail: context.book.errors.to_a }
  end
end
