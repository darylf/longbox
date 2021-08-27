FactoryBot.define do
  factory :series do
    name { "Fantastic Four" }
    publisher
    created_by factory: :user
    updated_by factory: :user
  end
end
