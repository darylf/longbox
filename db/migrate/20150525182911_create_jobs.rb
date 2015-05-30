class CreateJobs < ActiveRecord::Migration
  def change
    create_table :jobs do |t|
      t.references :book
      t.references :person
      t.column :role, :integer, default: 0, null: false
      t.timestamps null: false
    end
  end
end
