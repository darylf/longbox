# Joins a Book to a Creator, and defines the creator's role
class Relation < ApplicationRecord
  belongs_to :book
  belongs_to :creator

  enum role: { unknown: 0, writer: 1, artist: 2 }

  validates :role, uniqueness: { scope: %i[book creator] }
end
