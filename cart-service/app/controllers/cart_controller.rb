class CartController < ApplicationController
  before_action :set_cart
  before_action :initialize_kafka_producer

  def add_item
    product_id = params[:product_id]
    quantity = params[:quantity].to_i
    @cart[product_id] = (@cart[product_id] || 0) + quantity
    save_cart
    @kafka_producer.produce_event('cart_events', { event: 'add_item', product_id: product_id, quantity: quantity })
    render json: { message: 'Item added to cart', cart: @cart }, status: :ok
  end

  def remove_item
    product_id = params[:product_id]
    @cart.delete(product_id)
    save_cart
    @kafka_producer.produce_event('cart_events', { event: 'remove_item', product_id: product_id })
    render json: { message: 'Item removed from cart', cart: @cart }, status: :ok
  end

  def view_cart
    render json: { cart: @cart }, status: :ok
  end

  private

  def set_cart
    @cart = session[:cart] || {}
  end

  def save_cart
    session[:cart] = @cart
  end

  def initialize_kafka_producer
    @kafka_producer = KafkaProducerService.new
  end
end 