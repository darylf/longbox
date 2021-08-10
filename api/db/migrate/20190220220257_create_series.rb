class CreateSeries < ActiveRecord::Migration[5.2]
  def change
    create_table :series do |t|
      t.string :name, null: false
      t.references :publisher, foreign_key: true

      t.timestamps
    end
    add_index :series, [:publisher_id, :name], unique: true
  end
end
