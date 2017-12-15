class CreateFriends < ActiveRecord::Migration[5.1]
  def change
    create_table :friends do |t|
      t.string :name
      t.integer :age
      t.text :bio
      t.string :avatar

      t.timestamps
    end
  end
end
