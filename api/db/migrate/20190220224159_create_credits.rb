class CreateCredits < ActiveRecord::Migration[5.2]
  def change
    create_table :credit_roles do |t|
      t.string :name

      t.timestamps
    end

    create_table :credits do |t|
      t.references :book, foreign_key: true
      t.references :creator, foreign_key: true
      t.references :credit_role, foreign_key: true
      t.boolean :featured, null: false, default: false
      t.integer :position

      t.timestamps
    end

    add_index :credit_roles, :name, unique: true
    add_index :credits, [:book_id, :creator_id, :credit_role_id], unique: true
  end
end
