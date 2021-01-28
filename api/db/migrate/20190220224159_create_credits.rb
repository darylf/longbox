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

      t.timestamps
    end
  end
end
