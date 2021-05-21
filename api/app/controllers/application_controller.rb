class ApplicationController < ActionController::Base
  include ActionController::Cookies
  include ActionController::RequestForgeryProtection

  protect_from_forgery with: :null_session

  before_action :authenticate
  after_action :set_csrf_cookie

  private

  def authenticate
    current_user, decoded_token = Jwt::Authenticator.call(
      headers: request.headers,
      access_token: params[:access_token] # authenticate from header OR params
    )

    @current_user = current_user
    @decoded_token = decoded_token
  end

  protected

  def set_csrf_cookie
    cookies["X_CSRF_Token"] = form_authenticity_token
  end
end
