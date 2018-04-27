# Series model represents a collection of books that are related to each other
class Series < ApplicationRecord
  belongs_to :publisher
  has_many :books

  validates :name, presence: true, uniqueness: true

  delegate :name, to: :publisher, prefix: true
end
