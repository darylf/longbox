require 'rails_helper'

RSpec.describe Book, type: :model do

  let(:book) { FactoryGirl.build(:book) }
  subject { book }

  it 'is invalid without an issue number' do
    subject.issue_number = nil
    expect(subject).not_to be_valid
  end

  it 'has a friendly name' do
    expect(subject.name).to eq("#{subject.series.name} ##{subject.issue_number}")
  end

  it 'responds to publisher_name' do
    expect(subject.publisher_name).to eq("#{subject.series.publisher.name}")
  end
end
