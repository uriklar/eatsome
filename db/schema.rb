# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20140601162231) do

  create_table "dish_ingredients", :force => true do |t|
    t.integer "dish_id"
    t.integer "ingredient_id"
    t.decimal "grams"
  end

  add_index "dish_ingredients", ["dish_id", "ingredient_id"], :name => "index_dish_ingredients_on_dish_id_and_ingredient_id"
  add_index "dish_ingredients", ["ingredient_id"], :name => "index_dish_ingredients_on_ingredient_id"

  create_table "dishes", :force => true do |t|
    t.string   "name"
    t.integer  "num_selected"
    t.datetime "created_at",   :null => false
    t.datetime "updated_at",   :null => false
  end

  create_table "ingredients", :force => true do |t|
    t.string   "name"
    t.decimal  "calories"
    t.decimal  "fat"
    t.decimal  "protein"
    t.decimal  "sodium"
    t.decimal  "sugar"
    t.decimal  "carbohydrate"
    t.datetime "created_at",   :null => false
    t.datetime "updated_at",   :null => false
    t.integer  "num_selected"
  end

end
