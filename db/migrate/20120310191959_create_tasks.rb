class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.integer :user_id
      t.string :name
      t.datetime :deadline

      t.timestamps
    end
  end
end
