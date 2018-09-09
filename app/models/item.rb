class Item < ApplicationRecord
  belongs_to :collection
  validates :name, presence: true
  validates :description, presence: true
end
