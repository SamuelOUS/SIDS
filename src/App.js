import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './pages/SingIn.js';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<SignIn />} />
          {/* Puedes agregar más rutas aquí */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
