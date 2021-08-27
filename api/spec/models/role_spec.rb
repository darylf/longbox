require 'rails_helper'

RSpec.describe Role, type: :model do
  subject(:role) { build(:role) }

  describe "Validations" do
    it "is valid with valid attributes" do
      expect(role).to be_valid
    end
  end
end
