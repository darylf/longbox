FactoryBot.define do
  factory :book_format do
    name { "comic" }

    initialize_with { BookFormat.find_or_create_by(name: name) }
  end
end
