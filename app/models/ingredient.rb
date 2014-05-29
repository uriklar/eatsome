class Ingredient < ActiveRecord::Base
  attr_accessible :calories, :carbohydrate, :fat, :name, :protein, :sodium, :sugar, :num_selected
end
