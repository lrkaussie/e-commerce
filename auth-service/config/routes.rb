Rails.application.routes.draw do
  post '/register', to: 'auth#register'
  post '/login', to: 'auth#login'
  get '/profile', to: 'auth#profile'
end 