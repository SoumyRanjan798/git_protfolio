import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Service from './components/Service';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ServiceDetails from './components/ServiceDetail';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/services/:id" element={<ServiceDetails />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
