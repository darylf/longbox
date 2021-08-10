class Series < ApplicationRecord
  belongs_to :publisher
  has_many :books, dependent: :restrict_with_error
  delegate :name, to: :publisher, prefix: true, allow_nil: true

  validates :name, uniqueness: { scope: :publisher_id }

  def book_count
    books.count
  end
end
