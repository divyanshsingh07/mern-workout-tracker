const express = require('express');
const cors = require('cors');

const app = express();

// middleware to parse JSON request bodies
app.use(express.json());

// Simple CORS middleware
app.use(cors());

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
        database: 'not connected (test mode)',
        environment: process.env.NODE_ENV || 'development',
        uptime: process.uptime()
    });
});

// Mock workouts endpoint
app.get('/api/workouts', (req, res) => {
    res.json([
        { _id: '1', title: 'Test Workout', load: 50, reps: 10, createdAt: new Date() }
    ]);
});

// Mock create workout endpoint
app.post('/api/workouts', (req, res) => {
    const workout = {
        _id: 'test-' + Date.now(),
        ...req.body,
        createdAt: new Date()
    };
    res.json(workout);
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Error:', err.stack);
    res.status(500).json({ 
        error: 'Something went wrong!',
        message: 'Internal server error'
    });
});

// 404 handler
app.use('*', (req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

// Export for Vercel
module.exports = app;
