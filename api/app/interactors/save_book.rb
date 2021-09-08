class SaveBook
  include Interactor

  delegate :id, :input, :user, to: :context

  def call
    book_format = BookFormat.find_by(name: input[:format])

    book = if id.nil?
             Book.create(
               age_rating: input[:age_rating],
               alternate_title: input[:alternate_title],
               book_format_id: book_format.id,
               issue: input[:issue],
               page_count: input[:page_count],
               price: input[:price],
               publication_date: input[:publication_date],
               series_id: input[:series_id],
               summary: input[:summary],
               created_by: user,
               updated_by: user
             )
           else
             b = Book.find(id)
             b.attributes = {
               id: id,
               age_rating: input[:age_rating],
               alternate_title: input[:alternate_title],
               book_format_id: book_format.id,
               issue: input[:issue],
               page_count: input[:page_count],
               price: input[:price],
               publication_date: input[:publication_date],
               series_id: input[:series_id],
               summary: input[:summary],
               updated_by: user
             }
             b
           end

    context.book = book
    context.fail!(error_data: error_data) unless context.book.save
  end

  private

  def error_data
    { message: "Record Invalid", detail: context.book.errors.to_a }
  end
end
