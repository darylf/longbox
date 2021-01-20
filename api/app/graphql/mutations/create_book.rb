module Mutations
  class CreateBook < Mutations::BaseMutation
    graphql_name 'CreateBook'

    field :book, Types::BookType, null: true
    field :errors, [Types::UserError], null: false

    argument :attributes, Types::BookAttributesType, required: true

    def resolve(attributes:)
      book = Book.new(attributes.to_hash)
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
  end
end
