# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_12_18_193605) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "book_types", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "books", force: :cascade do |t|
    t.string "issue"
    t.bigint "series_id"
    t.integer "book_type"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "book_type_id"
    t.string "title"
    t.index ["book_type_id"], name: "index_books_on_book_type_id"
    t.index ["series_id"], name: "index_books_on_series_id"
  end

  create_table "creators", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "credit_roles", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "credits", force: :cascade do |t|
    t.bigint "book_id"
    t.bigint "creator_id"
    t.bigint "credit_role_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["book_id"], name: "index_credits_on_book_id"
    t.index ["creator_id"], name: "index_credits_on_creator_id"
    t.index ["credit_role_id"], name: "index_credits_on_credit_role_id"
  end

  create_table "publishers", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "series", force: :cascade do |t|
    t.string "name"
    t.bigint "publisher_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["publisher_id"], name: "index_series_on_publisher_id"
  end

  add_foreign_key "books", "book_types"
  add_foreign_key "books", "series"
  add_foreign_key "credits", "books"
  add_foreign_key "credits", "creators"
  add_foreign_key "credits", "credit_roles"
  add_foreign_key "series", "publishers"
end
