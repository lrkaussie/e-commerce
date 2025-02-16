class AuthController < ApplicationController
  before_action :authenticate_user, only: [:profile]

  def register
    user = User.new(user_params)
    if user.save
      render json: { message: 'User registered successfully' }, status: :created
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def login
    user = User.find_by(email: params[:email])
    if user&.authenticate(params[:password])
      token = JsonWebToken.encode(user_id: user.id)
      render json: { token: token }, status: :ok
    else
      render json: { error: 'Invalid email or password' }, status: :unauthorized
    end
  end

  def profile
    render json: { user: current_user }, status: :ok
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation)
  end
end 