Rails.application.routes.draw do
  get '/cart', to: 'cart#index'
  post '/cart/add', to: 'cart#add_item'
  delete '/cart/remove', to: 'cart#remove_item'
  get '/cart/view', to: 'cart#view_cart'
end 