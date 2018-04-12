# Publisher model represents a publishing company that releases books
class Publisher < ApplicationRecord
  validates :name, presence: true, uniqueness: true
end
