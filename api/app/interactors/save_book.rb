class SaveBook
  include Interactor

  delegate :input, :user, to: :context

  def call
    book = Book.create(
      age_rating: input[:age_rating],
      alternate_title: input[:alternate_title],
      book_format: input[:format],
      issue: input[:issue],
      page_count: input[:page_count],
      price: input[:price],
      publication_date: pub_date,
      series_id: input[:series_id],
      summary: input[:summary],
      created_by: user,
      updated_by: user
    )

    context.book = book
    context.fail!(error_data: error_data) unless context.book.save
  end

  private

  def error_data
    { message: "Record Invalid", detail: context.book.errors.to_a }
  end
end
