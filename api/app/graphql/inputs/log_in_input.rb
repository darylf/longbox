module Inputs
  class LogInInput < Types::BaseInputObject
    argument :email, String, required: true
    argument :password, String, required: true
  end
end
