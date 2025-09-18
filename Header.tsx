import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import headerBackground from '../assets/header-background.png';
import logoImage from '../assets/image copy.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-xl border-b border-blue-100' 
          : 'backdrop-blur-sm shadow-lg'
      }`}
      style={!isScrolled ? {
        background: `linear-gradient(135deg, rgba(30, 64, 175, 0.9) 0%, rgba(37, 99, 235, 0.85) 50%, rgba(30, 64, 175, 0.9) 100%), url(${headerBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      } : {}}
    >
      {/* Background Pattern Overlay */}
      {!isScrolled && (
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-2 left-10 w-16 h-16 border border-yellow-400 rounded-full animate-pulse"></div>
          <div className="absolute top-8 right-20 w-12 h-12 border border-white rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-2 left-1/4 w-8 h-8 border border-yellow-400 rounded-full animate-pulse delay-500"></div>
          <div className="absolute bottom-4 right-1/3 w-10 h-10 border border-white rounded-full animate-pulse delay-1500"></div>
        </div>
      )}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo and School Name */}
          <div className="flex items-center space-x-4 group">
            <div className="relative">
              <img 
                src={logoImage}
                alt="De La Salle Frères Logo" 
                className="h-16 w-16 object-cover rounded-full border-3 border-white/20 shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:border-yellow-400/50"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.nextElementSibling?.classList.remove('hidden');
                }}
              />
              {/* Fallback Logo */}
              <div className="hidden h-16 w-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center shadow-lg border-3 border-white/20">
                <div className="relative">
                  <span className="text-white font-bold text-xl">DL</span>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full"></div>
                </div>
              </div>
            </div>
            
            <div className="hidden sm:block">
              <h1 className={`font-bold text-xl leading-tight transition-all duration-300 ${
                isScrolled 
                  ? 'text-blue-900' 
                  : 'text-white drop-shadow-lg'
              }`}>
                {language === 'ar' ? 'دي لا سال الإخوة' : 'De La Salle Frères'}
              </h1>
              <p className={`text-sm font-medium transition-all duration-300 ${
                isScrolled 
                  ? 'text-blue-700' 
                  : 'text-yellow-200 drop-shadow-md'
              }`}>
                {language === 'ar' ? 'عمان، الأردن' : 'Amman, Jordan'}
              </p>
            </div>
          </div>

          {/* Mobile Logo for Small Screens */}
          <div className="sm:hidden flex items-center">
            <img 
              src={logoImage}
              alt="De La Salle Frères Logo" 
              className="h-12 w-12 object-cover rounded-full border-2 border-white/20 shadow-lg"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                target.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <div className="hidden h-12 w-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center border-2 border-white/20">
              <span className="text-white font-bold text-lg">DL</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {[
              { label: t('nav.home'), id: 'home' },
              { label: t('nav.about'), id: 'about' },
              { label: t('nav.academics'), id: 'academics' },
              { label: t('nav.studentLife'), id: 'student-life' },
              { label: t('nav.admissions'), id: 'admissions' },
              { label: t('nav.contact'), id: 'contact' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-all duration-300 px-3 py-2 rounded-lg relative group ${
                  isScrolled 
                    ? 'text-blue-900 hover:text-blue-600 hover:bg-blue-50' 
                    : 'text-white hover:text-yellow-300 hover:bg-white/10'
                }`}
              >
                {item.label}
                <div className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  isScrolled ? 'bg-blue-600' : 'bg-yellow-400'
                }`}></div>
              </button>
            ))}
          </nav>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
              className={`p-2 rounded-lg transition-all duration-300 flex items-center space-x-2 font-medium ${
                isScrolled 
                  ? 'text-blue-900 hover:bg-blue-100 hover:text-blue-600' 
                  : 'text-white hover:bg-white/10 hover:text-yellow-300'
              }`}
            >
              <Globe size={18} />
              <span className="text-sm hidden md:inline">{language === 'en' ? 'العربية' : 'English'}</span>
            </button>
            
            <button
              className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
                isScrolled 
                  ? 'text-blue-900 hover:bg-blue-100' 
                  : 'text-white hover:bg-white/10'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-4 right-4 bg-white/98 backdrop-blur-md rounded-xl mt-2 p-6 shadow-2xl border border-blue-100 animate-in slide-in-from-top-2 duration-300">
            <nav className="flex flex-col space-y-4">
              {[
                { label: t('nav.home'), id: 'home' },
                { label: t('nav.about'), id: 'about' },
                { label: t('nav.academics'), id: 'academics' },
                { label: t('nav.studentLife'), id: 'student-life' },
                { label: t('nav.admissions'), id: 'admissions' },
                { label: t('nav.contact'), id: 'contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-blue-900 font-medium text-left py-3 px-4 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 border-l-4 border-transparent hover:border-yellow-500"
                >
                  {item.label}
                </button>
              ))}
            </nav>
            
            {/* Mobile Contact Info */}
            <div className="mt-6 pt-4 border-t border-blue-100">
              <div className="text-sm text-blue-700 space-y-1">
                <p className="font-medium">Quick Contact:</p>
                <p>{t('contact.phone')}</p>
                <p>{t('contact.email')}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;