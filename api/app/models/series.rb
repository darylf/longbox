class Series < ApplicationRecord
  belongs_to :publisher
  has_many :books, dependent: :restrict_with_error
  delegate :name, to: :publisher, prefix: true, allow_nil: true

  def book_count
    books.count
  end
end
