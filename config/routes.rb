Rails.application.routes.draw do

  root 'books#index'

  get '/books/new', to: 'books#new'
  post '/books/create', to: 'books#create'
  get '/books/:id', to: 'books#show', as: 'book'
end
