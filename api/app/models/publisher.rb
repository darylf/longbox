class Publisher < ApplicationRecord
  belongs_to :created_by, class_name: "User"
  belongs_to :updated_by, class_name: "User"

  has_many :series, dependent: :restrict_with_error

  validates :name, presence: true, length: { maximum: 120 }, uniqueness: true

  delegate :count, to: :series, prefix: true

  def book_count
    series.sum(&:book_count)
  end
end
