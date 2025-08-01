import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import CreateRoom from './pages/CreateRoom';
import Room from './pages/Room';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/create-room" element={<CreateRoom />} />
            <Route path="/room/:roomId" element={<Room />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
