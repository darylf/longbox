require 'rails_helper'

RSpec.describe Relation, type: :model do
  let(:relation) { build(:relation) }
  subject { relation }

  it 'is invalid without a book' do
    subject.book = nil
    expect(subject).not_to be_valid
  end

  it 'is invalid without a creator' do
    subject.creator = nil
    expect(subject).not_to be_valid
  end

  it 'must be unique' do
    create(:relation, book: subject.book, creator: subject.creator, role: subject.role)
    expect(subject).not_to be_valid
  end
end
