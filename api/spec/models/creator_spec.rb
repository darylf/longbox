require 'rails_helper'

RSpec.describe Creator, type: :model do
  subject(:creator) { build(:creator) }

  describe "Validations" do
    it "is valid with valid attributes" do
      expect(creator).to be_valid
    end

    it { should validate_presence_of(:first_name) }

    it { should validate_length_of(:first_name).is_at_most(120) }

    it { should validate_presence_of(:last_name) }

    it { should validate_length_of(:last_name).is_at_most(120) }
  end

  describe ".display_name" do
    it "combines first_name and last_name with a space" do
      creator.first_name = "Stan"
      creator.last_name = "Lee"
      expect(creator.display_name).to eq("Stan Lee")
    end

    it "returns nil when first_name and last_name are nil" do
      creator.first_name = nil
      creator.last_name = nil
      expect(creator.display_name).to be_nil
    end

    it "does not begin with a space when first_name is nil" do
      creator.first_name = nil
      expect(creator.display_name).not_to start_with " "
    end

    it "does not end with a space when last_name is nil" do
      creator.last_name = nil
      expect(creator.display_name).not_to end_with " "
    end
  end
end
