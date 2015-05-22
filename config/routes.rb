Rails.application.routes.draw do

  resources :books
  resources :series

  root 'books#index'
end
