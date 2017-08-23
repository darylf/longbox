class Job < ActiveRecord::Base

  belongs_to :book, inverse_of: :jobs
  belongs_to :person, inverse_of: :jobs

  accepts_nested_attributes_for :person

  validates_presence_of :book_id
  validates_presence_of :person_id
  validates_presence_of :role

  validates_uniqueness_of :role, scope: [:person_id, :book_id]

  enum role: [:unknown, :writer, :artist]

  def display_person
    "#{person.name} (#{role.humanize})"
  end

  def display_book
    book.name
  end
end
