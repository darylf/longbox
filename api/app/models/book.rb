class Book < ApplicationRecord
  has_many :credits, dependent: :destroy
  has_many :creators, through: :credits
end
