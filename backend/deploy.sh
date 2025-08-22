#!/bin/bash

echo "🚀 Starting Backend Deployment Process..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Please run this script from the backend directory"
    exit 1
fi

# Check if .env file exists
if [ ! -f ".env" ]; then
    echo "⚠️  Warning: .env file not found!"
    echo "📝 Please create a .env file with your production environment variables"
    echo "📋 You can use env-production.txt as a template"
    echo ""
    read -p "Continue anyway? (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "📥 Installing Vercel CLI..."
    npm install -g vercel
fi

# Check if user is logged in to Vercel
if ! vercel whoami &> /dev/null; then
    echo "🔐 Please login to Vercel first:"
    vercel login
fi

echo ""
echo "🎯 Ready to deploy!"
echo "📋 Choose deployment option:"
echo "1. Deploy to Vercel (recommended)"
echo "2. Build and prepare for manual deployment"
echo "3. Exit"
echo ""

read -p "Enter your choice (1-3): " choice

case $choice in
    1)
        echo "🚀 Deploying to Vercel..."
        vercel --prod
        ;;
    2)
        echo "🔨 Preparing for manual deployment..."
        echo "✅ Dependencies installed"
        echo "✅ Code ready for deployment"
        echo ""
        echo "📁 Upload the entire backend folder to your hosting provider"
        echo "🔧 Make sure to set environment variables on your hosting platform"
        ;;
    3)
        echo "👋 Deployment cancelled"
        exit 0
        ;;
    *)
        echo "❌ Invalid choice"
        exit 1
        ;;
esac

echo ""
echo "🎉 Deployment process completed!"
echo "📚 Check DEPLOYMENT.md for detailed instructions"
