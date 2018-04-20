Rails.application.routes.draw do
  resources :series
  root 'series#index'
end
