class AddDetailsToBook < ActiveRecord::Migration[6.1]
  def change
    add_column :books, :summary, :text
    add_column :books, :page_count, :string
    add_column :books, :price, string
    add_column :books, :publication_date, :string
    add_column :books, :age_rating, :string
  end
end
