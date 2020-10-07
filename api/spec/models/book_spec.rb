require 'rails_helper'

RSpec.describe Book, type: :model do
  subject(:book) { build(:book) }

  describe "Validations" do
    it "is valid with valid attributes" do
      expect(book).to be_valid
    end
  end
end
