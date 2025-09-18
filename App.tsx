import React from 'react';
import { LanguageProvider } from './components/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Academics from './components/Academics';
import StudentLife from './components/StudentLife';
import Admissions from './components/Admissions';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <Hero />
        <About />
        <Academics />
        <StudentLife />
        <Admissions />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;