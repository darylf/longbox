require 'rails_helper'

RSpec.describe Book, type: :model do
  let(:book) { build(:book) }
  subject { book }

  it 'is invalid without a series' do
    subject.series = nil
    expect(subject).not_to be_valid
  end

  it 'should respond to series_name' do
    expect(subject.series_name).to eq(book.series.name)
  end

  it 'should respond to display_name with the name field when applicable' do
    subject.name = 'Ahoy!'
    expect(subject.display_name).to eq('Ahoy!')
  end

  it 'should respond to display_name' do
    subject.name = nil
    expect(subject.display_name).to eq("#{book.series.name} ##{book.issue}")
  end
end
