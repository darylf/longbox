FactoryGirl.define do

  factory :publisher do
    name 'Acme Publishing'
  end

  factory :series do
    sequence(:name) { |n| "Series V#{n}" }
    disambiguation 'Awesome Series Vol 1'
    publisher
  end

  factory :book do
    sequence(:issue_number) { |n| n.to_s }
    series
  end
end