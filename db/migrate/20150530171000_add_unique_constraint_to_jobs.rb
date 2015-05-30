class AddUniqueConstraintToJobs < ActiveRecord::Migration
  def change
    add_index :jobs, [:role, :book_id, :person_id], unique: true
  end
end
