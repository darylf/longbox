FactoryBot.define do
  factory :publisher do
    sequence(:name) { |n| "ACME Publishing #{n}" }
  end
end
