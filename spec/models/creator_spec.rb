require 'rails_helper'

RSpec.describe Creator, type: :model do
  let(:creator) { FactoryBot.build(:creator) }
  subject { creator }

  it 'is invalid without a first name' do
    subject.first_name = nil
    expect(subject).not_to be_valid
  end

  it 'is invalid without a first name' do
    subject.last_name = nil
    expect(subject).not_to be_valid
  end
end
