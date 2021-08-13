class Publisher < ApplicationRecord
  has_many :series, dependent: :restrict_with_error
  belongs_to :created_by, class_name: "User", foreign_key: :created_by_id
  belongs_to :updated_by, class_name: "User", foreign_key: :updated_by_id

  validates :name, presence: true, length: { maximum: 120 }, uniqueness: true

  delegate :count, to: :series, prefix: true

  def book_count
    series.sum(&:book_count)
  end
end
