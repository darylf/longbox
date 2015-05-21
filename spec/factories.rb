FactoryGirl.define do

  factory :publisher do
    name 'Acme Publishing'
  end

  factory :series do
    name 'Awesome Series'
    publisher
  end

  factory :book do
    sequence(:issue_number) { |n| n.to_s }
    series
  end
end