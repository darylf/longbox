module Mutations
  class CreateBook < Mutations::BaseMutation
    graphql_name 'CreateBook'

    field :book, Types::BookType, null: true
    field :errors, [Types::UserError], null: false

    argument :name, String, required: true

    def resolve(**args)
      book = Book.build(name: args[:name])

      if book.save
        {
          book: book,
          errors: [],
        }
      else
        # Convert Rails model errors into GraphQL-ready error hashes
        user_errors = book.errors.map do |attribute, message|
          # This is the GraphQL argument which corresponds to the validation error:
          path = ["attributes", attribute.to_s.camelize(:lower)]
          {
            path: path,
            message: message,
          }
        end
        {
          book: book,
          errors: user_errors,
        }
      end
    end
  end
end
