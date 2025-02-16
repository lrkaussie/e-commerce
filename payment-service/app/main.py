from fastapi import FastAPI, HTTPException
from app.services.stripe_service import StripeService

app = FastAPI()

@app.get("/")
async def read_root():
    return {"message": "Payment Service is running"}

@app.post("/create-payment-intent/")
async def create_payment_intent(amount: int):
    intent = StripeService.create_payment_intent(amount)
    if 'error' in intent:
        raise HTTPException(status_code=400, detail=intent['error'])
    return intent 