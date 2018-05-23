# Series model represents a collection of books that are related to each other
class Series < ApplicationRecord
  belongs_to :publisher
  has_many :books, inverse_of: :series, dependent: :destroy
  accepts_nested_attributes_for :books, reject_if: :all_blank, allow_destroy: true

  validates :name, presence: true, uniqueness: true

  delegate :name, to: :publisher, prefix: true
end
