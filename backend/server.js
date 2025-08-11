const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose')
const cors = require('cors');

// express app
const app = express();

// middleware to parse JSON request bodies
app.use(express.json());

// CORS middleware
app.use(cors());

// import router
const workoutRouter = require('./router/workout.js');

// middleware - logs request path & method
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

//checking backend
app.get('/', (req, res) => {
    res.json({ message: "✅ Backend is working fine! 🚀" });
});

// routes
app.use('/api/workouts', workoutRouter);

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
        app.listen(PORT, () => {
            console.log(`🚀 Server running at http://localhost:${PORT}/`);
        });
        
    } catch (error) {
        console.error('❌ Database connection error:', error.message);
        process.exit(1);
    }
};

connectDB();



