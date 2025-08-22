# Workout Tracker Backend API

A robust Node.js backend API for tracking workouts, built with Express.js and MongoDB.

## 🚀 Features

- **RESTful API** for workout management
- **MongoDB** database with Mongoose ODM
- **CORS** enabled for cross-origin requests
- **Environment-based** configuration
- **Production-ready** with error handling
- **Health check** endpoints
- **Vercel deployment** ready

## 🛠️ Tech Stack

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - Object Data Modeling
- **CORS** - Cross-Origin Resource Sharing
- **dotenv** - Environment variable management

## 📁 Project Structure

```
backend/
├── controlers/          # Business logic controllers
│   └── controle.js     # Workout controller
├── Models/              # Database models
│   └── Work.js         # Workout model
├── router/              # API routes
│   └── workout.js      # Workout routes
├── server.js            # Main server file
├── package.json         # Dependencies and scripts
├── vercel.json          # Vercel deployment config
├── .env                 # Environment variables (create this)
├── .gitignore           # Git ignore rules
└── DEPLOYMENT.md        # Deployment guide
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- MongoDB Atlas account (or local MongoDB)
- Git

### Installation

1. **Clone the repository**:
   ```bash
   git clone <your-repo-url>
   cd WorkoutTracker/backend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   ```bash
   cp env-template.txt .env
   # Edit .env with your MongoDB connection string
   ```

4. **Start development server**:
   ```bash
   npm run dev
   ```

## 🔧 Environment Variables

Create a `.env` file in the backend root with:

```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/database
NODE_ENV=development
PORT=4000
```

## 📡 API Endpoints

### Health Check
- `GET /` - Backend status and info
- `GET /api/status` - Detailed API health status

### Workouts
- `GET /api/workouts` - Get all workouts
- `POST /api/workouts` - Create new workout
- `DELETE /api/workouts/:id` - Delete workout by ID

## 🚀 Deployment

### Vercel (Recommended)

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel --prod
   ```

3. **Set environment variables** in Vercel dashboard

### Other Platforms

- **Railway**: Connect GitHub repo and set env vars
- **Render**: Create web service and deploy
- **Heroku**: Use Procfile and set env vars

See `DEPLOYMENT.md` for detailed instructions.

## 🧪 Testing

Test your API endpoints using:

- **Postman** or **Insomnia** for API testing
- **curl** commands for quick tests
- **Browser** for GET endpoints

### Example API Test

```bash
# Health check
curl https://your-backend-url.vercel.app/

# Get workouts
curl https://your-backend-url.vercel.app/api/workouts

# Create workout
curl -X POST https://your-backend-url.vercel.app/api/workouts \
  -H "Content-Type: application/json" \
  -d '{"title":"Push-ups","load":0,"reps":10}'
```

## 🔒 Security

- **CORS** configured for production
- **Environment variables** for sensitive data
- **Input validation** in controllers
- **Error handling** without exposing internals

## 📊 Monitoring

- **Health endpoints** for uptime monitoring
- **Error logging** for debugging
- **MongoDB connection** status
- **Request logging** in development

## 🐛 Troubleshooting

### Common Issues

1. **MongoDB Connection**:
   - Check connection string format
   - Verify network access in MongoDB Atlas
   - Ensure user has proper permissions

2. **CORS Errors**:
   - Update CORS configuration with your frontend domain
   - Check environment variables

3. **Environment Variables**:
   - Verify `.env` file exists and is properly formatted
   - Check variable names match exactly

### Debug Mode

Set `NODE_ENV=development` to see detailed logs and request information.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

## 🆘 Support

- Check the deployment guide in `DEPLOYMENT.md`
- Review server logs for error details
- Ensure all environment variables are set correctly
- Verify MongoDB connection and permissions

## 🔄 Updates

Keep your dependencies updated:

```bash
npm update
npm audit fix
```

---

**Happy Coding! 🎉**
