class AddUniqueConstraintToBookSeries < ActiveRecord::Migration
  def change
    add_index :books, [:issue_number, :series_id], unique: true
  end
end
