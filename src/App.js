import React from 'react'
import './App.css';
import './index.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Projects />
      <About />
    </div>
  )
}

export default App
