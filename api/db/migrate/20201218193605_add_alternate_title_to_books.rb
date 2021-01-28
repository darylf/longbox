class AddAlternateTitleToBooks < ActiveRecord::Migration[6.1]
  def change
    add_column :books, :alternate_title, :string
  end
end
