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
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150530171000) do

  create_table "books", force: :cascade do |t|
    t.string "issue_number", null: false
    t.date "cover_date"
    t.integer "series_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["issue_number", "series_id"], name: "index_books_on_issue_number_and_series_id", unique: true
    t.index ["series_id"], name: "index_books_on_series_id"
  end

  create_table "jobs", force: :cascade do |t|
    t.integer "book_id"
    t.integer "person_id"
    t.integer "role", default: 0, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["role", "book_id", "person_id"], name: "index_jobs_on_role_and_book_id_and_person_id", unique: true
  end

  create_table "people", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "publishers", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "series", force: :cascade do |t|
    t.string "name", null: false
    t.integer "publisher_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "disambiguation"
    t.index ["publisher_id"], name: "index_series_on_publisher_id"
  end

end
