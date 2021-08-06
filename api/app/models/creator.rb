class Creator < ApplicationRecord
  has_many :credits
  has_many :books, through: :credits
  has_many :series, through: :books

  validates :first_name, presence: true, length: { maximum: 120 }
  validates :last_name, presence: true, length: { maximum: 120 }
end
