import { useState } from "react"
import { useWorkoutContext } from "../hookes/useWorkoutContext";
import { Dumbbell, Weight, RotateCcw, Plus, Target, AlertCircle } from 'lucide-react'

const WorkoutForm = () => {
  const { dispatch } = useWorkoutContext()
  const [title, setTitle] = useState('')
  const [load, setLoad] = useState('')
  const [reps, setReps] = useState('')
   const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const workout = { title, load, reps }

    const response = await fetch('/api/workouts', {
      method: 'POST',
      body: JSON.stringify(workout),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
    } else {
      setError(null)
      console.log("New workout added:", json)
      setTitle('')
      setLoad('')
      setReps('')
      dispatch({type:'CREATE_WORKOUT',payload: json})
    }
  }

  return (
    <form
      className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl shadow-lg p-6 border border-blue-200 max-w-md mx-auto hover:shadow-xl transition-all duration-300 relative overflow-hidden"
      onSubmit={handleSubmit}
    >
      {/* Playful decorative elements */}
      <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full opacity-80 animate-bounce"></div>
      <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-pink-400 rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute top-1/2 -right-4 w-3 h-3 bg-green-400 rounded-full opacity-70 animate-ping"></div>
      
      <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <Dumbbell className="w-8 h-8 text-blue-600" />
        Add a New Workout
        <Target className="w-8 h-8 text-green-600" />
      </h3>

      <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
        <Target className="w-4 h-4 text-blue-500" />
        Exercise Title:
      </label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        placeholder="Enter workout title"
        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />

      <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
        <Weight className="w-4 h-4 text-blue-500" />
        Load (kg):
      </label>
      <input
        type="number"
        onChange={(e) => setLoad(e.target.value)}
        value={load}
        placeholder="Enter load in kg"
        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />

      <label className="block text-gray-700 font-semibold mb-2 flex items-center gap-2">
        <RotateCcw className="w-4 h-4 text-blue-500" />
        Reps:
      </label>
      <input
        type="number"
        onChange={(e) => setReps(e.target.value)}
        value={reps}
        placeholder="Enter number of reps"
        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />

      {error && (
        <div className="text-red-500 text-sm mb-4 flex items-center gap-2">
          <AlertCircle className="w-4 h-4" />
          {error}
        </div>
      )}

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center gap-2 justify-center"
      >
        <Plus className="w-5 h-5" />
        Add Workout
      </button>
    </form>
  )
}

export default WorkoutForm
