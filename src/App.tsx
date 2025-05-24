import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Solutions from './components/Solutions';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <About />
      <Solutions />
      <Benefits />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;