module Resolvers
  class BooksResolver < Resolvers::BaseResolver
    type [Types::BookType], null: false

    def resolve
      Book.all
    end
  end
end
