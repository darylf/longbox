# Publisher model represents a publishing company that releases books
class Publisher < ApplicationRecord
  has_many :series, dependent: :destroy

  validates :name, presence: true, uniqueness: true
end
