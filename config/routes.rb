Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  ActiveAdmin.routes(self)
  devise_for :users

  root to: 'welcome#index'
  get 'about', to: 'welcome#about'
  get 'contact', to: 'welcome#contact'
  post 'contact', to: 'welcome#contact'
  get 'booking', to: 'welcome#booking'
  get 'work', to: 'welcome#work'
  get 'home', to: 'welcome#index'
  get 'confirm', to: 'welcome#confirm'
  post 'confirm', to: 'welcome#confirm'
  # resources :messages, only: [:create, :new]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
