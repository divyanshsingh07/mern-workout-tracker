import { useWorkoutContext } from "../hookes/useWorkoutContext"
import { Target, Weight, RotateCcw, Calendar, Trash2, Trophy } from 'lucide-react'

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutContext()

  const handleClick = async () => {
    try {
      const response = await fetch('/api/workouts/' + workout._id, {
        method: 'DELETE'
      })
      
      if (response.ok) {
        dispatch({ type: 'DELETE_WORKOUT', payload: workout._id })
      } else {
        console.error('Failed to delete workout')
      }
    } catch (error) {
      console.error('Error deleting workout:', error)
    }
  }

  return (
    <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg p-6 border border-gray-200 max-w-md mx-auto hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
      {/* Playful decorative elements */}
      <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"></div>
      <div className="absolute top-1/3 -left-2 w-3 h-3 bg-purple-400 rounded-full opacity-50 group-hover:opacity-80 transition-opacity"></div>
      
      {/* Title */}
      <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
        <Trophy className="w-6 h-6 text-yellow-500" />
        {workout.title}
      </h4>

      {/* Info in a row */}
      <div className="flex justify-between mb-3">
        <p className="text-gray-600 flex items-center gap-2">
          <Weight className="w-4 h-4 text-blue-500" />
          <strong className="text-gray-800">Load (kg): </strong>{workout.load}
        </p>
        <p className="text-gray-600 flex items-center gap-2">
          <RotateCcw className="w-4 h-4 text-green-500" />
          <strong className="text-gray-800">Reps: </strong>{workout.reps}
        </p>
      </div>

      {/* Date */}
      <p className="text-gray-500 text-sm flex items-center gap-2">
        <Calendar className="w-4 h-4 text-purple-500" />
        {new Date(workout.createdAt).toLocaleDateString()}
      </p>
      
      {/* Delete button */}
      <button 
        onClick={handleClick}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors flex items-center gap-2 justify-center"
      >
        <Trash2 className="w-4 h-4" />
        Delete
      </button>
    </div>
  )
}

export default WorkoutDetails
