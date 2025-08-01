import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateRoom() {
  const navigate = useNavigate();
  const [roomType, setRoomType] = useState('public');
  const [roomName, setRoomName] = useState('');

  const createRoom = () => {
    const roomId = Math.random().toString(36).substring(7);
    navigate(`/room/${roomId}`, { 
      state: { 
        roomType,
        roomName,
        isHost: true
      }
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
            Create a Room
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={(e) => { e.preventDefault(); createRoom(); }}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="roomName" className="sr-only">Room Name</label>
              <input
                id="roomName"
                name="roomName"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 dark:text-white rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Room Name"
                value={roomName}
                onChange={(e) => setRoomName(e.target.value)}
              />
            </div>
          </div>

          <div className="flex justify-center space-x-4">
            <button
              type="button"
              onClick={() => setRoomType('public')}
              className={`px-6 py-2 rounded-lg border-2 transition-all duration-300 ${
                roomType === 'public'
                  ? 'bg-blue-500 text-white border-blue-500'
                  : 'border-gray-300 text-gray-700 dark:text-gray-300 dark:border-gray-600'
              }`}
            >
              Public Room
            </button>
            <button
              type="button"
              onClick={() => setRoomType('private')}
              className={`px-6 py-2 rounded-lg border-2 transition-all duration-300 ${
                roomType === 'private'
                  ? 'bg-blue-500 text-white border-blue-500'
                  : 'border-gray-300 text-gray-700 dark:text-gray-300 dark:border-gray-600'
              }`}
            >
              Private Room
            </button>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Create Room
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateRoom; 