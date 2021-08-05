require 'rails_helper'

RSpec.describe Assignment, type: :model do
  subject(:assignment) { build(:assignment, user_role_id: create(:user_role).id) }

  describe "Validations" do
    it "is valid with valid attributes" do
      expect(assignment).to be_valid
    end
  end
end
