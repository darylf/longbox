require 'rails_helper'

module Resolvers
  RSpec.describe BooksResolver, type: :request do
    describe 'sortable' do
      before(:each) do
        [
          'Alpha Flight',
          'Bravo For Adventure',
          'Charlie Action Hero'
        ].each do |series_name|
          create(:book, series: create(:series, name: series_name), issue: 1)
        end
      end

      it 'returns books in a specified order ASC' do
        post '/graphql', params: { query: sort_query(sort_by: { field: "series_name", direction: "ASC" }) }

        json = JSON.parse(response.body)
        data = json['data']['books']['nodes']

        expect(data[0]['displayName']).to start_with('Alpha Flight')
        expect(data[1]['displayName']).to start_with('Bravo For Adventure')
        expect(data[2]['displayName']).to start_with('Charlie Action Hero')
      end

      it 'returns books in a specified order DESC' do
        post '/graphql', params: { query: sort_query(sort_by: { field: "series_name", direction: "DESC" }) }

        json = JSON.parse(response.body)
        data = json['data']['books']['nodes']

        expect(data[0]['displayName']).to start_with('Charlie Action Hero')
        expect(data[1]['displayName']).to start_with('Bravo For Adventure')
        expect(data[2]['displayName']).to start_with('Alpha Flight')
      end
      def sort_query(sort_by:)
        <<~GQL
          query RankedBookList
          {
            books(sortBy: { field: "#{sort_by[:field]}", direction: #{sort_by[:direction]}}) {
              nodes {
                id
                displayName
                publicationDate
                publisherName
              }
            }
          }
        GQL
      end
    end

    describe 'truncatable' do
      before(:each) do
        [
          'Alpha Flight',
          'Bravo For Adventure',
          'Charlie Action Hero'
        ].each do |series_name|
          create(:book, series: create(:series, name: series_name), issue: 1)
        end
      end

      it 'returns a truncated list of books when limit is provided' do
        query = <<~GQL
          query RankedBookList
          {
            books(limit: 2) {
              nodes {
                id
                displayName
                publicationDate
                publisherName
              }
            }
          }
        GQL

        post '/graphql', params: { query: query }

        json = JSON.parse(response.body)
        data = json['data']['books']['nodes']

        expect(data.size).to eq(2)
        expect(data[0]['displayName']).to start_with('Alpha Flight')
      end

      it 'returns original list of books if limit is not provided' do
        query = <<~GQL
          query RankedBookList
          {
            books {
              nodes {
                id
                displayName
                publicationDate
                publisherName
              }
            }
          }
        GQL

        post '/graphql', params: { query: query }

        json = JSON.parse(response.body)
        data = json['data']['books']['nodes']

        expect(data.size).to eq(3)
      end
    end
  end
end
