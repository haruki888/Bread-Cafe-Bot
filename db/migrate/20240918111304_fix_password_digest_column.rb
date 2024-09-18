class FixPasswordDigestColumn < ActiveRecord::Migration[7.1]
  def change
    remove_column :users, :pssword_digest, :string
    change_column :users, :password_digest, :string
  end
end
