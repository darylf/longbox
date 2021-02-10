FactoryBot.define do
  factory :publisher do
    sequence :name do |n|
      "Publisher #{n}"
    end
  end
end
