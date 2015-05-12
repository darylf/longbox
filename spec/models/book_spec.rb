require 'rails_helper'

RSpec.describe Book, type: :model do

  let(:book) { FactoryGirl.build(:book) }
  subject { book }

  it 'is invalid without an issue number' do
    subject.issue_number = nil
    expect(subject).not_to be_valid
  end
end
