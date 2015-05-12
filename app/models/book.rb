class Book < ActiveRecord::Base

  belongs_to :series

  validates_presence_of :issue_number
  validates_presence_of :series_id

end
