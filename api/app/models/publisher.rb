class Publisher < ApplicationRecord
  has_many :series, dependent: :restrict_with_error

  validates :name, presence: true, length: { maximum: 120 }, uniqueness: true

  delegate :count, to: :series, prefix: true

  def book_count
    series.sum(&:book_count)
  end
end
