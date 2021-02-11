class Book < ApplicationRecord
  belongs_to :series, optional: true
  belongs_to :book_format, optional: true
  has_many :credits, dependent: :destroy
  has_many :creators, through: :credits
  has_one :publisher, through: :series

  delegate :name, to: :series, prefix: true, allow_nil: true
  delegate :name, to: :publisher, prefix: true, allow_nil: true
  delegate :name, to: :book_format, prefix: true, allow_nil: true

  alias_attribute :format, :book_format_name

  def display_name
    "#{series.name} ##{issue}"
  end
end
