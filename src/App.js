import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import Landing from './pages/Landing';
import Profile from './pages/Profile'
import Settings from './pages/Settings'
import Pings from './pages/Pings'
import Gambling from './pages/Gambling'
import CarGame from './pages/CarGame'
import Chat from './pages/Chat'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/Landing" element={<Landing />} />
        <Route path="/Chat" element={<Chat />} />
        <Route path="/Gambling" element={<Gambling />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/CarGame" element={<CarGame />} />
        <Route path="/Pings" element={<Pings />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/SignIn" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
