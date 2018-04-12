# Create default creators table
class CreateCreators < ActiveRecord::Migration[5.1]
  def change
    create_table :creators do |t|
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.timestamps
    end

    create_table :relations do |t|
      t.references :book, null: false
      t.references :creator, null: false
      t.integer :role, null: false, default: 0
      t.timestamps

      t.foreign_key :books
      t.foreign_key :creators
      t.index %i[book_id creator_id role], unique: true
    end
  end
end
