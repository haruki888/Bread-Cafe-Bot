Rails.application.routes.draw do
  get 'top', to: 'home#top'
  get "up" => "rails/health#show", as: :rails_health_check

end
