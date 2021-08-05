require 'rails_helper'

RSpec.describe UserRole, type: :model do
  subject(:role) { build(:user_role)}

  describe "Validations" do
    it "is valid with valid attributes" do
      expect(role).to be_valid
    end
  end

  describe '.name_sym' do
    it "should convert to lowercase" do
      role.name = "ADMIN"
      expect(role.name_sym).to eq(:admin)
    end

    it "should convert spaces to underscores" do
      role.name = "test user"
      expect(role.name_sym).to eq(:test_user)
    end
  end
end
