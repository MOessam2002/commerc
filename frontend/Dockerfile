FROM node:16 

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker caching
COPY package.json ./

# Set npm registry to avoid timeout issues
RUN npm config set registry https://registry.npmjs.org/ \
    && npm config set timeout 600000 \
    && npm install --legacy-peer-deps --prefer-offline --no-audit

# Copy the rest of the app
COPY . .

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]

