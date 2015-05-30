Rails.application.routes.draw do

  resources :books
  resources :people
  resources :series

  root 'series#index'
end
