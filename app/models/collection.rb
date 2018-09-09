class Collection < ApplicationRecord
  belongs_to :user
  has_many :items
  has_many :reviews
  validates :name, presence: true
  validates :description, presence: true
end
