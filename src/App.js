import React from 'react'
import './App.css';
import './index.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Projects />
    </div>
  )
}

export default App
