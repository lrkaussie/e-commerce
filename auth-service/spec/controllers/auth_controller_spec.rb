require 'rails_helper'

RSpec.describe AuthController, type: :controller do
  describe 'GET #index' do
    it 'returns a success response' do
      get :index
      expect(response).to be_successful
      expect(JSON.parse(response.body)['message']).to eq('Auth Service is running')
    end
  end
end 