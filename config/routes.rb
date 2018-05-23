Rails.application.routes.draw do
  resources :publishers
  resources :creators
  resources :series do
    resources :books, except: [:index]
  end
  root 'series#index'
end
