class CreateBookFormats < ActiveRecord::Migration[6.0]
  def change
    create_table :book_formats do |t|
      t.string :name

      t.timestamps
    end

    add_reference :books, :book_format, foreign_key: true
  end
end
