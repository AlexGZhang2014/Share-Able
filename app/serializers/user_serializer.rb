class UserSerializer < ActiveModel::Serializer
  attributes :id, :username
  has_many :posts
  has_many :comments
  has_many :collections
  has_many :items, through: :collections
  has_many :reviews
end
