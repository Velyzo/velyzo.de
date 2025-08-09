#!/bin/bash

# Production deployment script for 1GB RAM server
# Memory-optimized Velyzo website deployment

echo "🚀 Starting Velyzo website deployment (Memory Optimized)..."

# Set memory limits
export NODE_OPTIONS="--max-old-space-size=768"
export GENERATE_SOURCEMAP=false
export INLINE_RUNTIME_CHUNK=false

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check available memory
AVAILABLE_RAM=$(free -m | awk '/^Mem:/{print $7}')
echo -e "${YELLOW}Available RAM: ${AVAILABLE_RAM}MB${NC}"

if [ $AVAILABLE_RAM -lt 512 ]; then
    echo -e "${RED}⚠️  Warning: Low memory detected. Consider closing other applications.${NC}"
fi

# Stop existing processes
echo "🛑 Stopping existing processes..."
pkill -f "serve -s build" 2>/dev/null || true

# Clean up previous builds
echo "🧹 Cleaning up..."
rm -rf build/
rm -rf node_modules/.cache/ 2>/dev/null || true

# Install dependencies
echo "📦 Installing dependencies..."
npm ci --legacy-peer-deps --silent || {
    echo -e "${RED}❌ Failed to install dependencies${NC}"
    exit 1
}

# Build with memory optimization
echo "🔨 Building website (memory optimized)..."
npm run build:prod || {
    echo -e "${RED}❌ Build failed${NC}"
    exit 1
}

# Check build size
BUILD_SIZE=$(du -sh build/ | cut -f1)
echo -e "${GREEN}✅ Build completed successfully! Size: ${BUILD_SIZE}${NC}"

# Start production server
echo "🌐 Starting production server on port 80..."
nohup npm run serve > server.log 2>&1 &
SERVER_PID=$!

# Wait a moment for server to start
sleep 3

# Check if server is running
if kill -0 $SERVER_PID 2>/dev/null; then
    echo -e "${GREEN}✅ Server started successfully! PID: ${SERVER_PID}${NC}"
    echo -e "${GREEN}🌍 Website available at: http://localhost${NC}"
    echo -e "${YELLOW}📝 Server logs: tail -f server.log${NC}"
    echo -e "${YELLOW}🛑 Stop server: kill ${SERVER_PID}${NC}"
else
    echo -e "${RED}❌ Failed to start server${NC}"
    exit 1
fi

echo -e "${GREEN}🎉 Deployment completed successfully!${NC}"
