class CreateBooks < ActiveRecord::Migration[4.2]
  def change
    create_table :books do |t|
      t.string :issue_number, null: false
      t.date :cover_date
      t.references :series, index: true
      t.timestamps null: false
    end
  end
end
