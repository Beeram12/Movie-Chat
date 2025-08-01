import React, { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Room() {
  const { roomId } = useParams();
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [participants, setParticipants] = useState([]);
  const [isHost, setIsHost] = useState(false);
  const [roomType, setRoomType] = useState('public'); // 'public' or 'private'
  const [roomLink, setRoomLink] = useState('');
  const videoRef = useRef(null);

  useEffect(() => {
    // Initialize video chat
    if (videoRef.current) {
      navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        .then(stream => {
          videoRef.current.srcObject = stream;
        })
        .catch(err => console.error('Error accessing media devices:', err));
    }
  }, []);

  const createRoom = () => {
    const newRoomId = Math.random().toString(36).substring(7);
    setRoomLink(`${window.location.origin}/room/${newRoomId}`);
    setIsHost(true);
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const sendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      setMessages([...messages, { text: newMessage, sender: 'You' }]);
      setNewMessage('');
    }
  };

  const removeParticipant = (participantId) => {
    setParticipants(participants.filter(p => p.id !== participantId));
  };

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      {/* Main Content Area */}
      <div className={`flex-1 flex flex-col ${isChatOpen ? 'w-3/4' : 'w-full'}`}>
        {/* Video Grid */}
        <div className="flex-1 grid grid-cols-2 gap-4 p-4">
          {/* Main Video */}
          <div className="col-span-2 bg-black rounded-lg overflow-hidden">
            <video
              ref={videoRef}
              autoPlay
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Participant Videos */}
          {participants.map((participant) => (
            <div
              key={participant.id}
              className="relative bg-gray-800 rounded-lg overflow-hidden cursor-move"
              draggable
            >
              <video
                srcObject={participant.stream}
                autoPlay
                playsInline
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => removeParticipant(participant.id)}
                className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
              >
                ×
              </button>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="bg-white dark:bg-gray-800 p-4 flex justify-between items-center">
          <div className="flex gap-4">
            <button
              onClick={toggleChat}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              {isChatOpen ? 'Close Chat' : 'Open Chat'}
            </button>
            {isHost && (
              <button
                onClick={() => navigator.clipboard.writeText(roomLink)}
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
              >
                Copy Room Link
              </button>
            )}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-300">
            {participants.length}/5 participants
          </div>
        </div>
      </div>

      {/* Chat Sidebar */}
      {isChatOpen && (
        <div className="w-1/4 bg-white dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700">
          <div className="flex flex-col h-full">
            {/* Chat Header */}
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Chat</h2>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.sender === 'You' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-2 ${
                      message.sender === 'You'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <form onSubmit={sendMessage} className="p-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                />
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Room; 