class CommentSerializer < ActiveModel::Serializer
  attributes :id, :author, :content
  belongs_to :post
  belongs_to :user
end
