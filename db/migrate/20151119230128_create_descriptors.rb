class CreateDescriptors < ActiveRecord::Migration
  def change
    create_table :descriptors do |t|
      t.integer :valence
      t.string :text

      t.timestamps null: false
    end
  end
end
