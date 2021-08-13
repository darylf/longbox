module Inputs
  class RegistrationInput < Types::BaseInputObject
    argument :email, String, required: true
    argument :password, String, required: true

    argument :name, String, required: true
  end
end
