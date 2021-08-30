module Inputs
  class SeriesInput < Types::BaseInputObject
    argument :name, String, required: true
    argument :publisher_id, ID, required: true
  end
end
