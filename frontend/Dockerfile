FROM node:16

WORKDIR /app

# Ensure /app exists as a directory
RUN mkdir -p /app

# Copy both package.json and package-lock.json if available
COPY package*.json ./

# Set NPM registry & install dependencies
RUN npm config set registry http://registry.npmjs.org/ \
    && npm config set timeout 600000 \
    && npm cache clean --force \
    && npm install --legacy-peer-deps --prefer-offline --no-audit --progress=false

# Copy the rest of the app
COPY . . 

EXPOSE 3000
CMD ["npm", "start"]
