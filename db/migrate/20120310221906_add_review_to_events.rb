class AddReviewToEvents < ActiveRecord::Migration
  def change
    add_column :events, :review, :boolean
  end
end
