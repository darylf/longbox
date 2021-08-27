class Creator < ApplicationRecord
  belongs_to :created_by, class_name: "User"
  belongs_to :updated_by, class_name: "User"

  has_many :credits, dependent: :destroy
  has_many :books, through: :credits
  has_many :series, through: :books

  validates :first_name, presence: true, length: { maximum: 120 }
  validates :last_name, presence: true, length: { maximum: 120 }
end
