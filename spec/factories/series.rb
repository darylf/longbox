FactoryBot.define do
  factory :series do
    sequence(:name) { |n| "Awesome Ongoing #{n}" }
    publisher
  end
end
