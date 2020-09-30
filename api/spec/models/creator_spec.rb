require 'rails_helper'

RSpec.describe Creator, type: :model do
  subject(:creator) { build(:creator) }

  describe "Validations" do
    it "is valid with valid attributes" do
      expect(creator).to be_valid
    end

    it { should validate_presence_of(:first_name) }

    it { should validate_length_of(:first_name).is_at_most(120) }

    it { should validate_presence_of(:last_name) }

    it { should validate_length_of(:last_name).is_at_most(120) }
  end
end
