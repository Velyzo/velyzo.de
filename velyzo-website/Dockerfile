# Multi-stage build for memory-optimized production
FROM node:18-alpine AS builder

# Set memory limits for build process
ENV NODE_OPTIONS="--max-old-space-size=768"
ENV GENERATE_SOURCEMAP=false
ENV INLINE_RUNTIME_CHUNK=false

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies with memory optimization
RUN npm ci --only=production --legacy-peer-deps

# Copy source code
COPY . .

# Build the app with production optimizations
RUN npm run build:prod

# Production stage - minimal runtime
FROM nginx:alpine

# Copy built app from builder stage
COPY --from=builder /app/build /usr/share/nginx/html

# Copy optimized nginx configuration for low memory
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
