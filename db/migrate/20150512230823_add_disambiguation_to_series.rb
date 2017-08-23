class AddDisambiguationToSeries < ActiveRecord::Migration[4.2]
  def change
    add_column :series, :disambiguation, :string
  end
end
