FactoryBot.define do
  factory :blacklisted_token do
    jti { "MyString" }
    user { nil }
    exp { "2021-05-21 14:51:17" }
  end
end
