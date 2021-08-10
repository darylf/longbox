require 'rails_helper'

RSpec.describe Series, type: :model do
  subject(:series) { build(:series) }

  describe "Validations" do
    it "is valid with valid attributes" do
      expect(series).to be_valid
    end

    describe ".name" do
      it "is unique with publisher_id" do
        dupe = create(:series)

        series.name = dupe.name
        series.publisher = dupe.publisher

        expect(series).to be_invalid
      end
    end
  end
end
