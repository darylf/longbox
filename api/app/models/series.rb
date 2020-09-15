class Series < ApplicationRecord
  belongs_to :publisher
  has_many :books, dependent: :restrict_with_error
end
