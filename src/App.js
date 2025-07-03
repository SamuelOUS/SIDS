import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout'; // Nuevo layout
import SignIn from './pages/SignIn';
import Landing from './pages/Landing';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Pings from './pages/Pings';
import Gambling from './pages/Gambling';
import Roulette from './pages/Roulette';
import Chat from './pages/Chat';
import ShowMore from './pages/ShowMore';

function App() {
  return (
    <Router>
      <Routes>

        {/* Rutas sin menú */}
        <Route path="/SignIn" element={<SignIn />} />

        {/* Rutas con menú */}
        <Route element={<Layout />}>
          <Route path="/" element={<SignIn />} />
          <Route path="/Landing" element={<Landing />} />
          <Route path="/Chat" element={<Chat />} />
          <Route path="/Gambling" element={<Gambling />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="/Roulette" element={<Roulette />} />
          <Route path="/Pings" element={<Pings />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/ShowMore" element={<ShowMore />} />
        </Route>
        
      </Routes>
    </Router>
  );
}

export default App;
