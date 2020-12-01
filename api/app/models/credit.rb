class Credit < ApplicationRecord
  belongs_to :book
  belongs_to :creator
  belongs_to :credit_role

  def role
    credit_role.name
  end
end
