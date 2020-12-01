require 'rails_helper'

RSpec.describe BookType, type: :model do
  subject(:book_type) { build(:book_type) }

  describe "Validations" do
    it "is valid with valid attributes" do
      expect(book_type).to be_valid
    end
  end
end
