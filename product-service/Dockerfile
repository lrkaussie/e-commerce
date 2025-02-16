FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build NestJS application
RUN npm run build

# Expose port
EXPOSE 4000

# Start the service
CMD ["npm", "run", "start:prod"] 