class AddIndexToPublisher < ActiveRecord::Migration[6.1]
  def change
    add_index :publishers, :name, unique: true
  end
end
