class AddReviewToTasks < ActiveRecord::Migration
  def change
    add_column :tasks, :review, :boolean
  end
end
