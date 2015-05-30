Rails.application.routes.draw do

  resources :books
  resources :jobs
  resources :people
  resources :series

  root 'series#index'
end
