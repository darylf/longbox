# Create books model
class CreateBooks < ActiveRecord::Migration[5.1]
  def change
    create_table :books do |t|
      t.string :name
      t.string :issue
      t.integer :book_type, default: 0
      t.references :series, null: false
      t.timestamps

      t.foreign_key :series
    end
  end
end
