FROM node:18-alpine

WORKDIR /usr/src/app

# Copy the SSL certificates into the container
COPY private.key /usr/src/app/private.key
COPY certificate.crt /usr/src/app/csr.crt

COPY package*.json ./

RUN npm install --production

COPY . .

# Expose ports for HTTP (80) and HTTPS (443)
EXPOSE 80
EXPOSE 443

ENV NODE_ENV=production

CMD ["node", "server.js"]
