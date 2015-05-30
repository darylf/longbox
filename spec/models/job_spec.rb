require 'rails_helper'

RSpec.describe Job, type: :model do

  let(:job) { FactoryGirl.build(:job) }
  subject { job }

  it 'is invalid without a book' do
    subject.book_id = nil
    expect(subject).not_to be_valid
  end

  it 'is invalid without a person' do
    subject.person_id = nil
    expect(subject).not_to be_valid
  end

  it 'is invalid without a role' do
    subject.role = nil
    expect(subject).not_to be_valid
  end


  it 'displays name/role in a friendly manner' do
    expect(subject.display_person).to eq("#{job.person.name} (#{job.role.humanize})")
  end

  it 'displays book name in a friendly manner' do
    expect(subject.display_book).to eq(job.book.name)
  end
end
