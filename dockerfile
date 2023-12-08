FROM node:latest

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the entire application code to the container
COPY . .

# Install project dependencies
RUN npm install
