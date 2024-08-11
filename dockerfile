FROM node:18.17.0-alpine

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

RUN npm run dev


# Expose   
 the port
EXPOSE 3000

