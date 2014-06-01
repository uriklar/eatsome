class DishIngredient < ActiveRecord::Base
	attr_accessible :grams

  belongs_to :dish
  belongs_to :ingredient
end