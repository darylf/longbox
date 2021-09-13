module Inputs
  class CreditInput < Types::BaseInputObject
    argument :id, ID, required: false
    argument :book_id, ID, required: true
    argument :creator_id, ID, required: true
    argument :featured, Boolean, required: false
    argument :position, Integer, required: false
    argument :role_id, ID, required: true
  end
end
