require 'rails_helper'

RSpec.describe Book, type: :model do
  let(:book) { build(:book) }
  subject { book }

  it 'is invalid without a series' do
    subject.series = nil
    expect(subject).not_to be_valid
  end
end
