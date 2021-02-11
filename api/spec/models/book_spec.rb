require 'rails_helper'

RSpec.describe Book, type: :model do
  subject(:book) { build(:book) }

  describe "Validations" do
    it "is valid with valid attributes" do
      expect(book).to be_valid
    end
  end

  describe ".display_name" do
    it "contains series name and issue number" do
      expect(book.display_name).to eq("#{book.series.name} ##{book.issue}")
    end
  end
end
