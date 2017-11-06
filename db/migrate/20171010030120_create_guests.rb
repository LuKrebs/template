class CreateGuests < ActiveRecord::Migration[5.1]
  def change
    create_table :guests do |t|
      t.string :arrive
      t.string :departure
      t.string :room
      t.string :subtotal_price
      t.boolean :breakfast
      t.integer :breakfast_value
      t.string :total_price
      t.text :first_name
      t.text :last_name
      t.string :email
      t.string :phone
      t.string :country
      t.text :notes
      t.string :descount_cupom
      t.text :credit_card_name
      t.string :credit_card_number
      t.string :month_expiration_date
      t.string :year_expiration_date
      t.string :security_code

      t.timestamps
    end
  end
end
