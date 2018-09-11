class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :author, :content, :rating
  belongs_to :collection
end
