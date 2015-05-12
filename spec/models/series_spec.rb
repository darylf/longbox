require 'rails_helper'

RSpec.describe Series, type: :model do

  let(:series) { FactoryGirl.build(:series) }
  subject { series }

  it 'is invalid without a name' do
    subject.name = nil
    expect(subject).not_to be_valid
  end

end