class CreateContacts < ActiveRecord::Migration
  def change
    create_table :contacts do |t|
      t.integer :user_id
      t.string :firstname
      t.string :lastname
      t.string :number
      t.string :email

      t.timestamps
    end
  end
end
