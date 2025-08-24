const express = require('express');
const cors = require('cors');

const app = express();

// Basic middleware
app.use(express.json());
app.use(cors());

// Test endpoint
app.get('/', (req, res) => {
    res.json({ message: 'Backend test server is working!' });
});

// Test workouts endpoint
app.get('/api/workouts', (req, res) => {
    res.json([
        { _id: '1', title: 'Test Workout', load: 50, reps: 10, createdAt: new Date() }
    ]);
});

// Test POST endpoint
app.post('/api/workouts', (req, res) => {
    console.log('Received workout data:', req.body);
    res.json({ 
        _id: 'test-' + Date.now(),
        ...req.body,
        createdAt: new Date()
    });
});

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`🚀 Test server running on http://localhost:${PORT}`);
    console.log(`📡 Test endpoints:`);
    console.log(`   GET  http://localhost:${PORT}/`);
    console.log(`   GET  http://localhost:${PORT}/api/workouts`);
    console.log(`   POST http://localhost:${PORT}/api/workouts`);
});
