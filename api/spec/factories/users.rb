FactoryBot.define do
  factory :user do
    sequence :email do |n|
      "person#{n}@example.com"
    end
    name { "John" }
    password_digest { "Password1" }
  end
end
