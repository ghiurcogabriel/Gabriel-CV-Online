import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Experience from './Components/Experience/Experience';
import Education from './Components/Education/Education';
import Skills from './Components/Skills/Skills';
import Training from './Components/Training/Training';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import ParticlesSnow from './Components/Particles/ParticlesSnow';
import Project from './Components/Project/Project';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Profile />
      <Training />
      <Project />
      <Skills />
      <Experience />
      <ParticlesSnow />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
