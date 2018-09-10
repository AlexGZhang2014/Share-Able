Rails.application.routes.draw do
  root "static#home"
  get "/login" => "sessions#new"
  post "/login" => "sessions#create"
  post "/logout" => "sessions#destroy"
  resources :reviews
  resources :items
  resources :collections do
    resources :items, only: [:new, :edit, :show]
  end
  resources :comments
  resources :posts do
    resources :comments, only: [:new, :edit]
  end
  resources :users do
    resources :posts, only: [:index, :new, :edit, :show]
    resources :collections, only: [:index, :new, :edit, :show]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
