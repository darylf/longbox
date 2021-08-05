class UserRole < ApplicationRecord
  has_many :assignments,
           dependent: :destroy

  has_many :users,
           through: :assignments

  def name_sym
    name.underscore.gsub(' ', '_').to_sym
  end
end
