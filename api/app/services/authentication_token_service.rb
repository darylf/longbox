class AuthenticationTokenService
  class JsonWebToken
    ALGORITHM_TYPE = "HS256".freeze
    SECRET_KEY = Rails.application.secrets.secret_key_base

    def self.encode(payload, expiration)
      payload[:exp] = expiration
      JWT.encode(payload, SECRET_KEY, ALGORITHM_TYPE)
    end

    def self.decode(token)
      JWT.decode(token, SECRET_KEY, ALGORITHM_TYPE)[0]
    rescue JWT::ExpiredSignature => e
      Rails.logger.info("Failed JWT decode: #{e}")
      "Expired Signature"
    end
  end

  def self.generate(user_id, expiration: 15.minutes.from_now.to_i)
    payload = { user_id: user_id }
    JsonWebToken.encode(payload, expiration)
  end

  def self.verify(token)
    result = JsonWebToken.decode(token)
    return nil if result == "Expired Signature"

    result["user_id"]
  end
end
