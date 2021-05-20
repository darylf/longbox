FactoryBot.define do
  factory :user do
    email { "username@example.com" }
    name { "John" }
    password_digest { "Password1" }
  end
end
