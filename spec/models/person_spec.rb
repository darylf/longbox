require 'rails_helper'

RSpec.describe Person, type: :model do

  let(:person) { FactoryGirl.build(:person) }
  subject { person }

  it 'is invalid without a name' do
    subject.name = nil
    expect(subject).not_to be_valid
  end

end
