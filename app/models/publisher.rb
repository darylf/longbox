# Publisher model represents a publishing company that releases books
class Publisher < ApplicationRecord
  has_many :series

  validates :name, presence: true, uniqueness: true
end
