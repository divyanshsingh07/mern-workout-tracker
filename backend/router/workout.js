const express = require('express');
const router = express.Router();

// Import controller functions
const {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controlers/controle');

// GET all workouts
router.get('/', getWorkouts);

// GET single workout
router.get('/:id', getWorkout);

// POST create a workout
router.post('/', createWorkout);

// DELETE a workout
router.delete('/:id', deleteWorkout);

// PATCH update a workout
router.patch('/:id', updateWorkout);

module.exports = router;