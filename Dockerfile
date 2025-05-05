# select your base image to start with
FROM node:14-alpine3.12

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

# Make this port accessible from outside the container
# Necessary for your browser to send HTTP requests to your Node app
EXPOSE 8081

VOLUME ["/processed", "/outbound", "/inbound"]

# Command to run when the container is ready
CMD [ "npm", "run", "dev"]