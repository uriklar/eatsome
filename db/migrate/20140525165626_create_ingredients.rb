class CreateIngredients < ActiveRecord::Migration
  def change
    create_table :ingredients do |t|
      t.string :name
      t.decimal :calories
      t.decimal :fat
      t.decimal :protein
      t.decimal :sodium
      t.decimal :sugar
      t.decimal :carbohydrate

      t.timestamps
    end
  end
end
