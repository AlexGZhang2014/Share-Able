class Review < ApplicationRecord
  belongs_to :collection, optional: true
  belongs_to :user, optional: true
  validates :author, presence: true
  validates :content, presence: true
  validates :rating, numericality: { only_integer: true, greater_than_or_equal_to: 1, less_than_or_equal_to: 5 }
end
