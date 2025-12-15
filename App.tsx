import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-brand-pink selection:text-white overflow-x-hidden">
      <div className="max-w-[1440px] mx-auto">
        <Navbar />
        <Hero />
        <Stats />
        <Portfolio />
        <Skills />
        <Testimonial />
        <Footer />
      </div>
    </div>
  );
}

export default App;