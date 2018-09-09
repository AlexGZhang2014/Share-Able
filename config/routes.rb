Rails.application.routes.draw do
  root "static#home"
  get "/login" => "sessions#new"
  post "/login" => "sessions#create"
  post "/logout" => "sessions#destroy"
  resources :reviews
  resources :items
  resources :collections
  resources :comments
  resources :posts
  resources :users do
    resources :posts, only: [:index, :new, :edit, :show]
    resources :collections, only: [:index, :new, :edit, :show]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
