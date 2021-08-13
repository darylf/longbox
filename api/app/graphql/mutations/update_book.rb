module Mutations
  class UpdateBook < Mutations::BaseMutation
    field :book, Types::BookType, null: true
    field :errors, [Types::UserError], null: false

    argument :id, ID, required: true
    argument :attributes, Inputs::BookAttributesType, required: true

    def resolve(**args)
      book = Book.find(args[:id])
      book.alternate_title = args[:attributes][:alternate_title]
      book.issue = args[:attributes][:issue]
      book.series_id = args[:attributes][:series_id]
      if book.save
        {
          book: book,
          errors: []
        }
      else
        # Convert Rails model errors into GraphQL-ready error hashes
        user_errors = book.errors.map do |error|
          # This is the GraphQL argument which corresponds to the validation error:
          path = ["attributes", error.attribute.to_s.camelize(:lower)]
          {
            path: path,
            message: error.message
          }
        end
        {
          book: book,
          errors: user_errors
        }
      end
    end
  end
end
