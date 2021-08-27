FactoryBot.define do
  factory :book do
    issue { 1 }
    alternate_title { "Test Title" }
    series
    book_format
    created_by factory: :user
    updated_by factory: :user
  end
end
