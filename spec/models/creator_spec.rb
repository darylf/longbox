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

  it 'should have a display_name' do
    expect(subject.display_name).to eq("#{creator.first_name} #{creator.last_name}")
  end
end
