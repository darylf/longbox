require 'rails_helper'

RSpec.describe Publisher, type: :model do

  let(:publisher) { FactoryGirl.build(:publisher) }
  subject { publisher }

  it 'is invalid without a name' do
    subject.name = nil
    expect(subject).not_to be_valid
  end

end