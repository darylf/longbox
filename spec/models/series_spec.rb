require 'rails_helper'

RSpec.describe Series, type: :model do

  let(:series) { FactoryGirl.build(:series) }
  subject { series }

  it 'is invalid without a name' do
    subject.name = nil
    expect(subject).not_to be_valid
  end

  it 'responds to publisher_name' do
    expect(subject.publisher_name).to eq("#{subject.publisher.name}")
  end

end