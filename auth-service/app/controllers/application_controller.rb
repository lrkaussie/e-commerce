class ApplicationController < ActionController::API
  rescue_from StandardError, with: :handle_standard_error

  private

  def handle_standard_error(exception)
    render json: { error: exception.message }, status: :internal_server_error
  end

  def authenticate_user
    header = request.headers['Authorization']
    header = header.split(' ').last if header
    decoded = JsonWebToken.decode(header)
    @current_user = User.find(decoded[:user_id])
  rescue ActiveRecord::RecordNotFound => e
    render json: { errors: e.message }, status: :unauthorized
  rescue JWT::DecodeError => e
    render json: { errors: e.message }, status: :unauthorized
  end

  def current_user
    @current_user
  end
end 