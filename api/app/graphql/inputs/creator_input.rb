module Inputs
  class CreatorInput < Types::BaseInputObject
    argument :first_name, String, required: true
    argument :last_name, String, required: true
  end
end
