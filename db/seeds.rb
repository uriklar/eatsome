# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
require 'faker'

300.times do
	Ingredient.create({
		name: Faker::Lorem.word,
		calories: rand(1..599),
		carbohydrate: rand(1..599),
		fat: rand(1..599),
		protein: rand(1..599),
		sodium: rand(1..599),
		sugar: rand(1..599),
		num_selected: rand(1..999)
	})
end

130.times do
	Dish.create({
		name: Faker::Lorem.word,
		num_selected: rand(1..999)
	})
end

300.times do
	DishIngredient.create({
		dish_id: rand(1..130),
		ingredient_id: rand(1..300),
		grams: rand(1..500)
	}, :without_protection => true)
end
