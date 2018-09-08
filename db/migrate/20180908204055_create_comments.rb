class CreateComments < ActiveRecord::Migration[5.0]
  def change
    create_table :comments do |t|
      t.string :author
      t.string :content
      t.integer :post_id
      t.integer :user_id

      t.timestamps
    end
  end
end
