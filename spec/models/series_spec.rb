require 'rails_helper'

RSpec.describe Series, type: :model do
  let(:series) { build(:series) }
  subject { series }

  it 'is invalid without a name' do
    subject.name = nil
    expect(subject).not_to be_valid
  end

  it 'is invalid without a publisher' do
    subject.publisher = nil
    expect(subject).not_to be_valid
  end

  it 'must have a unique name' do
    expect(subject).to be_valid
    create(:series, name: subject.name)
    expect(subject).not_to be_valid
  end
end
