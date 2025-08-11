import React from 'react';
import { Dumbbell, LogIn, Sparkles } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg">
            {/* Logo */}
            <a href='/'>
                <div className="text-2xl font-bold flex items-center space-x-2 hover:scale-105 transition-transform duration-200">
                    <Dumbbell className="w-8 h-8 text-yellow-300" />
                    <span>WorkoutBuddy</span>
                    <Sparkles className="w-6 h-6 text-pink-300" />
                </div>
            </a>

            {/* Login Button */}
            <button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 px-6 py-3 rounded-full text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                <LogIn className="w-5 h-5" />
                <span>Login</span>
            </button>
        </nav>
    );
};

export default Navbar;