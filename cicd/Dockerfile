# Use an official Node.js image as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy the app's source code to the container
COPY app/ .

# Install the app's dependencies
RUN npm install

# Specify the command to run when the container starts
CMD [ "npm", "start" ]
