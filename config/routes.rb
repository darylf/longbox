Rails.application.routes.draw do

  resources :books
  resources :series

  root 'series#index'
end
