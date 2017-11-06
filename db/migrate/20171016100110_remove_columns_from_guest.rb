class RemoveColumnsFromGuest < ActiveRecord::Migration[5.1]
  def change
    remove_column :guests, :credit_card_name, :text
    remove_column :guests, :credit_card_number, :string
    remove_column :guests, :month_expiration_date, :string
    remove_column :guests, :year_expiration_date, :string
    remove_column :guests, :security_code, :string
  end
end
