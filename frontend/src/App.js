import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Registration';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <Router>
      <div className="container">
        <h1 className="text-center mt-4">User Authentication</h1>
        <div className="text-center mb-3">
          <button className="btn btn-link" onClick={() => setShowLogin(false)}>
            Register
          </button>
          <button className="btn btn-link" onClick={() => setShowLogin(true)}>
            Login
          </button>
        </div>

        {/* Routes */}
        <Routes>
          <Route path="/" element={showLogin ? <Login /> : <Register />} />
          <Route path='/login' element={<Login/>}/>
          <Route path="/dashboard" element={<Dashboard />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
