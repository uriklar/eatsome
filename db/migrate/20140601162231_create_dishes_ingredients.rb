class CreateDishesIngredients < ActiveRecord::Migration
  def up
  	create_table :dish_ingredients do |t|
      t.references :dish
      t.references :ingredient
      t.decimal :grams
    end
    add_index :dish_ingredients, [:dish_id, :ingredient_id]
    add_index :dish_ingredients, :ingredient_id
  end

  def down
  	drop_table :dish_ingredients
  end
end
