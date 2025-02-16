from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_read_root():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"message": "Payment Service is running"}

def test_create_payment_intent():
    response = client.post("/create-payment-intent/", json={"amount": 1000})
    assert response.status_code == 200
    assert 'client_secret' in response.json() 