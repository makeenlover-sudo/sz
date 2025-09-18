import React from 'react';
import { Users, Award, Globe, Heart } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Faith & Service",
      description: "Guided by Christian values and commitment to serving others, especially those in need."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community",
      description: "Building a inclusive community where every student feels valued and supported."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "Pursuing academic excellence while developing the whole person - mind, body, and spirit."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Perspective",
      description: "Preparing students to be responsible global citizens in an interconnected world."
    }
  ];

  const stats = [
    { number: t('about.stats.years'), label: t('about.stats.years.label') },
    { number: t('about.stats.students'), label: t('about.stats.students.label') },
    { number: t('about.stats.faculty'), label: t('about.stats.faculty.label') },
    { number: t('about.stats.countries'), label: t('about.stats.countries.label') }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            {t('about.title')}
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {t('about.description')}
          </p>
        </div>

        {/* History Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h3 className="text-2xl font-bold text-blue-900 mb-6">{t('about.heritage')}</h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                {t('about.heritage.text1')}
              </p>
              <p>
                {t('about.heritage.text2')}
              </p>
              <p>
                {t('about.heritage.text3')}
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
              <h4 className="text-xl font-bold mb-4">{t('about.mission')}</h4>
              <p className="text-blue-100 leading-relaxed mb-6">
                "{t('about.mission.text')}"
              </p>
              <div className="grid grid-cols-2 gap-4">
                {stats.slice(0, 2).map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-yellow-400">{stat.number}</div>
                    <div className="text-sm text-blue-200">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-blue-900 text-center mb-12">{t('about.values')}</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                  <div className="text-blue-600 group-hover:text-white transition-colors duration-300">
                    {value.icon}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-blue-900 mb-3">{value.title}</h4>
                <p className="text-gray-700 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;