
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Authentication/Login';
import Register from './Authentication/Register';

function App() {
  return (
    
      <Routes>
        {/* Default route goes to Login */}
        <Route path="/" element={<Login />} />
        
        {/* Authentication routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* For now, redirect everything else to login */}
        <Route path="*" element={<Login />} />
      </Routes>
    
  );
}

export default App;





