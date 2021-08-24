require 'rails_helper'

RSpec.describe RefreshToken, type: :model do
  subject(:refresh_token) { build(:refresh_token, user: user) }

  let(:user) { create(:user) }

  describe "Validations" do
    it "is valid with valid attributes" do
      expect(refresh_token).to be_valid
    end
  end
end
