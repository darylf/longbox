FactoryBot.define do
  factory :credit do
    book
    creator
    credit_role
    created_by factory: :user
    updated_by factory: :user
  end
end
