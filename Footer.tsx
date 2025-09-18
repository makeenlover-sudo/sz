import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const Footer = () => {
  const { t, language } = useLanguage();

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Academics', href: '#academics' },
    { name: 'Student Life', href: '#student-life' },
    { name: 'Admissions', href: '#admissions' },
    { name: 'Contact', href: '#contact' }
  ];

  const resources = [
    { name: 'Parent Portal', href: '#' },
    { name: 'Student Portal', href: '#' },
    { name: 'Faculty Directory', href: '#' },
    { name: 'School Calendar', href: '#' },
    { name: 'News & Events', href: '#' }
  ];

  const policies = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Non-Discrimination Policy', href: '#' },
    { name: 'Safety Guidelines', href: '#' }
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: '#', label: 'Facebook' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter' },
    { icon: <Instagram className="w-5 h-5" />, href: '#', label: 'Instagram' },
    { icon: <Youtube className="w-5 h-5" />, href: '#', label: 'YouTube' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-blue-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* School Information */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-blue-900 font-bold text-xl">DL</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">De La Salle Frères</h3>
                <p className="text-blue-300 text-sm">Amman, Jordan</p>
              </div>
            </div>
            
            <p className="text-blue-200 mb-6 leading-relaxed">
              Providing excellence in Catholic education for over three centuries, 
              nurturing minds and hearts in the Lasallian tradition.
            </p>

            {/* Contact Information */}
            <div className="space-y-3">
              <div className="flex items-center text-blue-200">
                <MapPin className="w-4 h-4 mr-3 flex-shrink-0" />
                <span className="text-sm">{t('contact.address')}</span>
              </div>
              <div className="flex items-center text-blue-200">
                <Phone className="w-4 h-4 mr-3 flex-shrink-0" />
                <span className="text-sm">{t('contact.phone')}</span>
              </div>
              <div className="flex items-center text-blue-200">
                <Mail className="w-4 h-4 mr-3 flex-shrink-0" />
                <span className="text-sm">{t('contact.email')}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-blue-200 hover:text-yellow-400 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Resources</h4>
            <ul className="space-y-3">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a 
                    href={resource.href}
                    className="text-blue-200 hover:text-yellow-400 transition-colors duration-300 text-sm"
                  >
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies & Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Policies</h4>
            <ul className="space-y-3 mb-8">
              {policies.map((policy, index) => (
                <li key={index}>
                  <a 
                    href={policy.href}
                    className="text-blue-200 hover:text-yellow-400 transition-colors duration-300 text-sm"
                  >
                    {policy.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Social Media Links */}
            <div>
              <h5 className="font-semibold mb-4">Follow Us</h5>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-blue-900 transition-all duration-300"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-blue-200 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} {language === 'ar' ? 'دي لا سال الإخوة، عمان. جميع الحقوق محفوظة.' : 'De La Salle Frères, Amman. All rights reserved.'}
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <span className="text-blue-200">{t('footer.accredited')}</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-blue-200">{t('footer.member')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;