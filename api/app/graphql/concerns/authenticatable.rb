module Authenticatable
  extend ActiveSupport::Concern

  def require_jwt
    token = request.headers["AUTHORIZATION"]
    head :forbidden unless valid_token(token)
  end

  private

  def valid_token(token)
    return false unless token

    token.gsub!('Bearer ', '')
    begin
      decoded_token = JWT.decode(token, Rails.application.secrets.secret_key_base, true)
      return true
    rescue JWT::DecodeError => e
      Rails.logger.warn "Error decoding the JWT: #{e}"
    end
    false
  end
end
