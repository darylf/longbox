FactoryBot.define do
  factory :user do
    sequence :email do |n|
      "person#{n}@example.com"
    end
    sequence :username do |n|
      "peter_parker_#{n}"
    end
    password_digest { "Password1" }
  end
end
