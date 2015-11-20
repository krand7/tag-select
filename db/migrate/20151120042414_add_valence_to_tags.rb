class AddValenceToTags < ActiveRecord::Migration
  def change
    add_column :tags, :valence, :integer, default: 3, null: false
  end
end
