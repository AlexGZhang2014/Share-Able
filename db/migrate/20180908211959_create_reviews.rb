class CreateReviews < ActiveRecord::Migration[5.0]
  def change
    create_table :reviews do |t|
      t.string :author
      t.string :content
      t.integer :rating
      t.integer :collection_id
      t.integer :user_id

      t.timestamps
    end
  end
end
