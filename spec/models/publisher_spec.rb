require 'rails_helper'

RSpec.describe Publisher, type: :model do
  let(:publisher) { FactoryBot.build(:publisher) }
  subject { publisher }

  it 'is invalid without a name' do
    subject.name = nil
    expect(subject).not_to be_valid
  end

  it 'must have a unique name' do
    expect(subject).to be_valid
    FactoryBot.create(:publisher, name: subject.name)
    expect(subject).not_to be_valid
  end
end
