#!/bin/bash

# AWS EC2 Deployment Script for WorkoutTracker
# Run this script on your EC2 instance

echo "🚀 Starting WorkoutTracker deployment on AWS EC2..."

# Update system
echo "📦 Updating system packages..."
sudo apt update && sudo apt upgrade -y

# Install Docker if not already installed
if ! command -v docker &> /dev/null; then
    echo "🐳 Installing Docker..."
    sudo apt install docker.io -y
    sudo systemctl start docker
    sudo systemctl enable docker
    sudo usermod -aG docker $USER
fi

# Install Docker Compose if not already installed
if ! command -v docker-compose &> /dev/null; then
    echo "🔧 Installing Docker Compose..."
    sudo curl -L "https://github.com/docker/compose/releases/download/v2.20.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    sudo chmod +x /usr/local/bin/docker-compose
fi

# Get EC2 public IP
EC2_PUBLIC_IP=$(curl -s http://169.254.169.254/latest/meta-data/public-ipv4)
echo "🌐 EC2 Public IP: $EC2_PUBLIC_IP"

# Update docker-compose.aws.yml with actual IP
sed -i "s/your-ec2-public-ip/$EC2_PUBLIC_IP/g" docker-compose.aws.yml

# Stop any existing containers
echo "🛑 Stopping existing containers..."
docker-compose -f docker-compose.aws.yml down

# Build and start services
echo "🏗️ Building and starting services..."
docker-compose -f docker-compose.aws.yml up -d --build

# Wait for services to be ready
echo "⏳ Waiting for services to start..."
sleep 30

# Check if services are running
echo "✅ Checking service status..."
docker-compose -f docker-compose.aws.yml ps

echo "🎉 Deployment complete!"
echo "🌐 Your app is now accessible at:"
echo "   Frontend: http://$EC2_PUBLIC_IP"
echo "   Backend API: http://$EC2_PUBLIC_IP:8080"
echo ""
echo "📊 To view logs: docker-compose -f docker-compose.aws.yml logs -f"
echo "🛑 To stop: docker-compose -f docker-compose.aws.yml down"
