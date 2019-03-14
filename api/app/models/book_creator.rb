class BookCreator < ApplicationRecord
  belongs_to :book
  belongs_to :creator
end
