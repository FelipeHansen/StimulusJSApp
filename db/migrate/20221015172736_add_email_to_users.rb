class AddEmailToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :description, :text
    add_column :users, :password, :string
    add_column :users, :soccer_team, :string
  end
end
