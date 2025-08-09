#!/bin/bash

# 🚀 Velyzo Website - Ultra Low Memory Startup Script
# Optimized for 1GB RAM servers - GUARANTEED Port 80
# Created for extreme performance and reliability

set -e  # Exit on any error

# Colors for beautiful output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
WHITE='\033[1;37m'
NC='\033[0m' # No Color

# Velyzo ASCII Logo
print_logo() {
    echo -e "${PURPLE}"
    echo "██╗   ██╗███████╗██╗  ██╗   ██╗███████╗ ██████╗ "
    echo "██║   ██║██╔════╝██║  ╚██╗ ██╔╝╚══███╔╝██╔═══██╗"
    echo "██║   ██║█████╗  ██║   ╚████╔╝   ███╔╝ ██║   ██║"
    echo "╚██╗ ██╔╝██╔══╝  ██║    ╚██╔╝   ███╔╝  ██║   ██║"
    echo " ╚████╔╝ ███████╗███████╗██║   ███████╗╚██████╔╝"
    echo "  ╚═══╝  ╚══════╝╚══════╝╚═╝   ╚══════╝ ╚═════╝ "
    echo -e "${CYAN}Revolutionary Software Development${NC}"
    echo -e "${WHITE}Ultra Low Memory Server - Port 80 Guaranteed${NC}"
    echo ""
}

# Memory optimization settings
setup_environment() {
    echo -e "${YELLOW}🔧 Setting up ultra low memory environment...${NC}"
    
    # Extreme memory optimization
    export NODE_OPTIONS="--max-old-space-size=768 --gc-interval=100 --optimize-for-size"
    export GENERATE_SOURCEMAP=false
    export INLINE_RUNTIME_CHUNK=false
    export BROWSER=none
    export SKIP_PREFLIGHT_CHECK=true
    export FAST_REFRESH=false
    export DISABLE_ESLINT_PLUGIN=true
    export WDS_SOCKET_PORT=0
    export PORT=80
    export HOST=0.0.0.0
    
    # Additional memory savings
    export NODE_ENV=production
    export FORCE_COLOR=0
    export NPM_CONFIG_PROGRESS=false
    export NPM_CONFIG_LOGLEVEL=error
    
    echo -e "${GREEN}✅ Environment optimized for 1GB RAM${NC}"
}

# Kill any existing processes on port 80
kill_port_80() {
    echo -e "${YELLOW}🛑 Ensuring port 80 is available...${NC}"
    
    # Kill any process using port 80
    sudo lsof -ti:80 | xargs -r sudo kill -9 2>/dev/null || true
    pkill -f "serve -s build" 2>/dev/null || true
    pkill -f "PORT=80" 2>/dev/null || true
    pkill -f "react-scripts" 2>/dev/null || true
    
    # Wait a moment
    sleep 2
    
    echo -e "${GREEN}✅ Port 80 is now free${NC}"
}

# Check and free memory
optimize_memory() {
    echo -e "${YELLOW}💾 Optimizing system memory...${NC}"
    
    # Get memory info
    TOTAL_RAM=$(free -m | awk '/^Mem:/{print $2}')
    AVAILABLE_RAM=$(free -m | awk '/^Mem:/{print $7}')
    USED_PERCENT=$(( (TOTAL_RAM - AVAILABLE_RAM) * 100 / TOTAL_RAM ))
    
    echo -e "${CYAN}   Total RAM: ${TOTAL_RAM}MB${NC}"
    echo -e "${CYAN}   Available: ${AVAILABLE_RAM}MB${NC}"
    echo -e "${CYAN}   Used: ${USED_PERCENT}%${NC}"
    
    # Clear cache if memory is low
    if [ $AVAILABLE_RAM -lt 300 ]; then
        echo -e "${RED}⚠️  Low memory detected! Clearing caches...${NC}"
        
        # Clear system caches
        sudo sync
        echo 3 | sudo tee /proc/sys/vm/drop_caches > /dev/null 2>&1 || true
        
        # Clear npm cache
        npm cache clean --force 2>/dev/null || true
        
        # Clear node modules cache
        rm -rf node_modules/.cache/ 2>/dev/null || true
        
        echo -e "${GREEN}✅ Memory optimized${NC}"
    else
        echo -e "${GREEN}✅ Memory looks good${NC}"
    fi
}

# Install dependencies with memory optimization
install_dependencies() {
    echo -e "${YELLOW}📦 Installing dependencies with memory optimization...${NC}"
    
    # Clear any existing cache first
    rm -rf node_modules/.cache/ 2>/dev/null || true
    
    # Install with extreme memory optimization
    npm ci --legacy-peer-deps --no-audit --no-fund --silent --prefer-offline 2>/dev/null || {
        echo -e "${RED}❌ npm ci failed, trying npm install...${NC}"
        npm install --legacy-peer-deps --no-audit --no-fund --silent --prefer-offline || {
            echo -e "${RED}❌ Installation failed${NC}"
            exit 1
        }
    }
    
    echo -e "${GREEN}✅ Dependencies installed${NC}"
}

# Build for production with extreme optimization
build_production() {
    echo -e "${YELLOW}🔨 Building with extreme memory optimization...${NC}"
    
    # Clean previous builds
    rm -rf build/ 2>/dev/null || true
    
    # Build with maximum optimization
    npm run build:prod 2>/dev/null || {
        echo -e "${RED}❌ Production build failed, trying regular build...${NC}"
        npm run build 2>/dev/null || {
            echo -e "${RED}❌ Build failed${NC}"
            exit 1
        }
    }
    
    # Get build size
    BUILD_SIZE=$(du -sh build/ 2>/dev/null | cut -f1 || echo "Unknown")
    echo -e "${GREEN}✅ Production build completed! Size: ${BUILD_SIZE}${NC}"
}

# Start production server on port 80
start_server() {
    echo -e "${YELLOW}🌐 Starting production server on port 80...${NC}"
    
    # Make sure port 80 is still free
    kill_port_80
    
    # Start server with maximum optimization
    echo -e "${CYAN}Starting server with minimal memory footprint...${NC}"
    
    # Use serve with compression and caching
    nohup npx serve -s build -l 80 --cors --compress --cache 3600 > server.log 2>&1 &
    SERVER_PID=$!
    
    # Wait for server to start
    echo -e "${CYAN}Waiting for server to start...${NC}"
    sleep 5
    
    # Check if server is running
    if kill -0 $SERVER_PID 2>/dev/null; then
        # Verify port 80 is actually being used
        if ss -tuln | grep -q ":80 "; then
            echo -e "${GREEN}🎉 SUCCESS! Server running on port 80${NC}"
            echo -e "${GREEN}🌍 Website: http://localhost${NC}"
            echo -e "${GREEN}🌍 External: http://$(hostname -I | awk '{print $1}')${NC}"
            echo -e "${CYAN}📝 Logs: tail -f server.log${NC}"
            echo -e "${CYAN}🛑 Stop: kill $SERVER_PID${NC}"
            
            # Save PID for later management
            echo $SERVER_PID > .server.pid
            
            return 0
        else
            echo -e "${RED}❌ Port 80 not accessible${NC}"
            kill $SERVER_PID 2>/dev/null || true
            return 1
        fi
    else
        echo -e "${RED}❌ Server failed to start${NC}"
        return 1
    fi
}

# Fallback to alternative port if 80 fails
fallback_server() {
    echo -e "${YELLOW}🔄 Trying fallback methods for port 80...${NC}"
    
    # Try with sudo for port 80
    echo -e "${CYAN}Attempting with elevated privileges...${NC}"
    sudo npx serve -s build -l 80 --cors --compress --cache 3600 > server.log 2>&1 &
    SERVER_PID=$!
    
    sleep 3
    
    if kill -0 $SERVER_PID 2>/dev/null && ss -tuln | grep -q ":80 "; then
        echo -e "${GREEN}🎉 SUCCESS with sudo! Server running on port 80${NC}"
        echo -e "${GREEN}🌍 Website: http://localhost${NC}"
        echo $SERVER_PID > .server.pid
        return 0
    else
        kill $SERVER_PID 2>/dev/null || true
        echo -e "${RED}❌ Even sudo failed for port 80${NC}"
        return 1
    fi
}

# Main execution
main() {
    print_logo
    
    echo -e "${BLUE}🚀 Starting Velyzo Website Deployment...${NC}"
    echo -e "${BLUE}Target: Ultra Low Memory (1GB RAM) - Port 80 Guaranteed${NC}"
    echo ""
    
    # Check if we're root for port 80
    if [ "$EUID" -ne 0 ]; then
        echo -e "${YELLOW}⚠️  Note: Port 80 may require sudo privileges${NC}"
    fi
    
    # Execute all steps
    setup_environment
    kill_port_80
    optimize_memory
    install_dependencies
    build_production
    
    # Try to start server
    if ! start_server; then
        echo -e "${YELLOW}🔄 Trying fallback method...${NC}"
        if ! fallback_server; then
            echo -e "${RED}❌ Failed to start on port 80${NC}"
            echo -e "${YELLOW}💡 Try running with: sudo ./start.sh${NC}"
            exit 1
        fi
    fi
    
    # Final success message
    echo ""
    echo -e "${GREEN}╔═══════════════════════════════════════╗${NC}"
    echo -e "${GREEN}║  🎉 VELYZO WEBSITE SUCCESSFULLY STARTED!  ║${NC}"
    echo -e "${GREEN}║  🌐 Running on PORT 80                 ║${NC}"
    echo -e "${GREEN}║  💾 Memory Optimized for 1GB RAM      ║${NC}"
    echo -e "${GREEN}║  🚀 Ready for Production              ║${NC}"
    echo -e "${GREEN}╚═══════════════════════════════════════╝${NC}"
    echo ""
    echo -e "${CYAN}Access your website at: ${WHITE}http://localhost${NC}"
    echo -e "${CYAN}Server logs: ${WHITE}tail -f server.log${NC}"
    echo -e "${CYAN}Stop server: ${WHITE}kill \$(cat .server.pid)${NC}"
    echo ""
}

# Handle script termination
cleanup() {
    echo -e "\n${YELLOW}🛑 Shutting down...${NC}"
    if [ -f .server.pid ]; then
        kill $(cat .server.pid) 2>/dev/null || true
        rm -f .server.pid
    fi
    exit 0
}

trap cleanup INT TERM

# Run main function
main "$@"
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
WHITE='\033[1;37m'
NC='\033[0m' # No Color

# ASCII Art Banner
echo -e "${PURPLE}"
echo "██╗   ██╗███████╗██╗  ██╗   ██╗███████╗ ██████╗ "
echo "██║   ██║██╔════╝██║  ╚██╗ ██╔╝╚══███╔╝██╔═══██╗"
echo "██║   ██║█████╗  ██║   ╚████╔╝   ███╔╝ ██║   ██║"
echo "╚██╗ ██╔╝██╔══╝  ██║    ╚██╔╝   ███╔╝  ██║   ██║"
echo " ╚████╔╝ ███████╗███████╗██║   ███████╗╚██████╔╝"
echo "  ╚═══╝  ╚══════╝╚══════╝╚═╝   ╚══════╝ ╚═════╝ "
echo -e "${NC}"
echo -e "${CYAN}🚀 Ultra Low RAM Website Starter${NC}"
echo -e "${WHITE}════════════════════════════════════════════════${NC}"
echo ""

# Function to check if port is available
check_port() {
    local port=$1
    if lsof -Pi :$port -sTCP:LISTEN -t >/dev/null 2>&1; then
        return 1  # Port is in use
    else
        return 0  # Port is free
    fi
}

# Function to kill processes on port 80
kill_port_80() {
    echo -e "${YELLOW}🔍 Checking for processes on port 80...${NC}"
    
    # Find and kill processes on port 80
    local pids=$(lsof -ti:80 2>/dev/null || true)
    if [ ! -z "$pids" ]; then
        echo -e "${RED}⚠️  Found processes on port 80, terminating...${NC}"
        echo "$pids" | xargs kill -9 2>/dev/null || true
        sleep 2
        echo -e "${GREEN}✅ Port 80 cleared${NC}"
    else
        echo -e "${GREEN}✅ Port 80 is free${NC}"
    fi
}

# Function to optimize system for low RAM
optimize_system() {
    echo -e "${BLUE}🔧 Optimizing system for ultra low RAM...${NC}"
    
    # Set swap usage to minimum
    if command -v sysctl >/dev/null 2>&1; then
        sudo sysctl vm.swappiness=1 2>/dev/null || true
    fi
    
    # Clear system caches
    sync
    if [ -w /proc/sys/vm/drop_caches ]; then
        echo 3 | sudo tee /proc/sys/vm/drop_caches >/dev/null 2>&1 || true
    fi
    
    # Set memory limits for Node.js
    export NODE_OPTIONS="--max-old-space-size=512 --max-semi-space-size=64"
    export UV_THREADPOOL_SIZE=2
    export NODE_ENV=production
    
    # Disable unnecessary features
    export GENERATE_SOURCEMAP=false
    export INLINE_RUNTIME_CHUNK=false
    export DISABLE_ESLINT_PLUGIN=true
    export SKIP_PREFLIGHT_CHECK=true
    export FAST_REFRESH=false
    export BROWSER=none
    
    # Guarantee Port 80
    export PORT=80
    export REACT_APP_PORT=80
    
    echo -e "${GREEN}✅ System optimized for ultra low RAM${NC}"
}

# Function to clean up development files
cleanup_dev() {
    echo -e "${BLUE}🧹 Cleaning up to save RAM...${NC}"
    
    # Remove build artifacts
    rm -rf build/ 2>/dev/null || true
    rm -rf .next/ 2>/dev/null || true
    rm -rf dist/ 2>/dev/null || true
    
    # Clear npm cache
    npm cache clean --force 2>/dev/null || true
    
    # Clear node modules cache
    rm -rf node_modules/.cache/ 2>/dev/null || true
    
    # Clear logs
    rm -f *.log 2>/dev/null || true
    rm -f npm-debug.log* 2>/dev/null || true
    
    echo -e "${GREEN}✅ Cleanup completed${NC}"
}

# Function to check available RAM
check_memory() {
    if command -v free >/dev/null 2>&1; then
        local total_ram=$(free -m | awk '/^Mem:/{print $2}')
        local available_ram=$(free -m | awk '/^Mem:/{print $7}')
        local ram_percent=$(( (total_ram - available_ram) * 100 / total_ram ))
        
        echo -e "${CYAN}💾 Memory Status:${NC}"
        echo -e "   Total RAM: ${total_ram}MB"
        echo -e "   Available: ${available_ram}MB"
        echo -e "   Usage: ${ram_percent}%"
        
        if [ $total_ram -le 1024 ]; then
            echo -e "${YELLOW}⚠️  Low RAM detected (${total_ram}MB) - Ultra optimization enabled${NC}"
            # Even more aggressive settings for very low RAM
            export NODE_OPTIONS="--max-old-space-size=384 --max-semi-space-size=32"
        fi
        
        if [ $available_ram -lt 200 ]; then
            echo -e "${RED}🔴 Critical: Very low available RAM!${NC}"
            echo -e "${YELLOW}💡 Consider closing other applications${NC}"
        fi
    fi
}

# Function to install dependencies with minimal memory
install_dependencies() {
    echo -e "${BLUE}📦 Installing dependencies (RAM optimized)...${NC}"
    
    # Use npm ci for faster, cleaner installs
    if [ -f "package-lock.json" ]; then
        npm ci --legacy-peer-deps --silent --no-audit --no-fund --maxsockets 1 || {
            echo -e "${RED}❌ npm ci failed, trying npm install...${NC}"
            npm install --legacy-peer-deps --silent --no-audit --no-fund --maxsockets 1
        }
    else
        npm install --legacy-peer-deps --silent --no-audit --no-fund --maxsockets 1
    fi
    
    echo -e "${GREEN}✅ Dependencies installed${NC}"
}

# Function to build for production (if needed)
build_production() {
    echo -e "${BLUE}🔨 Building for production (ultra optimized)...${NC}"
    
    # Use the most memory-efficient build
    npm run build:prod 2>/dev/null || npm run build || {
        echo -e "${RED}❌ Production build failed, will start development server${NC}"
        return 1
    }
    
    local build_size=$(du -sh build/ 2>/dev/null | cut -f1)
    echo -e "${GREEN}✅ Production build completed: ${build_size}${NC}"
    return 0
}

# Function to start development server
start_development() {
    echo -e "${BLUE}🚀 Starting development server on port 80...${NC}"
    
    # Make sure port 80 is available
    kill_port_80
    
    # Start with maximum memory optimization
    npm start &
    local dev_pid=$!
    
    # Wait for server to start
    echo -e "${YELLOW}⏳ Waiting for server to start...${NC}"
    sleep 5
    
    # Check if server is running
    if kill -0 $dev_pid 2>/dev/null && check_port 80; then
        echo -e "${RED}❌ Development server failed to start on port 80${NC}"
        kill $dev_pid 2>/dev/null || true
        return 1
    fi
    
    echo -e "${GREEN}✅ Development server running on port 80${NC}"
    echo -e "${WHITE}PID: ${dev_pid}${NC}"
    return 0
}

# Function to start production server
start_production() {
    echo -e "${BLUE}🌐 Starting production server on port 80...${NC}"
    
    # Make sure port 80 is available
    kill_port_80
    
    # Start production server
    npx serve -s build -l 80 --no-clipboard &
    local prod_pid=$!
    
    # Wait for server to start
    echo -e "${YELLOW}⏳ Waiting for server to start...${NC}"
    sleep 3
    
    # Check if server is running
    if kill -0 $prod_pid 2>/dev/null && ! check_port 80; then
        echo -e "${GREEN}✅ Production server running on port 80${NC}"
        echo -e "${WHITE}PID: ${prod_pid}${NC}"
        return 0
    else
        echo -e "${RED}❌ Production server failed to start on port 80${NC}"
        kill $prod_pid 2>/dev/null || true
        return 1
    fi
}

# Function to monitor server
monitor_server() {
    echo ""
    echo -e "${GREEN}🎉 Velyzo Website is now running!${NC}"
    echo -e "${CYAN}🌐 Access: http://localhost${NC}"
    echo -e "${CYAN}🌍 Public: http://$(curl -s ifconfig.me 2>/dev/null || echo 'your-server-ip')${NC}"
    echo ""
    echo -e "${YELLOW}📊 Monitoring (Press Ctrl+C to stop):${NC}"
    echo -e "${WHITE}════════════════════════════════════${NC}"
    
    # Monitor loop
    while true; do
        sleep 10
        
        # Check if server is still running
        if ! check_port 80; then
            local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
            echo -e "${GREEN}[${timestamp}] ✅ Server running - Port 80 active${NC}"
            
            # Show memory usage
            if command -v free >/dev/null 2>&1; then
                local mem_usage=$(free -m | awk '/^Mem:/{printf "%.1f%%", $3*100/$2}')
                echo -e "${CYAN}[${timestamp}] 💾 RAM Usage: ${mem_usage}${NC}"
            fi
        else
            echo -e "${RED}[$(date '+%Y-%m-%d %H:%M:%S')] ❌ Server stopped!${NC}"
            break
        fi
    done
}

# Main execution
main() {
    # Check if we're in the right directory
    if [ ! -f "package.json" ]; then
        echo -e "${RED}❌ package.json not found! Please run this script from the project directory.${NC}"
        exit 1
    fi
    
    # Check if we have Node.js
    if ! command -v node >/dev/null 2>&1; then
        echo -e "${RED}❌ Node.js not found! Please install Node.js first.${NC}"
        exit 1
    fi
    
    # Check if we have npm
    if ! command -v npm >/dev/null 2>&1; then
        echo -e "${RED}❌ npm not found! Please install npm first.${NC}"
        exit 1
    fi
    
    echo -e "${WHITE}Starting Velyzo Website with ultra low RAM optimization...${NC}"
    echo ""
    
    # Execute optimization steps
    check_memory
    optimize_system
    cleanup_dev
    install_dependencies
    
    echo ""
    echo -e "${BLUE}🎯 Attempting to start server...${NC}"
    
    # Try production build first (uses less RAM)
    if build_production; then
        if start_production; then
            monitor_server
        else
            echo -e "${YELLOW}⚠️  Production server failed, trying development...${NC}"
            if start_development; then
                monitor_server
            else
                echo -e "${RED}❌ Both production and development servers failed!${NC}"
                exit 1
            fi
        fi
    else
        echo -e "${YELLOW}⚠️  Production build failed, starting development server...${NC}"
        if start_development; then
            monitor_server
        else
            echo -e "${RED}❌ Failed to start development server!${NC}"
            exit 1
        fi
    fi
}

# Handle Ctrl+C gracefully
trap 'echo -e "\n${YELLOW}🛑 Shutting down...${NC}"; kill $(jobs -p) 2>/dev/null || true; exit 0' SIGINT SIGTERM

# Run the main function
main "$@"
