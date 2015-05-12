class Series < ActiveRecord::Base

  belongs_to :publisher
  has_many :books

  validates_presence_of :name
  validates_presence_of :publisher_id

end
