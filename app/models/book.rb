class Book < ActiveRecord::Base

  belongs_to :series

  validates_presence_of :issue_number
  validates_presence_of :series_id
  validates_uniqueness_of :issue_number, scope: :series_id

  def name
    "#{series.name} ##{issue_number}"
  end

  def publisher_name
    "#{series.publisher.name}"
  end
end
