class LogInUser
  include Interactor::Organizer

  delegate :user, to: :context

  organize AuthenticateUser,
           CreateAccessToken,
           CreateRefreshToken
end
