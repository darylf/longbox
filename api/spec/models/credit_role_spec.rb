require 'rails_helper'

RSpec.describe CreditRole, type: :model do
  subject(:role) { build(:credit_role) }

  describe "Validations" do
    it "is valid with valid attributes" do
      expect(role).to be_valid
    end

    it { should validate_presence_of(:name) }
  end
end
