#!/bin/bash

# WorkoutTracker Production Startup Script
# This script starts the WorkoutTracker application in production mode

echo "🚀 Starting WorkoutTracker in Production Mode..."

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "❌ Docker is not installed. Please install Docker first."
    echo "Visit: https://docs.docker.com/get-docker/"
    exit 1
fi

# Check if Docker Compose is installed
if ! command -v docker-compose &> /dev/null; then
    echo "❌ Docker Compose is not installed. Please install Docker Compose first."
    echo "Visit: https://docs.docker.com/compose/install/"
    exit 1
fi

# Check if we're in the right directory
if [ ! -f "docker-compose.yml" ]; then
    echo "❌ docker-compose.yml not found. Please run this script from the WorkoutTracker root directory."
    exit 1
fi

echo "🏗️ Building production images..."
docker-compose build --no-cache backend-prod frontend-prod

echo "🐳 Starting production containers..."

# Start the production application
docker-compose up -d backend-prod frontend-prod

# Wait for services to start
echo "⏳ Waiting for services to start..."
sleep 15

# Check if services are running
echo "✅ Checking service status..."
docker-compose ps

echo ""
echo "🎉 WorkoutTracker Production is now running!"
echo ""
echo "🌐 Access your application:"
echo "   Frontend (Production): http://localhost:8000"
echo "   Backend API: http://localhost:8080"
echo "   Database: localhost:27017"
echo ""
echo "📊 To view logs: docker-compose logs -f backend-prod frontend-prod"
echo "🛑 To stop: docker-compose down"
echo "🔄 To restart: docker-compose restart backend-prod frontend-prod"
