Rails.application.routes.draw do
  get 'tops/othello' => 'tops#othello'
  root to: 'tops#index'
end
