class CreateAssignments < ActiveRecord::Migration[6.1]
  def change
    create_table :assignments do |t|
      t.references :user, null: false, foreign_key: true
      t.references :user_role, null: false, foreign_key: true

      t.timestamps
    end
    add_index :assignments, [:user_id, :user_role_id], unique: true
  end
end
