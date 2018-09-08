Rails.application.routes.draw do
  resources :reviews
  resources :items
  resources :collections
  resources :comments
  resources :posts
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
