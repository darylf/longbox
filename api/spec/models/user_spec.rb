require 'rails_helper'

RSpec.describe User, type: :model do
  subject(:user) { build(:user) }

  describe "Validations" do
    it "is valid with valid attributes" do
      expect(user).to be_valid
    end

    describe ".username" do
      it { should validate_presence_of(:username) }
      it { should validate_length_of(:username).is_at_least(3) }
      it { should validate_length_of(:username).is_at_most(50) }
    end

    describe ".email" do
      it "is unique, regardless of case" do
        user.save
        duplicate = build(:user, email: user.email.upcase)
        expect(duplicate).to be_invalid
      end

      it { should validate_length_of(:email).is_at_least(4) }

      it { should validate_length_of(:email).is_at_most(254) }

      it "is expected to validate with an email format" do
        ["hello", "hello@", "@hello"].each do |invalid_email|
          user.email = invalid_email
          expect(user).to be_invalid
        end
      end
    end
  end
end
