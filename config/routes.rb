Rails.application.routes.draw do
  resources :publishers
  resources :creators
  resources :series do
    resources :books, except: [:index]
  end

  delete '/attachments/:id', controller: :attachments, action: :destroy, as: 'delete_attachment'

  root 'series#index'
end
