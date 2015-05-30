FactoryGirl.define do

  factory :book do
    sequence(:issue_number) { |n| n.to_s }
    series
  end

  factory :job do
    person
    book
    role 0
  end

  factory :person do
    name 'Stan Lee'
  end

  factory :publisher do
    name 'Acme Publishing'
  end

  factory :series do
    sequence(:name) { |n| "Series V#{n}" }
    disambiguation 'Awesome Series Vol 1'
    publisher
  end

end