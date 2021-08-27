FactoryBot.define do
  factory :creator do
    first_name { "Stan" }
    last_name { "Lee" }
    created_by factory: :user
    updated_by factory: :user
  end
end
