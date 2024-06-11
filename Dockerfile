# Use the official Node.js image as the base image
FROM node:20.13.1

# Create and change to the app directory
WORKDIR /usr/src/app

# Copy package.json and pnpm-lock.yaml to the working directory
COPY package.json ./

# Install pnpm and the dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Copy the .env file to the working directory
COPY .env .env

# Expose the port that the app runs on
EXPOSE 3000

# Run the app
CMD ["npm", "run", "dev"]
