class Publisher < ApplicationRecord
  has_many :series, dependent: :restrict_with_error
end
