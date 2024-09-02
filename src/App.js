<<<<<<< HEAD
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Tools from "./components/Tools";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";
import "./index.css";

function App() {
  return (
    <div className="App">
=======
import React from 'react'
import './App.css';
import './index.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
>>>>>>> 860d077ad12e086a8eb55c502443a4f603030ec5
      <Navbar />
      <Home />
      <Projects />
      <About />
<<<<<<< HEAD
      <Tools />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
=======
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
>>>>>>> 860d077ad12e086a8eb55c502443a4f603030ec5
