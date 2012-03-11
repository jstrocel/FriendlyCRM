class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.integer :user_id
      t.string :name
      t.datetime :fromtime
      t.datetime :totime

      t.timestamps
    end
  end
end
