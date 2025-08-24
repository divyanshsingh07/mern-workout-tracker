#!/bin/bash

echo "🚀 Starting Frontend Deployment Process..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Please run this script from the frontend directory"
    exit 1
fi

# Check if build folder exists, if not build the project
if [ ! -d "build" ]; then
    echo "🔨 Building project..."
    npm run build
    
    if [ $? -ne 0 ]; then
        echo "❌ Build failed! Please fix the errors and try again."
        exit 1
    fi
    echo "✅ Build successful!"
else
    echo "📁 Build folder found, skipping build step"
fi

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
echo "1. Deploy to Vercel (production)"
echo "2. Deploy to Vercel (preview)"
echo "3. Build only (no deployment)"
echo "4. Exit"
echo ""

read -p "Enter your choice (1-4): " choice

case $choice in
    1)
        echo "🚀 Deploying to Vercel (production)..."
        vercel --prod
        ;;
    2)
        echo "🚀 Deploying to Vercel (preview)..."
        vercel
        ;;
    3)
        echo "🔨 Build completed successfully!"
        echo "📁 Your build files are ready in the 'build' directory"
        echo "🌐 You can test locally with: npx serve -s build"
        ;;
    4)
        echo "👋 Deployment cancelled"
        exit 0
        ;;
    *)
        echo "❌ Invalid choice"
        exit 1
        ;;
esac

echo ""
echo "🎉 Process completed!"
echo "📚 Check VERCEL-DEPLOYMENT-GUIDE.md for detailed instructions"
echo ""
echo "🔧 After deployment, remember to:"
echo "   1. Set environment variables in Vercel dashboard"
echo "   2. Update your backend CORS to allow the new frontend domain"
echo "   3. Test all functionality end-to-end"
echo "   4. Check React Router navigation works correctly"
