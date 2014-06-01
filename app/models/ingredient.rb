class Ingredient < ActiveRecord::Base
  attr_accessible :calories, :carbohydrate, :fat, :name, :protein, :sodium, :sugar, :num_selected

  has_many :dish_ingredients
  has_many :dishes, :through => :dish_ingredients
end
