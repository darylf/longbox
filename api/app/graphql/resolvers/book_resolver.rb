module Resolvers
  class BookResolver < Resolvers::BaseResolver
    type Types::BookType, null: false
    argument :id, ID, required: false

    def resolve(**args)
      Book.find(args[:id])
    end
  end
end
