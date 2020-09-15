class Creator < ApplicationRecord
  has_many :books, through: :book_creators
end
