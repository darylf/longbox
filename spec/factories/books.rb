FactoryBot.define do
  factory :book do
    name 'Awesome Book!'
    issue '1'
    book_type :issue
    series
  end
end
