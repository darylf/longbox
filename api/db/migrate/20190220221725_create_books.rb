class CreateBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :books do |t|
      t.string :issue
      t.references :series, foreign_key: true
      t.integer :book_type
      t.string :alternate_title
      t.text :summary
      t.string :page_count
      t.string :price
      t.string :publication_date
      t.string :age_rating

      t.timestamps
    end
  end
end
