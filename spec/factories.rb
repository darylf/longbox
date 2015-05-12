FactoryGirl.define do

  factory :publisher do
    name 'Acme Publishing'
  end

  factory :series do
    name 'Awesome Series'
    publisher
  end

  factory :book do
    issue_number '1'
    series
  end
end