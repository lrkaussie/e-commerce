import stripe
import os

stripe.api_key = os.getenv('STRIPE_SECRET_KEY')

class StripeService:
    @staticmethod
    def create_payment_intent(amount, currency='usd'):
        try:
            intent = stripe.PaymentIntent.create(
                amount=amount,
                currency=currency,
            )
            return intent
        except stripe.error.StripeError as e:
            return {'error': str(e)} 