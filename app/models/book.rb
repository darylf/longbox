# Book model represents a single released issue or trade
class Book < ApplicationRecord
  belongs_to :series
  has_many :relations, dependent: :destroy
  has_many :creators, through: :relations

  enum book_type: { unknown: 0, issue: 1, trade: 2 }
  accepts_nested_attributes_for :relations

  delegate :name, to: :series, prefix: true
  delegate :publisher_name, to: :series

  def display_name
    name.presence || "#{series.name} ##{issue}"
  end
end
