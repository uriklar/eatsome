class AddNumSelectedToIngredient < ActiveRecord::Migration
  def change
    add_column :ingredients, :num_selected, :integer
  end
end
