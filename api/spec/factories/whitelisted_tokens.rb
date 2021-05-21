FactoryBot.define do
  factory :whitelisted_token do
    jti { "MyString" }
    user { nil }
    exp { "2021-05-21 14:51:33" }
  end
end
