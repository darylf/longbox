class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    enable_extension("citext")

    create_table :users do |t|
      t.citext :email, null: false
      t.string :password_digest, null: false
      t.citext :username, null: false

      t.timestamps
    end

    add_index :users, :email, unique: true
    add_index :users, :username, unique: true

    add_reference :books, :created_by, foreign_key: { to_table: :users }
    add_reference :books, :updated_by, foreign_key: { to_table: :users }

    add_reference :creators, :created_by, foreign_key: { to_table: :users }
    add_reference :creators, :updated_by, foreign_key: { to_table: :users }

    add_reference :credits, :created_by, foreign_key: { to_table: :users }
    add_reference :credits, :updated_by, foreign_key: { to_table: :users }

    add_reference :publishers, :created_by, foreign_key: { to_table: :users }
    add_reference :publishers, :updated_by, foreign_key: { to_table: :users }

    add_reference :series, :created_by, foreign_key: { to_table: :users }
    add_reference :series, :updated_by, foreign_key: { to_table: :users }
  end
end
