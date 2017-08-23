class AddUniqueConstraintToBookSeries < ActiveRecord::Migration[4.2]
  def change
    add_index :books, [:issue_number, :series_id], unique: true
  end
end
