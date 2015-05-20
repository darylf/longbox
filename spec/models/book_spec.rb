require 'rails_helper'
require 'pp'

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

  it 'must have a unique series_id and issue_number' do
    book1 = FactoryGirl.create(:book)
    book2 = FactoryGirl.build(:book, 
      :issue_number => book1.issue_number, 
      :series_id => book1.series_id)
    
    expect(book2).not_to be_valid
    expect(book2.errors[:issue_number].count).to eq(1)
  end
end
