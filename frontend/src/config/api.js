// API Configuration
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'https://mern-workout-tracker.vercel.app';

export const API_ENDPOINTS = {
  WORKOUTS: `${API_BASE_URL}/api/workouts`,
  WORKOUT_BY_ID: (id) => `${API_BASE_URL}/api/workouts/${id}`,
};

export default API_BASE_URL;
