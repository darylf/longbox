class Creator < ApplicationRecord
  has_many :books, through: :book_creators

  validates :first_name, presence: true, length: { maximum: 120 }
  validates :last_name, presence: true, length: { maximum: 120 }
end
