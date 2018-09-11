class CollectionSerializer < ActiveModel::Serializer
  attributes :id, :name, :description
  belongs_to :user
  has_many :items
  has_many :reviews
end
