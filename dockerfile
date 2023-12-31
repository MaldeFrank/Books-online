FROM node:latest

# Set the working directory inside the container
WORKDIR /usr/src/app

COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the entire application code to the container
COPY . .