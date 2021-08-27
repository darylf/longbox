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

ActiveRecord::Schema.define(version: 2021_08_25_180710) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "citext"
  enable_extension "plpgsql"

  create_table "book_formats", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["name"], name: "index_book_formats_on_name", unique: true
  end

  create_table "books", force: :cascade do |t|
    t.string "issue"
    t.bigint "series_id"
    t.integer "book_type"
    t.string "alternate_title"
    t.text "summary"
    t.string "page_count"
    t.string "price"
    t.string "publication_date"
    t.string "age_rating"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "book_format_id"
    t.bigint "created_by_id"
    t.bigint "updated_by_id"
    t.index ["book_format_id"], name: "index_books_on_book_format_id"
    t.index ["created_by_id"], name: "index_books_on_created_by_id"
    t.index ["series_id"], name: "index_books_on_series_id"
    t.index ["updated_by_id"], name: "index_books_on_updated_by_id"
  end

  create_table "creators", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "created_by_id"
    t.bigint "updated_by_id"
    t.index ["created_by_id"], name: "index_creators_on_created_by_id"
    t.index ["updated_by_id"], name: "index_creators_on_updated_by_id"
  end

  create_table "credit_roles", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_credit_roles_on_name", unique: true
  end

  create_table "credits", force: :cascade do |t|
    t.bigint "book_id"
    t.bigint "creator_id"
    t.bigint "credit_role_id"
    t.boolean "featured", default: false, null: false
    t.integer "position"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "created_by_id"
    t.bigint "updated_by_id"
    t.index ["book_id", "creator_id", "credit_role_id"], name: "index_credits_on_book_id_and_creator_id_and_credit_role_id", unique: true
    t.index ["book_id"], name: "index_credits_on_book_id"
    t.index ["created_by_id"], name: "index_credits_on_created_by_id"
    t.index ["creator_id"], name: "index_credits_on_creator_id"
    t.index ["credit_role_id"], name: "index_credits_on_credit_role_id"
    t.index ["updated_by_id"], name: "index_credits_on_updated_by_id"
  end

  create_table "publishers", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "created_by_id"
    t.bigint "updated_by_id"
    t.index ["created_by_id"], name: "index_publishers_on_created_by_id"
    t.index ["name"], name: "index_publishers_on_name", unique: true
    t.index ["updated_by_id"], name: "index_publishers_on_updated_by_id"
  end

  create_table "refresh_tokens", force: :cascade do |t|
    t.string "token", null: false
    t.bigint "user_id", null: false
    t.datetime "expires_at", null: false
    t.string "jti"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["jti"], name: "index_refresh_tokens_on_jti"
    t.index ["token"], name: "index_refresh_tokens_on_token"
    t.index ["user_id"], name: "index_refresh_tokens_on_user_id"
  end

  create_table "roles", force: :cascade do |t|
    t.string "name"
    t.string "resource_type"
    t.bigint "resource_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["name", "resource_type", "resource_id"], name: "index_roles_on_name_and_resource_type_and_resource_id"
    t.index ["resource_type", "resource_id"], name: "index_roles_on_resource"
  end

  create_table "series", force: :cascade do |t|
    t.string "name", null: false
    t.bigint "publisher_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "created_by_id"
    t.bigint "updated_by_id"
    t.index ["created_by_id"], name: "index_series_on_created_by_id"
    t.index ["publisher_id", "name"], name: "index_series_on_publisher_id_and_name", unique: true
    t.index ["publisher_id"], name: "index_series_on_publisher_id"
    t.index ["updated_by_id"], name: "index_series_on_updated_by_id"
  end

  create_table "users", force: :cascade do |t|
    t.citext "email", null: false
    t.string "password_digest", null: false
    t.citext "username", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

  create_table "users_roles", id: false, force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "role_id"
    t.index ["role_id"], name: "index_users_roles_on_role_id"
    t.index ["user_id", "role_id"], name: "index_users_roles_on_user_id_and_role_id"
    t.index ["user_id"], name: "index_users_roles_on_user_id"
  end

  add_foreign_key "books", "book_formats"
  add_foreign_key "books", "series"
  add_foreign_key "books", "users", column: "created_by_id"
  add_foreign_key "books", "users", column: "updated_by_id"
  add_foreign_key "creators", "users", column: "created_by_id"
  add_foreign_key "creators", "users", column: "updated_by_id"
  add_foreign_key "credits", "books"
  add_foreign_key "credits", "creators"
  add_foreign_key "credits", "credit_roles"
  add_foreign_key "credits", "users", column: "created_by_id"
  add_foreign_key "credits", "users", column: "updated_by_id"
  add_foreign_key "publishers", "users", column: "created_by_id"
  add_foreign_key "publishers", "users", column: "updated_by_id"
  add_foreign_key "refresh_tokens", "users"
  add_foreign_key "series", "publishers"
  add_foreign_key "series", "users", column: "created_by_id"
  add_foreign_key "series", "users", column: "updated_by_id"
end
