# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_02_20_224159) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "book_creators", force: :cascade do |t|
    t.bigint "book_id"
    t.bigint "creator_id"
    t.integer "role"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["book_id"], name: "index_book_creators_on_book_id"
    t.index ["creator_id"], name: "index_book_creators_on_creator_id"
  end

  create_table "books", force: :cascade do |t|
    t.string "issue"
    t.bigint "series_id"
    t.integer "book_type"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["series_id"], name: "index_books_on_series_id"
  end

  create_table "creators", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
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

  add_foreign_key "book_creators", "books"
  add_foreign_key "book_creators", "creators"
  add_foreign_key "books", "series"
  add_foreign_key "series", "publishers"
end
