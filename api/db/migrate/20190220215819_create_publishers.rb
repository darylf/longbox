class CreatePublishers < ActiveRecord::Migration[5.2]
  def change
    create_table :publishers do |t|
      t.string :name, null: false

      t.timestamps
    end
    add_index :publishers, :name, unique: true
  end
end
