#!/bin/bash

# Memory monitoring script for Velyzo website
# Perfect for 1GB RAM servers

echo "📊 Velyzo Website - Memory Monitor"
echo "=================================="

# Function to format memory in MB
format_memory() {
    echo "$(($1 / 1024)) MB"
}

# Function to show memory status
show_memory() {
    local total_mem=$(free -b | awk '/^Mem:/{print $2}')
    local used_mem=$(free -b | awk '/^Mem:/{print $3}')
    local free_mem=$(free -b | awk '/^Mem:/{print $7}')
    local mem_percent=$(( used_mem * 100 / total_mem ))
    
    echo "💾 System Memory:"
    echo "   Total: $(format_memory $total_mem)"
    echo "   Used:  $(format_memory $used_mem) (${mem_percent}%)"
    echo "   Free:  $(format_memory $free_mem)"
    
    if [ $mem_percent -gt 85 ]; then
        echo "   🔴 WARNING: High memory usage!"
    elif [ $mem_percent -gt 70 ]; then
        echo "   🟡 CAUTION: Memory usage elevated"
    else
        echo "   🟢 Memory usage normal"
    fi
}

# Function to show Node.js processes
show_node_processes() {
    echo ""
    echo "🟢 Node.js Processes:"
    ps aux | grep -E "(node|npm)" | grep -v grep | while read line; do
        local pid=$(echo $line | awk '{print $2}')
        local mem=$(echo $line | awk '{print $6}')
        local cmd=$(echo $line | awk '{for(i=11;i<=NF;i++) printf "%s ", $i; print ""}')
        
        if [ ! -z "$pid" ]; then
            echo "   PID: $pid | Memory: $(format_memory $(($mem * 1024))) | Command: $cmd"
        fi
    done
}

# Function to show disk usage
show_disk() {
    echo ""
    echo "💿 Disk Usage (build folder):"
    if [ -d "build" ]; then
        local build_size=$(du -sh build/ | cut -f1)
        echo "   Build folder: $build_size"
    else
        echo "   Build folder: Not found"
    fi
    
    local node_modules_size=$(du -sh node_modules/ 2>/dev/null | cut -f1)
    if [ ! -z "$node_modules_size" ]; then
        echo "   Node modules: $node_modules_size"
    fi
}

# Function to show recommendations
show_recommendations() {
    local free_mem=$(free -m | awk '/^Mem:/{print $7}')
    
    echo ""
    echo "💡 Memory Optimization Tips:"
    
    if [ $free_mem -lt 200 ]; then
        echo "   🔧 Consider closing other applications"
        echo "   🔧 Use 'npm run build:prod && npm run serve' for production"
        echo "   🔧 Clear browser cache and close unused tabs"
    else
        echo "   ✅ Memory looks good for development"
        echo "   🚀 Ready for development server"
    fi
}

# Main monitoring loop
main() {
    while true; do
        clear
        echo "📊 Velyzo Website - Memory Monitor"
        echo "=================================="
        echo "$(date)"
        echo ""
        
        show_memory
        show_node_processes
        show_disk
        show_recommendations
        
        echo ""
        echo "Press Ctrl+C to exit | Refreshing in 10 seconds..."
        sleep 10
    done
}

# Run monitor if script is executed directly
if [[ "${BASH_SOURCE[0]}" == "${0}" ]]; then
    main
fi
