class CreateBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :books do |t|
      t.string :issue
      t.references :series, foreign_key: true
      t.integer :book_type

      t.timestamps
    end
  end
end
