class Publisher < ActiveRecord::Base

  has_many :series

  validates_presence_of :name

end
