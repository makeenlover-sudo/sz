import React from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import schoolBuilding from '../assets/school-building.png';

const Hero = () => {
  const { t } = useLanguage();

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home"
      className="min-h-screen relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, rgba(30, 64, 175, 0.95) 0%, rgba(37, 99, 235, 0.9) 50%, rgba(30, 64, 175, 0.95) 100%), url(${schoolBuilding})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Enhanced Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/70 to-blue-900/80"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-white rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border-2 border-yellow-400 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-20 w-40 h-40 border border-white rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-20 right-40 w-28 h-28 border border-yellow-400 rounded-full animate-pulse delay-1500"></div>
        
        {/* Additional decorative elements */}
        <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
        <div className="absolute top-2/3 right-1/4 w-3 h-3 bg-white rounded-full animate-ping delay-700"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-yellow-400 rounded-full animate-ping delay-300"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
        <div className="max-w-4xl">
          <div className="mb-8">
            <div className="inline-flex items-center px-6 py-3 bg-white/15 backdrop-blur-md rounded-full text-white/95 text-sm font-medium mb-8 border border-white/20 shadow-lg">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></span>
              {t('hero.tagline')}
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight drop-shadow-2xl">
              {t('hero.title')}
              <span className="block text-yellow-400 drop-shadow-lg">{t('hero.subtitle')}</span>
            </h1>
            
            <div className="w-32 h-1.5 bg-gradient-to-r from-yellow-400 to-yellow-300 mb-10 rounded-full shadow-lg"></div>
          </div>

          <div className="max-w-2xl">
            <p className="text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed drop-shadow-lg">
              {t('hero.description')}
            </p>
            
            <p className="text-lg text-blue-200 mb-12 leading-relaxed drop-shadow-md">
              {t('hero.mission')}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6">
            <button 
              onClick={() => document.getElementById('admissions')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-4 bg-gradient-to-r from-yellow-500 to-yellow-400 hover:from-yellow-400 hover:to-yellow-300 text-blue-900 font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-yellow-500/25 border-2 border-yellow-300"
            >
              {t('hero.apply')}
            </button>
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-10 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-blue-900 transition-all duration-300 backdrop-blur-sm shadow-xl hover:shadow-2xl"
            >
              {t('hero.learn')}
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 hover:text-white transition-all duration-300 animate-bounce hover:scale-110 p-2 rounded-full hover:bg-white/10"
      >
        <ChevronDown size={36} className="drop-shadow-lg" />
      </button>
    </section>
  );
};

export default Hero;