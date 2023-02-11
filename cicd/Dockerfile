# Use an official Node.js image as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy the rest of the app's source code to the container
COPY application/ .

# Specify the command to run when the container starts
CMD [ "npm", "start"]
