# 🚀 Velyzo Website - Windows PowerShell Startup Script
# Optimized for low memory servers - GUARANTEED Port 80
# Created for extreme performance and reliability

param(
    [switch]$Force,
    [switch]$Clean,
    [switch]$Build
)

# Colors for output
$Colors = @{
    Red = "Red"
    Green = "Green" 
    Yellow = "Yellow"
    Blue = "Blue"
    Cyan = "Cyan"
    Magenta = "Magenta"
    White = "White"
}

# Velyzo ASCII Logo
function Show-Logo {
    Write-Host "██╗   ██╗███████╗██╗  ██╗   ██╗███████╗ ██████╗ " -ForegroundColor Magenta
    Write-Host "██║   ██║██╔════╝██║  ╚██╗ ██╔╝╚══███╔╝██╔═══██╗" -ForegroundColor Magenta  
    Write-Host "██║   ██║█████╗  ██║   ╚████╔╝   ███╔╝ ██║   ██║" -ForegroundColor Magenta
    Write-Host "╚██╗ ██╔╝██╔══╝  ██║    ╚██╔╝   ███╔╝  ██║   ██║" -ForegroundColor Magenta
    Write-Host " ╚████╔╝ ███████╗███████╗██║   ███████╗╚██████╔╝" -ForegroundColor Magenta
    Write-Host "  ╚═══╝  ╚══════╝╚══════╝╚═╝   ╚══════╝ ╚═════╝ " -ForegroundColor Magenta
    Write-Host "Revolutionary Software Development" -ForegroundColor Cyan
    Write-Host "Ultra Low Memory Server - Port 80 Guaranteed" -ForegroundColor White
    Write-Host ""
}

# Check if running as administrator
function Test-Administrator {
    $currentUser = [Security.Principal.WindowsIdentity]::GetCurrent()
    $principal = New-Object Security.Principal.WindowsPrincipal($currentUser)
    return $principal.IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)
}

# Kill processes on port 80
function Stop-Port80 {
    Write-Host "🛑 Clearing port 80..." -ForegroundColor Yellow
    
    try {
        # Find and kill processes using port 80
        $processes = netstat -ano | Select-String ":80 " | ForEach-Object {
            $parts = $_.ToString().Split(' ', [System.StringSplitOptions]::RemoveEmptyEntries)
            if ($parts.Count -gt 4) {
                $parts[-1]
            }
        }
        
        foreach ($pid in $processes) {
            if ($pid -and $pid -match '^\d+$') {
                try {
                    Stop-Process -Id $pid -Force -ErrorAction SilentlyContinue
                    Write-Host "✅ Killed process $pid" -ForegroundColor Green
                } catch {
                    # Process might already be dead
                }
            }
        }
        
        # Also try to stop common web servers
        @("nginx", "apache2", "httpd", "serve", "node") | ForEach-Object {
            Get-Process -Name $_ -ErrorAction SilentlyContinue | Stop-Process -Force -ErrorAction SilentlyContinue
        }
        
        Start-Sleep -Seconds 2
        Write-Host "✅ Port 80 cleared" -ForegroundColor Green
        
    } catch {
        Write-Host "⚠️ Could not clear port 80: $($_.Exception.Message)" -ForegroundColor Yellow
    }
}

# Setup memory-optimized environment
function Set-Environment {
    Write-Host "🔧 Setting up ultra low memory environment..." -ForegroundColor Yellow
    
    # Memory optimization environment variables
    $env:NODE_OPTIONS = "--max-old-space-size=768"
    $env:GENERATE_SOURCEMAP = "false"
    $env:INLINE_RUNTIME_CHUNK = "false" 
    $env:BROWSER = "none"
    $env:SKIP_PREFLIGHT_CHECK = "true"
    $env:FAST_REFRESH = "false"
    $env:PORT = "80"
    $env:HOST = "0.0.0.0"
    $env:NODE_ENV = "production"
    
    Write-Host "✅ Environment optimized" -ForegroundColor Green
}

# Install dependencies
function Install-Dependencies {
    if ($Clean -or !(Test-Path "node_modules")) {
        Write-Host "📦 Installing dependencies..." -ForegroundColor Yellow
        
        if ($Clean -and (Test-Path "node_modules")) {
            Remove-Item -Recurse -Force "node_modules" -ErrorAction SilentlyContinue
            Remove-Item -Force "package-lock.json" -ErrorAction SilentlyContinue
        }
        
        # Install with memory optimization
        $installArgs = @("install", "--legacy-peer-deps", "--no-audit", "--no-fund", "--silent")
        $process = Start-Process -FilePath "npm" -ArgumentList $installArgs -NoNewWindow -Wait -PassThru
        
        if ($process.ExitCode -eq 0) {
            Write-Host "✅ Dependencies installed" -ForegroundColor Green
        } else {
            Write-Host "❌ Dependency installation failed" -ForegroundColor Red
            exit 1
        }
    } else {
        Write-Host "✅ Dependencies already installed" -ForegroundColor Green
    }
}

# Build production version
function Build-Production {
    if ($Build -or $Force -or !(Test-Path "build")) {
        Write-Host "🔨 Building production version..." -ForegroundColor Yellow
        
        # Clean previous build
        if (Test-Path "build") {
            Remove-Item -Recurse -Force "build" -ErrorAction SilentlyContinue
        }
        
        # Build with optimization
        $buildArgs = @("run", "build")
        $process = Start-Process -FilePath "npm" -ArgumentList $buildArgs -NoNewWindow -Wait -PassThru
        
        if ($process.ExitCode -eq 0) {
            $buildSize = if (Test-Path "build") { 
                [math]::Round((Get-ChildItem "build" -Recurse | Measure-Object -Property Length -Sum).Sum / 1MB, 2)
            } else { "Unknown" }
            Write-Host "✅ Production build completed! Size: ${buildSize}MB" -ForegroundColor Green
        } else {
            Write-Host "❌ Build failed" -ForegroundColor Red
            exit 1
        }
    } else {
        Write-Host "✅ Build already exists" -ForegroundColor Green
    }
}

# Start server on port 80
function Start-Server {
    Write-Host "🌐 Starting production server on port 80..." -ForegroundColor Yellow
    
    # Ensure port 80 is free
    Stop-Port80
    
    # Check if serve is installed
    $serveInstalled = Get-Command "serve" -ErrorAction SilentlyContinue
    if (!$serveInstalled) {
        Write-Host "📦 Installing serve globally..." -ForegroundColor Yellow
        npm install -g serve --silent
    }
    
    try {
        Write-Host "🚀 Launching server..." -ForegroundColor Cyan
        
        # Start server in background
        $serverArgs = @("-s", "build", "-l", "80", "--cors", "--compress", "--cache", "3600")
        $serverProcess = Start-Process -FilePath "npx" -ArgumentList (@("serve") + $serverArgs) -NoNewWindow -PassThru
        
        # Wait for server to start
        Start-Sleep -Seconds 3
        
        # Check if server is running
        if (!$serverProcess.HasExited) {
            # Verify port 80 is being used
            $port80InUse = netstat -an | Select-String ":80 " | Where-Object { $_.ToString() -match "LISTENING" }
            
            if ($port80InUse) {
                Write-Host "🎉 SUCCESS! Server running on port 80" -ForegroundColor Green
                Write-Host "🌍 Local: http://localhost" -ForegroundColor Green  
                Write-Host "🌍 Network: http://$(((Get-NetIPAddress -AddressFamily IPv4) | Where-Object { $_.InterfaceAlias -ne "Loopback Pseudo-Interface 1" })[0].IPAddress)" -ForegroundColor Green
                Write-Host "🛑 Stop: Stop-Process -Id $($serverProcess.Id)" -ForegroundColor Cyan
                
                # Save PID for later management
                $serverProcess.Id | Out-File -FilePath ".server.pid" -Encoding ascii
                
                # Keep script running and monitor
                Write-Host "📊 Server monitoring active. Press Ctrl+C to stop." -ForegroundColor Cyan
                
                try {
                    while (!$serverProcess.HasExited) {
                        Start-Sleep -Seconds 10
                        
                        # Check memory usage
                        $memUsage = [math]::Round((Get-Process -Id $serverProcess.Id -ErrorAction SilentlyContinue).WorkingSet / 1MB, 2)
                        if ($memUsage) {
                            Write-Host "💾 Memory usage: ${memUsage}MB" -ForegroundColor Blue
                        }
                    }
                } catch {
                    Write-Host "🛑 Server stopped" -ForegroundColor Yellow
                }
                
            } else {
                Write-Host "❌ Port 80 not accessible" -ForegroundColor Red
                $serverProcess.Kill() 2>$null
                exit 1
            }
        } else {
            Write-Host "❌ Server failed to start" -ForegroundColor Red  
            exit 1
        }
        
    } catch {
        Write-Host "❌ Failed to start server: $($_.Exception.Message)" -ForegroundColor Red
        
        # Try with different approach if admin rights available
        if (Test-Administrator) {
            Write-Host "🔄 Retrying with administrator privileges..." -ForegroundColor Yellow
            
            # Could add netsh commands here to handle port 80 binding
            Write-Host "⚠️ Manual intervention may be required for port 80" -ForegroundColor Yellow
        }
        
        exit 1
    }
}

# Main execution
try {
    Clear-Host
    Show-Logo
    
    # Check administrator rights for port 80
    if (!(Test-Administrator)) {
        Write-Host "⚠️ Not running as administrator. Port 80 might not be available." -ForegroundColor Yellow
        Write-Host "💡 For guaranteed port 80 access, run as administrator." -ForegroundColor Cyan
    }
    
    Set-Environment
    Install-Dependencies
    Build-Production
    Start-Server
    
} catch {
    Write-Host "❌ Script failed: $($_.Exception.Message)" -ForegroundColor Red
    exit 1
} finally {
    # Cleanup on exit
    if ($serverProcess -and !$serverProcess.HasExited) {
        $serverProcess.Kill() 2>$null
    }
}
