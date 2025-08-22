# Backend Deployment Guide

## Overview
This backend is configured for deployment on Vercel and other serverless platforms.

## Prerequisites
- MongoDB Atlas account with a cluster
- Vercel account (recommended) or other hosting platform
- Node.js 18+ installed locally

## Deployment Options

### Option 1: Deploy to Vercel (Recommended)

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy from the backend directory**:
   ```bash
   cd backend
   vercel
   ```

4. **Follow the prompts**:
   - Link to existing project or create new
   - Set project name
   - Confirm build settings

5. **Set Environment Variables**:
   - Go to your Vercel project dashboard
   - Navigate to Settings → Environment Variables
   - Add the following variables:
     ```
     MONGO_URI=your_mongodb_connection_string
     NODE_ENV=production
     FRONTEND_URL=your_frontend_domain
     ```

### Option 2: Deploy to Railway

1. **Connect your GitHub repository to Railway**
2. **Set environment variables in Railway dashboard**
3. **Deploy automatically on push**

### Option 3: Deploy to Render

1. **Create a new Web Service in Render**
2. **Connect your GitHub repository**
3. **Set environment variables**
4. **Deploy**

## Environment Variables

### Required Variables
- `MONGO_URI`: Your MongoDB connection string
- `NODE_ENV`: Set to "production" for production deployment

### Optional Variables
- `PORT`: Server port (defaults to 4000)
- `FRONTEND_URL`: Your frontend domain for CORS

## MongoDB Setup

1. **Create MongoDB Atlas Cluster**:
   - Sign up at [MongoDB Atlas](https://www.mongodb.com/atlas)
   - Create a new cluster
   - Set up database access (username/password)
   - Set up network access (IP whitelist)

2. **Get Connection String**:
   - Click "Connect" on your cluster
   - Choose "Connect your application"
   - Copy the connection string
   - Replace `<username>`, `<password>`, `<cluster-url>`, and `<database-name>`

## CORS Configuration

The backend is configured to allow requests from:
- Development: `http://localhost:3000`, `http://localhost:3001`
- Production: Your configured frontend domains

Update the CORS configuration in `server.js` with your actual frontend domains.

## Testing Deployment

1. **Health Check**: Visit your deployed URL to see the welcome message
2. **API Status**: Check `/api/status` for backend health
3. **Test Workout Endpoints**: Use `/api/workouts` endpoints

## Monitoring & Logs

- **Vercel**: Check Function Logs in your project dashboard
- **MongoDB**: Monitor your database in MongoDB Atlas
- **API Testing**: Use tools like Postman or Insomnia

## Troubleshooting

### Common Issues

1. **CORS Errors**:
   - Check your frontend domain is in the CORS configuration
   - Verify environment variables are set correctly

2. **Database Connection Issues**:
   - Verify MONGO_URI is correct
   - Check MongoDB Atlas network access settings
   - Ensure database user has proper permissions

3. **Environment Variables**:
   - Verify all required variables are set in your hosting platform
   - Check variable names match exactly (case-sensitive)

### Debug Mode

For debugging, you can temporarily set `NODE_ENV=development` to see detailed logs.

## Security Considerations

1. **Environment Variables**: Never commit sensitive data to version control
2. **CORS**: Only allow necessary domains
3. **MongoDB**: Use strong passwords and limit network access
4. **Rate Limiting**: Consider adding rate limiting for production use

## Performance Optimization

1. **Database Indexing**: Add indexes to frequently queried fields
2. **Connection Pooling**: MongoDB connection is already optimized
3. **Caching**: Consider adding Redis for session management if needed

## Support

- Check Vercel documentation for platform-specific issues
- MongoDB Atlas has comprehensive documentation
- Review server logs for detailed error information
