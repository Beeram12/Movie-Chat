import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { FaSun, FaMoon, FaUserCircle, FaSignOutAlt } from 'react-icons/fa';

function Navbar() {
  const { isDarkMode, toggleTheme } = useTheme();
  const [showDropdown, setShowDropdown] = useState(false);
  const [isLoggedIn] = useState(false); // This should come from your auth context/state

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-gray-900 dark:text-white">
              MovieChat
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
            >
              {isDarkMode ? (
                <FaSun className="h-5 w-5 text-yellow-500" />
              ) : (
                <FaMoon className="h-5 w-5 text-gray-700" />
              )}
            </button>

            {isLoggedIn ? (
              <div className="relative">
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="flex items-center focus:outline-none"
                >
                  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-300 dark:border-gray-600">
                    <FaUserCircle className="w-full h-full text-gray-400" />
                  </div>
                </button>

                {showDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-50">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                      onClick={() => setShowDropdown(false)}
                    >
                      Profile
                    </Link>
                    <Link
                      to="/settings"
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                      onClick={() => setShowDropdown(false)}
                    >
                      Settings
                    </Link>
                    <button
                      className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                      onClick={() => {
                        // Handle logout
                        setShowDropdown(false);
                      }}
                    >
                      <FaSignOutAlt className="inline-block mr-2" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className="group relative border-2 border-black text-black rounded-xl px-6 py-2 flex items-center text-lg overflow-hidden transition-all duration-300 dark:border-white dark:text-white hover:rounded-2xl"
                >
                  <span className="absolute -left-4 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:left-2">
                    →
                  </span>
                  <span className="transition-all duration-300 group-hover:translate-x-4">
                    Login
                  </span>
                </Link>
                <Link
                  to="/signup"
                  className="group relative bg-black text-white border-2 border-black rounded-xl px-6 py-2 flex items-center text-lg overflow-hidden transition-all duration-300 hover:rounded-2xl"
                >
                  <span className="absolute -left-4 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:left-2 text-white">
                    →
                  </span>
                  <span className="transition-all duration-300 group-hover:translate-x-4">
                    Sign Up
                  </span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 