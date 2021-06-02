Rails.application.routes.draw do
  post '/graphql', to: 'graphql#execute', format: false
  post '/session', to: 'session#create', format: false
  patch '/session', to: 'session#update', format: false
  delete '/session', to: 'session#destroy', format: false
end
