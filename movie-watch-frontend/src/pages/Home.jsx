import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      {/* Hero Image Section */}
      <div className="relative w-full h-[30vh]">
        <img
          src="/home.jpg"
          alt="Movie Chat Banner"
          className="w-full h-full object-contain"
          onError={(e) => console.error('Image failed to load:', e)}
        />
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Welcome to Movie Chat
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Watch movies together with friends in real-time. Create a room and invite others to join!
          </p>
          <Link
            to="/create-room"
            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300"
          >
            Create Room
          </Link>
        </div>
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            JOIN A PRIVATE ROOM
          </h2>
          <div className="flex justify-center items-center gap-4">
            <input 
              type="text" 
              placeholder="Enter code" 
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
            />
            <button className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-300">
              Join
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home; 