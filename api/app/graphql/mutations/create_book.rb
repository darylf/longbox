module Mutations
  class CreateBook < Mutations::BaseMutation
    graphql_name 'CreateBook'

    field :book, Types::BookType, null: true
    field :errors, [Types::UserError], null: false

    argument :attributes, Inputs::BookInput, required: true

    def resolve(attributes:)
      book = book_from_attributes(attributes.to_hash)

      if book.save
        {
          book: book,
          errors: []
        }
      else
        # Convert Rails model errors into GraphQL-ready error hashes
        user_errors = book.errors.map do |error|
          # This is the GraphQL argument which corresponds to the validation error:
          # path = ["attributes", error.attribute.to_s.camelize(:lower)]
          {
            # path: path,
            message: error.message
          }
        end
        {
          book: book,
          errors: user_errors
        }
      end
    end

    def book_from_attributes(attributes:)
      book = Book.new
      book.issue = attributes.issue
      # book.series_id
      # book.book_type
      # book.book_format_id
      book.alternate_title = attributes.alternate_title
      book.summary = attributes.summary
      book.page_count = attributes.page_count
      book.price = attributes.price
      book.publication_date = attributes.publication_date
      book.age_rating = attributes.age_rating
      book
    end
  end
end
