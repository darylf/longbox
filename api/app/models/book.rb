class Book < ApplicationRecord
  has_many :book_creators, dependent: :destroy
  has_many :creators, through: :book_creators
end
