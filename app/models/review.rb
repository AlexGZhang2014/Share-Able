class Review < ApplicationRecord
  belongs_to :collection, optional: true
  belongs_to :user, optional: true
end
