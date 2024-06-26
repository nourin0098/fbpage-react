import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loginpage from './components/Loginpage';
import Signuppage from './components/Signuppage';
import './App.css';
import Fbhome from './components/Fbhome';

function App() {
  return (
    <Router>
      <div className="App">
        
        <Routes>
          <Route path="/" element={<Loginpage />} />
          <Route path="/signup" element={<Signuppage />} />
          <Route path="/fbhome" element={<Fbhome />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
