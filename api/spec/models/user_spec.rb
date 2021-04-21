require 'rails_helper'

RSpec.describe User, type: :model do
  subject(:user) { build(:user) }

  describe "Validations" do
    it "is valid with valid attributes" do
      expect(user).to be_valid
    end

    it { should validate_presence_of(:name) }

    it { should validate_presence_of(:email) }

    it ".email is unique" do
      user.save

      duplicate = build(:user, name: user.email)
      expect(duplicate).to be_invalid
    end
  end
end
