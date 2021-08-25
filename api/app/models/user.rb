class User < ApplicationRecord
  has_secure_password
  # after_create :set_default_role

  has_many :assignments,
           dependent: :destroy

  has_many :refresh_tokens,
           dependent: :destroy

  has_many :user_roles,
           through: :assignments

  validates :email,
            format: { with: URI::MailTo::EMAIL_REGEXP },
            length: { minimum: 4, maximum: 254 },
            presence: true,
            uniqueness: { case_sensitive: false }

  validates :username,
            format: { with: /[A-Za-z0-9\._-]/ },
            length: { minimum: 3, maximum: 50 },
            presence: true,
            uniqueness: { case_sensitive: false }

  def gravatar_url(size = 64)
    size = 64 if size < 1 || size > 2048
    md5 = Digest::MD5.hexdigest(email.downcase.strip)
    "//www.gravatar.com/avatar/#{md5}?s=#{size}&d=robohash"
  end

  def roles
    user_roles.map(&:name)
  end

  def role?(role)
    user_roles.any? { |r| r.name_sym == role }
  end
end
