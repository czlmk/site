import { useState } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router';
import './App.css'
import Music from './pages/Music';
import Projects from './pages/Projects';
import Home from './pages/Home';

function App() {

  return (
    <Routes>
      <Route path="/Projects" element={<Projects />} />
      <Route path="/Music" element={<Music />} />
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default App
