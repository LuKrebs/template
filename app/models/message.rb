class Message < ApplicationRecord
  validates :name, presence: true
  validates :name, length: { minimum: 3 }

  validates :email, presence: true

  validates :subject, presence: true
  validates :subject, length: { minimum: 5 }

  validates :content, presence: true
  validates :content, length: { minimum: 20 }
end
