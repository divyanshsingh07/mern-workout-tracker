# 💪 WorkoutTracker

A full-stack MERN application for tracking and managing your workouts with a modern, responsive UI and containerized deployment.

![WorkoutTracker](https://img.shields.io/badge/WorkoutTracker-v1.0.0-blue)
![React](https://img.shields.io/badge/React-19.1.1-61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-22+-339933)
![MongoDB](https://img.shields.io/badge/MongoDB-Latest-47A248)
![Docker](https://img.shields.io/badge/Docker-Containerized-2496ED)

## 🚀 Features

- **Workout Management**: Create, read, update, and delete workout records
- **Modern UI**: Built with React 19 and styled with Tailwind CSS
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Real-time Updates**: Live data synchronization between frontend and backend
- **Containerized**: Full Docker support for easy deployment
- **Production Ready**: Optimized builds for both development and production

## 🛠️ Tech Stack

### Frontend
- **React 19.1.1** - Modern React with latest features
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons
- **React Router DOM** - Client-side routing
- **Context API** - State management

### Backend
- **Node.js 22+** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **CORS** - Cross-origin resource sharing

### DevOps
- **Docker** - Containerization
- **Docker Compose** - Multi-container orchestration
- **Nginx** - Production web server
- **Vercel** - Deployment platform support

## 📁 Project Structure

```
WorkoutTracker/
├── backend/                 # Backend API
│   ├── config/             # Configuration files
│   ├── controlers/         # API controllers
│   ├── Models/             # Database models
│   ├── router/             # API routes
│   ├── dockerfile.backend  # Backend Docker configuration
│   └── server.js           # Main server file
├── frontend/               # React frontend
│   ├── public/             # Static assets
│   ├── src/                # Source code
│   │   ├── components/     # React components
│   │   ├── context/        # Context providers
│   │   ├── pages/          # Page components
│   │   └── config/         # Configuration
│   ├── dockerfile.frontend # Frontend Docker configuration
│   └── tailwind.config.js  # Tailwind configuration
└── docker-compose.yml      # Docker Compose configuration
```

## 🚀 Quick Start

### Prerequisites

- [Docker](https://www.docker.com/get-started) and Docker Compose
- [Node.js 18+](https://nodejs.org/) (for local development)
- [MongoDB](https://www.mongodb.com/) (for local development)

### 🐳 Docker Setup (Recommended)

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/WorkoutTracker.git
   cd WorkoutTracker
   ```

2. **Run with Docker Compose**
   ```bash
   # Development environment
   docker-compose up backend frontend
   
   # Production environment
   docker-compose up backend-prod frontend-prod
   
   # All services
   docker-compose up
   ```

3. **Access the application**
   - **Frontend**: http://localhost:3000 (dev) | http://localhost:8000 (prod)
   - **Backend API**: http://localhost:4000 (dev) | http://localhost:8080 (prod)
   - **Database**: localhost:27017

### 💻 Local Development

1. **Backend Setup**
   ```bash
   cd backend
   npm install
   npm run dev
   ```

2. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   npm start
   ```

3. **Database Setup**
   - Install MongoDB locally or use MongoDB Atlas
   - Update connection string in backend configuration

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the backend directory:

```env
NODE_ENV=development
MONGO_URI=mongodb://localhost:27017/workout_tracker
PORT=4000
```

### Docker Services

| Service | Port | Description |
|---------|------|-------------|
| `backend` | 4000 | Development backend server |
| `frontend` | 3000 | Development frontend server |
| `backend-prod` | 8080 | Production backend server |
| `frontend-prod` | 8000 | Production frontend (Nginx) |
| `db` | 27017 | MongoDB database |

## 📚 API Endpoints

### Workouts
- `GET /api/workouts` - Get all workouts
- `GET /api/workouts/:id` - Get single workout
- `POST /api/workouts` - Create new workout
- `DELETE /api/workouts/:id` - Delete workout
- `PATCH /api/workouts/:id` - Update workout

## 🚀 Deployment

### Docker Production
```bash
# Build production images
docker-compose build --no-cache backend-prod frontend-prod

# Run production services
docker-compose up backend-prod frontend-prod
```

### Vercel Deployment
The project includes Vercel configuration files for easy deployment:

```bash
# Deploy backend to Vercel
cd backend
vercel --prod

# Deploy frontend to Vercel
cd frontend
vercel --prod
```

## 🧪 Development Commands

```bash
# Backend
npm run dev          # Start development server with nodemon
npm start           # Start production server
npm test            # Run tests

# Frontend
npm start           # Start development server
npm run build       # Build for production
npm test            # Run tests
npm run eject       # Eject from Create React App
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Arsh** - [GitHub Profile](https://github.com/yourusername)

## 🙏 Acknowledgments

- React team for the amazing framework
- Tailwind CSS for the utility-first approach
- MongoDB for the flexible database
- Docker for containerization
- All open-source contributors

## 📞 Support

If you have any questions or need help, please:

1. Check the [Issues](https://github.com/yourusername/WorkoutTracker/issues) page
2. Create a new issue if your problem isn't already reported
3. Contact the maintainer

---

⭐ **Star this repository if you found it helpful!**

🔗 **Live Demo**: [Coming Soon]

📧 **Contact**: [your-email@example.com]
