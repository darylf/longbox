Rails.application.routes.draw do

  root 'books#index'

  get '/books/:id', to: 'books#show'
end
