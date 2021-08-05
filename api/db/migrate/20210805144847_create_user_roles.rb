class CreateUserRoles < ActiveRecord::Migration[6.1]
  def change
    create_table :user_roles do |t|
      t.string :name, null: false

      t.timestamps
    end
    add_index :user_roles, :name, unique: true
  end
end
