class Comment < ApplicationRecord
  belongs_to :post, optional: true
  belongs_to :collection, optional: true
end
