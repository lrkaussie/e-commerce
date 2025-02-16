FROM ruby:3.2-alpine

# Install build dependencies
RUN apk add --no-cache \
    build-base \
    postgresql-dev \
    tzdata

WORKDIR /app

# Install bundler
RUN gem install bundler

# Copy Gemfile and Gemfile.lock
COPY Gemfile Gemfile.lock ./

# Install dependencies
RUN bundle install --jobs 4 --retry 3

# Copy application code
COPY . .

# Expose port
EXPOSE 3001

# Start the service
CMD ["rails", "server", "-b", "0.0.0.0", "-p", "3001"] 