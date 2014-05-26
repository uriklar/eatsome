class Ingredient < ActiveRecord::Base
  attr_accessible :calories, :carbohydrate, :fat, :name, :protein, :sodium, :sugar
end
