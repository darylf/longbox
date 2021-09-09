module Inputs
  class CreditInput < Types::BaseInputObject
    argument :creator_id, ID, required: true
    argument :featured, Boolean, required: false
    argument :position, Integer, required: false
    argument :role_id, ID, required: true
  end
end
