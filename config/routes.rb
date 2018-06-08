Rails.application.routes.draw do
  resources :users
  resources :publishers
  resources :creators
  resources :series do
    resources :books, except: [:index]
  end

  delete '/attachments/:id', controller: :attachments, action: :destroy, as: 'delete_attachment'

  get    '/signup',  to: 'users#new'
  get    '/login',   to: 'sessions#new'
  post   '/login',   to: 'sessions#create'
  delete '/logout',  to: 'sessions#destroy'

  root 'series#index'
end
