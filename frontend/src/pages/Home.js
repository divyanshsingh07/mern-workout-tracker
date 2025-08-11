import { useEffect, useState } from 'react'
import { Dumbbell, Weight, RotateCcw, Calendar, Loader2, Target, Plus, Type, Sparkles, Activity } from 'lucide-react'
import { useWorkoutContext } from "../hookes/useWorkoutContext";

import WorkoutDetails from '../components/WorkDetails';
import WorkOutForm from '../components/WorkOutForm';



const Home = () => {
  const { workouts, dispatch } = useWorkoutContext()

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await fetch('/api/workouts')
        const json = await response.json()
        
        if (response.ok) {
          dispatch({type :'SET_WORKOUTS',payload : json})
        } else {
          console.error('Failed to fetch workouts:', json.error)
        }
      } catch (error) {
        console.error('Error fetching workouts:', error)
      }
    }

    fetchWorkouts()
  }, [])

  return (
  <div className="max-w-7xl mx-auto px-4 py-8 relative">
    {/* Playful background decorations */}
    <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-20 animate-pulse"></div>
    <div className="absolute top-20 right-20 w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-20 animate-bounce"></div>
    <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-20 animate-ping"></div>
    
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      
      {/* Left Column - Workouts */}
      <div className="lg:col-span-2 space-y-6">
        {workouts && workouts.length > 0 ? (
          workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))
        ) : (
          <div className="text-center py-12 text-gray-500">
            <div className="flex justify-center mb-4">
              <Dumbbell className="w-16 h-16 text-gray-400" />
            </div>
            <p className="text-xl">No workouts yet! Start your fitness journey!</p>
            <div className="flex justify-center mt-2">
              <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
            </div>
          </div>
        )}
      </div>

      {/* Right Column - Form */}
      <div>
        <WorkOutForm />
      </div>

    </div>
  </div>
 
);
}

export default Home