FROM node:16

WORKDIR /app
COPY package.json ./  # Ensure lock file is copied
RUN npm config set registry https://registry.npmjs.org/ \
    && npm config set timeout 600000 \
    && npm cache clean --force \
    && npm install --legacy-peer-deps --prefer-offline --no-audit --progress=false

COPY . . 
EXPOSE 3000
CMD ["npm", "start"]
