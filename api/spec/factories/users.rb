FactoryBot.define do
  factory :user do
    name { "Testy McTesterson" }
    email { "tester@example.com" }
    password_digest { "Password1" }
  end
end
