class User < ApplicationRecord
  has_secure_password
  has_many :refresh_tokens, dependent: :delete_all
  has_many :whitelisted_tokens, dependent: :delete_all
  has_many :blacklisted_tokens, dependent: :delete_all

  validates :name,
            presence: true,
            length: { minimum: 3, maximum: 50 }
  validates :email,
            presence: true,
            uniqueness: { case_sensitive: false },
            length: { minimum: 4, maximum: 254 },
            format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i }
end
