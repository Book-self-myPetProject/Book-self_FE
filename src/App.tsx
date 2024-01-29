import React, { useState } from 'react';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import { Home } from './pages/Home/Home';
import { About } from './pages/About/About';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='home' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='*' element={<Navigate to='/home' />} />
        
      </Routes>
    </Router>
  );
}

export default App;
