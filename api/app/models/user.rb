class User < ApplicationRecord
  has_secure_password

  validates :name,
            presence: true,
            length: { minimum: 3, maximum: 50 }

  validates :email,
            presence: true,
            uniqueness: { case_sensitive: false },
            length: { minimum: 4, maximum: 254 },
            format: { with: /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i }

  def gravatar_url(size = 64)
    size = 64 if size < 1 || size > 2048
    md5 = Digest::MD5.hexdigest(email.downcase.strip)
    "//www.gravatar.com/avatar/#{md5}?s=#{size}&d=robohash"
  end
end
