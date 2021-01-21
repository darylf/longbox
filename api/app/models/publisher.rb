class Publisher < ApplicationRecord
  has_many :series, dependent: :restrict_with_error

  validates :name, presence: true, length: { maximum: 120 }, uniqueness: true
end
