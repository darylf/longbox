# Book model represents a single released issue or trade
class Book < ApplicationRecord
  belongs_to :series
  has_many :relations, dependent: :destroy
  has_many :creators, through: :relations

  enum book_type: { unknown: 0, issue: 1, trade: 2 }
end
