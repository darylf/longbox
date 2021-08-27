class Credit < ApplicationRecord
  belongs_to :book
  belongs_to :created_by, class_name: "User"
  belongs_to :creator
  belongs_to :credit_role
  belongs_to :updated_by, class_name: "User"

  def role
    credit_role.name
  end
end
