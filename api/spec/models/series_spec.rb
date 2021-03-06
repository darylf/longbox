require 'rails_helper'

RSpec.describe Series, type: :model do
  subject(:series) { build(:series) }

  describe "Validations" do
    it "is valid with valid attributes" do
      expect(series).to be_valid
    end
  end
end
