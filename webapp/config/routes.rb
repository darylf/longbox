Rails.application.routes.draw do

  resources :books do
    collection do
      get :edit_multiple
      put :update_multiple
    end
  end
  resources :jobs
  resources :people
  resources :series

  root 'series#index'
end
