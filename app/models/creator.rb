# Creator model represents an author or writer of a books
class Creator < ApplicationRecord
  has_many :relations, dependent: :destroy
  has_many :books, through: :relations

  validates :first_name, presence: true
  validates :last_name, presence: true
end
