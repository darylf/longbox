require 'rails_helper'

RSpec.describe Credit, type: :model do
  subject(:credit) { build(:credit) }

  describe "Validations" do
    it "is valid with valid attributes" do
      expect(credit).to be_valid
    end
  end
end
