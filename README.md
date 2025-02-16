# E-Commerce Microservices Platform

A modern, scalable e-commerce platform built with microservices architecture using TypeScript, Ruby on Rails, and other cutting-edge technologies.

## 🌟 Features

- 🔐 Secure Authentication & Authorization
- 📦 Product Catalog with GraphQL API
- 🛒 Shopping Cart Management
- 💳 Secure Payment Processing
- 📦 Order Management
- 🚀 Event-Driven Architecture
- 📊 Real-time Analytics

## 🏗️ Architecture

The application is built using a microservices architecture with the following components:

- **Frontend**: Next.js (TypeScript)
- **API Gateway**: Express.js
- **Authentication Service**: Ruby on Rails
- **Product Catalog Service**: NestJS
- **Cart & Order Service**: Ruby on Rails
- **Payment Service**: FastAPI
- **Message Queue**: Apache Kafka
- **Databases**: PostgreSQL, Redis
- **Monitoring**: Prometheus, Grafana

## 🚀 Getting Started

### Prerequisites

- Docker and Docker Compose
- Node.js (v18 or higher)
- Ruby (v3.2 or higher)
- Python (v3.9 or higher)
- PostgreSQL
- Redis
- Apache Kafka

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd e-commerce
```

2. Start the infrastructure services:
```bash
docker-compose up -d
```

3. Set up each service:

**API Gateway**
```bash
cd api-gateway
npm install
npm run dev
```

**Authentication Service**
```bash
cd auth-service
bundle install
rails db:create db:migrate
rails server
```

**Product Catalog Service**
```bash
cd product-service
npm install
npm run start:dev
```

**Cart Service**
```bash
cd cart-service
bundle install
rails db:create db:migrate
rails server
```

**Payment Service**
```bash
cd payment-service
pip install -r requirements.txt
uvicorn main:app --reload
```

**Frontend**
```bash
cd frontend
npm install
npm run dev
```

## 🔧 Development

### Environment Setup

Each service has its own `.env` file. Copy the example environment files:

```bash
cp .env.example .env
```

### Running Tests

Each service can be tested independently:

```bash
# API Gateway
cd api-gateway && npm test

# Auth Service
cd auth-service && bundle exec rspec

# Product Service
cd product-service && npm test

# Cart Service
cd cart-service && bundle exec rspec

# Payment Service
cd payment-service && pytest
```

## 📦 Deployment

The application can be deployed using Docker and Kubernetes:

```bash
# Build all services
docker-compose build

# Deploy to Kubernetes
kubectl apply -f k8s/
```

## 🔍 Monitoring

Access monitoring dashboards:

- Grafana: http://localhost:3000
- Prometheus: http://localhost:9090

## 📚 API Documentation

- API Gateway: http://localhost:3000/api-docs
- Product Service (GraphQL): http://localhost:4000/graphql
- Auth Service: http://localhost:3001/api-docs
- Cart Service: http://localhost:3002/api-docs
- Payment Service: http://localhost:8000/docs

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 👥 Team

- Lohit K. - Full Stack Developer 