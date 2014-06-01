class Dish < ActiveRecord::Base
  attr_accessible :name, :num_selected

  has_many :dish_ingredients
  has_many :ingredients, :through => :dish_ingredients
end
