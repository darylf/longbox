class Series < ApplicationRecord
  belongs_to :created_by, class_name: "User"
  belongs_to :publisher
  belongs_to :updated_by, class_name: "User"

  has_many :books, dependent: :restrict_with_error

  delegate :name, to: :publisher, prefix: true, allow_nil: true

  validates :name, uniqueness: { scope: :publisher_id }

  def book_count
    books.count
  end
end
