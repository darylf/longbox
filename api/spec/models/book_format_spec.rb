require 'rails_helper'

RSpec.describe BookFormat, type: :model do
  subject(:book_format) { build(:book_format) }

  describe "Validations" do
    it "is valid with valid attributes" do
      expect(book_format).to be_valid
    end
  end
end
