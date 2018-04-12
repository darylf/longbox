# Series model represents a collection of books that are related to each other
class Series < ApplicationRecord
  belongs_to :publisher

  validates :name, presence: true, uniqueness: true
end
