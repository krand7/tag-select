class CreateTags < ActiveRecord::Migration
  def change
    create_table :tags do |t|
      t.string :title
      t.boolean :selected, null: false, default: false

      t.timestamps null: false
    end
  end
end
