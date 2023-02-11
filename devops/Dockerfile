# Use an official Node.js image as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY ../application/package*.json ./

# Install the app's dependencies
RUN npm install

# Copy the rest of the app's source code to the container
COPY ../application/ .

# Specify the command to run when the container starts
CMD [ "npm", "start" ]
