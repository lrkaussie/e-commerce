require 'kafka'

class KafkaProducerService
  def initialize
    @kafka = Kafka.new(['kafka:9092'], client_id: 'cart_service')
  end

  def produce_event(topic, message)
    @kafka.deliver_message(message.to_json, topic: topic)
  end
end 