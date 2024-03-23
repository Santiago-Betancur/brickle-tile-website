import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
    <Navbar />
    <div className="App">
      <Routes>
        <Route path="/hero-section" element={<HeroSection />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </div>
    <Footer />
  </Router>
  );
}

export default App;
