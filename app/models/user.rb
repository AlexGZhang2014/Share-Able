class User < ApplicationRecord
  has_secure_password
  has_many :posts
  has_many :comments
  has_many :collections
  has_many :items, through: :collections
  has_many :reviews
  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true, format: { with: /\A([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})\z/, on: :create }
end
