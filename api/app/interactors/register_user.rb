
class RegisterUser
  include Interactor::Organizer
  include TransactionalInteractor

  delegate :user, to: :context

  organize CreateUser,
           CreateAccessToken,
           CreateRefreshToken
end
