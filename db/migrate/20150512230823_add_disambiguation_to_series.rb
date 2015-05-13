class AddDisambiguationToSeries < ActiveRecord::Migration
  def change
    add_column :series, :disambiguation, :string
  end
end
