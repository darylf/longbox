class Book < ApplicationRecord
  belongs_to :series
  belongs_to :book_type
  has_many :credits, dependent: :destroy
  has_many :creators, through: :credits

  def series_name
    series.name
  end

  def publisher_name
    series.publisher.name
  end

  def format
    book_type.name
  end
end
