FactoryBot.define do
  factory :publisher do
    sequence :name do |n|
      "Publisher #{n}"
    end
    created_by factory: :user
    updated_by factory: :user
  end
end
