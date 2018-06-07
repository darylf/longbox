require 'rails_helper'

RSpec.describe User, type: :model do
  let(:user) { FactoryBot.build(:user) }
  subject { user }

  it 'is invalid without a name' do
    subject.name = nil
    expect(subject).not_to be_valid
  end

  it 'is invalid when name is blank' do
    subject.name = '     '
    expect(subject).not_to be_valid
  end

  it 'is invalid without an email' do
    subject.email = nil
    expect(subject).not_to be_valid
  end

  it 'email should be unique' do
    duplicate_user = subject.dup
    duplicate_user.email = subject.email.upcase
    subject.save
    expect(duplicate_user).to_not be_valid
  end

  it 'email should accept valid addresses' do
    valid_addresses = %w[user@example.com USER@foo.COM A_US-ER@foo.bar.org
                         first.last@foo.jp alice+bob@baz.cn]

    valid_addresses.each do |valid_address|
      subject.email = valid_address
      expect(subject).to be_valid, "#{valid_address.inspect} should be valid"
    end
  end

  it 'email should NOT accept invalid addresses' do
    invalid_addresses = %w[user@example,com user_at_foo.org user.name@example.
                           foo@bar_baz.com foo@bar+baz.com]

    invalid_addresses.each do |invalid_address|
      subject.email = invalid_address
      expect(subject).to_not be_valid, "#{invalid_address.inspect} should not be valid"
    end
  end

  it 'email addresses should be saved as lower-case' do
    mixed_case_email = 'Foo@ExAMPle.CoM'
    subject.email = mixed_case_email
    subject.save
    expect(subject.reload.email).to eq(mixed_case_email.downcase)
  end

  it 'should require a password' do
    subject.password = '  '
    expect(subject).not_to be_valid
  end

  it 'password must be at least 8 characters' do
    subject.password = '1234567'
    expect(subject).not_to be_valid
  end
end
