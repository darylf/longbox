FactoryBot.define do
  factory :publisher do
    sequence :name do |n|
      "Publisher #{n}"
    end
    # created_by {association :user}
    # updated_by {association :user}
    # association :created_by, factory: :user
    # association :updated_by, factory: :user
    created_by factory: :user
    updated_by factory: :user
  end
end
