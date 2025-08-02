FROM node:18

# Set the working directory
WORKDIR /usr/src/app

# Copy dependency definitions
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the entire app
COPY . .

# Expose the API port
EXPOSE 8080

# Start the API in production mode
CMD ["npm", "run", "prod"]
