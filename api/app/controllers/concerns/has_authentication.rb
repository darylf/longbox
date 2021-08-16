module HasAuthentication
  private

  def current_user
    puts "TOKEN?? #{token.to_json}"
    puts "PAYLOAD?? #{payload.to_json}"
    return unless token && payload
    puts "ACTIVE REFRESH TOKEN??"
    return unless active_refresh_token?

    puts "FIND USER??"
    puts "#{payload.to_json}"
    User.find_by(id: payload["sub"])
  end

  def token
    @token ||= request.headers["Authorization"].to_s.match(/Bearer (.*)/).to_a.last
  end

  def payload
    @payload ||= JWT.decode(token, Rails.configuration.authentication_token, true, algorithm: "HS256").first
  rescue JWT::DecodeError
    nil
  end

  def jti
    payload["jti"]
  end

  def active_refresh_token?
    puts ">>>>>>>>>>>JTI??? #{jti.to_json}"
    RefreshToken.active.exists?(jti: jti)
  end
end
