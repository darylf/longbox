# create Series table
class CreateSeries < ActiveRecord::Migration[5.1]
  def change
    create_table :series do |t|
      t.string :name, null: false
      t.references :publisher, null: false
      t.timestamps

      t.foreign_key :publishers
      t.index :name
    end
  end
end
