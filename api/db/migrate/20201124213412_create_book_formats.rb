class CreateBookFormats < ActiveRecord::Migration[6.0]
  def change
    create_table :book_formats do |t|
      t.string :name, null: false

      t.timestamps
    end

    add_index :book_formats, :name, unique: true
    add_reference :books, :book_format, foreign_key: true
  end
end
