# Create Publishers table
class CreatePublishers < ActiveRecord::Migration[5.1]
  def change
    create_table :publishers do |t|
      t.string :name, null: false
      t.timestamps

      t.index :name
    end
  end
end
