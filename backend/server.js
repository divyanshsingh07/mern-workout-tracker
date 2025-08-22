const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose')
const cors = require('cors');

// express app
const app = express();

// middleware to parse JSON request bodies
app.use(express.json());

// CORS middleware - configure for production
app.use(cors({
    origin: process.env.NODE_ENV === 'production' 
        ? ['https://your-frontend-domain.vercel.app', 'https://your-frontend-domain.netlify.app'] // Add your frontend domains
        : ['http://localhost:3000', 'http://localhost:3001'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// import router
const workoutRouter = require('./router/workout.js');

// middleware - logs request path & method (only in development)
if (process.env.NODE_ENV !== 'production') {
    app.use((req, res, next) => {
        console.log(req.path, req.method);
        next();
    });
}

// Health check endpoint
app.get('/', (req, res) => {
    res.json({ 
        message: "✅ Backend is working fine! 🚀",
        environment: process.env.NODE_ENV || 'development',
        timestamp: new Date().toISOString()
    });
});

// API status endpoint
app.get('/api/status', (req, res) => {
    res.json({
        status: 'healthy',
        database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
        environment: process.env.NODE_ENV || 'development',
        uptime: process.uptime()
    });
});

// routes
app.use('/api/workouts', workoutRouter);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Error:', err.stack);
    res.status(500).json({ 
        error: 'Something went wrong!',
        message: process.env.NODE_ENV === 'production' ? 'Internal server error' : err.message
    });
});

// 404 handler
app.use('*', (req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

//connect DB
const connectDB = async () => {
    try {
        if (!process.env.MONGO_URI) {
            throw new Error('MONGO_URI is not defined in environment variables');
        }
        
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            // These options help with newer MongoDB versions
            maxPoolSize: 10,
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 45000,
        });
        
        console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
        
        // listen on port from .env or default to 4000
        const PORT = process.env.PORT || 4000;
        
        // Only start server if not on Vercel (Vercel handles this automatically)
        if (process.env.NODE_ENV !== 'production' || !process.env.VERCEL) {
            app.listen(PORT, () => {
                console.log(`🚀 Server running at http://localhost:${PORT}/`);
            });
        }
        
    } catch (error) {
        console.error('❌ Database connection error:', error.message);
        if (process.env.NODE_ENV === 'production') {
            // In production, don't exit, let Vercel handle it
            console.error('Production mode: Continuing without database connection');
        } else {
            process.exit(1);
        }
    }
};

connectDB();

// Export for Vercel
module.exports = app;



