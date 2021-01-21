FactoryBot.define do
  factory :book do
    issue { 1 }
    alternate_title { "Test Title" }
    series
    book_format
  end
end
