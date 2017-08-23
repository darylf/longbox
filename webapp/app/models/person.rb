class Person < ActiveRecord::Base

  has_many :jobs, inverse_of: :person
  has_many :books, through: :jobs

  validates_presence_of :name

end
