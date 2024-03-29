class CreateRefreshTokens < ActiveRecord::Migration[6.1]
  def change
    create_table :refresh_tokens do |t|
      t.string :token, index: true,  null: false
      t.references :user, foreign_key: true, null: false
      t.datetime :expires_at, null: false
      t.string :jti, index: true

      t.timestamps
    end
  end
end
