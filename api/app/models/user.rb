class User < ApplicationRecord
  rolify
  has_secure_password

  after_create :assign_default_role

  has_many :refresh_tokens,
           dependent: :destroy

  validates :email,
            format: { with: URI::MailTo::EMAIL_REGEXP },
            length: { minimum: 4, maximum: 254 },
            presence: true,
            uniqueness: { case_sensitive: false }

  validates :password,
            length: { minimum: 6, maximum: 254 },
            presence: true

  validates :username,
            format: { with: /\A[A-Za-z][A-Za-z0-9_-]+/ },
            length: { minimum: 2, maximum: 15 },
            presence: true,
            uniqueness: { case_sensitive: false }

  def assign_default_role
    add_role(:user) if roles.blank?
  end

  def gravatar_url(size = 64)
    size = 64 if size < 1 || size > 2048
    md5 = Digest::MD5.hexdigest(email.downcase.strip)
    "//www.gravatar.com/avatar/#{md5}?s=#{size}&d=robohash"
  end
end
