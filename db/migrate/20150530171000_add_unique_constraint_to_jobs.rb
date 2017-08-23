class AddUniqueConstraintToJobs < ActiveRecord::Migration[4.2]
  def change
    add_index :jobs, [:role, :book_id, :person_id], unique: true
  end
end
