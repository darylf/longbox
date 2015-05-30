class Job < ActiveRecord::Base

  belongs_to :book, inverse_of: :jobs
  belongs_to :person, inverse_of: :jobs

  accepts_nested_attributes_for :person

  validates_presence_of :book_id
  validates_presence_of :person_id
  validates_presence_of :role

  enum role: [:unknown, :writer, :artist]

  def display_name
    "#{person.name} (#{role.humanize})"
  end
end
