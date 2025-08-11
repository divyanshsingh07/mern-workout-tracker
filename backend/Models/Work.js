const mongoose = require('mongoose');

// create schema
const workoutSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    }
}, { timestamps: true }); // ✅ this adds createdAt & updatedAt fields

// export model
module.exports = mongoose.model('Workout', workoutSchema);