module Inputs
  class RegistrationInput < Types::BaseInputObject
    argument :email, String, required: true
    argument :password, String, required: true

    argument :username, String, required: true
  end
end
