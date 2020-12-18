class Book < ApplicationRecord
  belongs_to :series, optional: true
  belongs_to :book_type, optional: true
  has_many :credits, dependent: :destroy
  has_many :creators, through: :credits

  delegate :name, to: :series, prefix: true

  def publisher_name
    series.publisher.name
  end

  def format
    book_type.name
  end
end
