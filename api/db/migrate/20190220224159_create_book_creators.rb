class CreateBookCreators < ActiveRecord::Migration[5.2]
  def change
    create_table :book_creators do |t|
      t.references :book, foreign_key: true
      t.references :creator, foreign_key: true
      t.integer :role

      t.timestamps
    end
  end
end
