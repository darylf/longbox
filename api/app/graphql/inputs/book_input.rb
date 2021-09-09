module Inputs
  class BookInput < Types::BaseInputObject
    argument :age_rating, String, required: false
    argument :alternate_title, String, required: false
    argument :credit_ids, [ID], required: false
    argument :format, String, required: false
    argument :issue, String, required: false
    argument :page_count, String, required: false
    argument :price, String, required: false
    argument :publication_date, String, required: false
    argument :series_id, ID, required: true
    argument :summary, String, required: false
    argument :credits, [Inputs::CreditInput, { null: true }], required: true
  end
end
