require 'rails_helper'

module Mutations
  RSpec.describe CreateBook, type: :request do
    describe '.resolve' do
      it 'creates a book' do
        expect do
          post '/graphql', params: { query: query }
        end.to change(Book, :count).by(1)
      end

      it 'returns a book' do
        post '/graphql', params: { query: query }
        json = JSON.parse(response.body)
        data = json['data']['createBook']

        expect(data['errors']).to be_empty

        expect(data['book']).to include(
          'id' => be_present,
          'alternateTitle' => 'Tripwire'
        )
      end
    end

    private

    def query
      <<~GQL
        mutation {
          createBook(
            attributes: {alternateTitle: "Tripwire"}
          ) {
            book {
              id
              alternateTitle
            }
            errors {
              message
            }
          }
        }
      GQL
    end
  end
end
