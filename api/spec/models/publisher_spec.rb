require 'rails_helper'

RSpec.describe Publisher, type: :model do
  subject(:publisher) { build(:publisher) }

  describe "Validations" do
    it "is valid with valid attributes" do
      expect(publisher).to be_valid
    end

    it { should validate_presence_of(:name) }

    it { should validate_length_of(:name).is_at_most(120) }

    it ".name is unique" do
      publisher.save

      duplicate = build(:publisher, name: publisher.name)
      expect(duplicate).to be_invalid
    end
  end
end
