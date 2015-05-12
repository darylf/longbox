class CreateSeries < ActiveRecord::Migration
  def change
    create_table :series do |t|
      t.string :name, null: false
      t.references :series, index: true
      t.timestamps null: false
    end

    change_column_null :publishers, :name, false
  end
end
