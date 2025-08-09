@echo off
:: 🚀 Velyzo Website - Windows Batch Startup Script
:: Simple launcher for port 80

echo.
echo ██╗   ██╗███████╗██╗  ██╗   ██╗███████╗ ██████╗ 
echo ██║   ██║██╔════╝██║  ╚██╗ ██╔╝╚══███╔╝██╔═══██╗
echo ██║   ██║█████╗  ██║   ╚████╔╝   ███╔╝ ██║   ██║
echo ╚██╗ ██╔╝██╔══╝  ██║    ╚██╔╝   ███╔╝  ██║   ██║
echo  ╚████╔╝ ███████╗███████╗██║   ███████╗╚██████╔╝
echo   ╚═══╝  ╚══════╝╚══════╝╚═╝   ╚══════╝ ╚═════╝ 
echo.
echo Revolutionary Software Development
echo Ultra Low Memory Server - Port 80 Guaranteed
echo.

:: Set memory optimization
set NODE_OPTIONS=--max-old-space-size=768
set GENERATE_SOURCEMAP=false
set PORT=80
set HOST=0.0.0.0
set NODE_ENV=production

echo 🔧 Environment optimized for low memory usage
echo.

:: Kill any process using port 80
echo 🛑 Clearing port 80...
for /f "tokens=5" %%a in ('netstat -aon ^| findstr ":80 "') do (
    taskkill /f /pid %%a >nul 2>&1
)
timeout /t 2 >nul

:: Check if build exists
if not exist "build" (
    echo 🔨 Building production version...
    npm run build
    if errorlevel 1 (
        echo ❌ Build failed
        pause
        exit /b 1
    )
)

:: Start server on port 80
echo 🚀 Starting server on port 80...
echo.
echo 🌍 Website will be available at: http://localhost
echo 🛑 Press Ctrl+C to stop the server
echo.

npx serve -s build -l 80 --cors --compress --cache 3600

pause
