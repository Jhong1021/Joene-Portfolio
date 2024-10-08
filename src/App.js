import React from 'react';
import './App.css';
import './index.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
// import Projects from './components/Projects';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Carousel from './components/Carousel';
// import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      {/* <Projects /> */}
      <About />
      <Portfolio />
      <Carousel />
      {/* <Skills /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
