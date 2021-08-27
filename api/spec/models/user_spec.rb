require 'rails_helper'

RSpec.describe User, type: :model do
  subject { build(:user) }

  describe "Validations" do
    it "is valid with valid attributes" do
      expect(subject).to be_valid
    end

    describe ".email" do
      it { should validate_length_of(:email).is_at_least(4) }
      it { should validate_length_of(:email).is_at_most(254) }
      it { should validate_uniqueness_of(:email).case_insensitive }
      it do
        should_not allow_values("hello", "hello@", "@hello").for(:email)
      end
    end

    describe ".password" do
      it { should have_secure_password }
      it { should validate_length_of(:password).is_at_least(6) }
      it { should validate_length_of(:password).is_at_most(254) }
    end

    describe ".username" do
      it { should validate_presence_of(:username) }
      it { should validate_length_of(:username).is_at_least(2) }
      it { should validate_length_of(:username).is_at_most(15) }
      it { should validate_uniqueness_of(:username).case_insensitive }
      it do
        should_not allow_values("1username", ".username", "_username", "-username").for(:username)
      end
    end
  end
end
