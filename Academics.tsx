import React from 'react';
import { BookOpen, Users, Award, Globe, Microscope, Palette } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const Academics = () => {
  const { language } = useLanguage();

  const programs = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: language === 'ar' ? "التعليم الابتدائي" : "Elementary Education",
      grades: "KG - Grade 6",
      description: language === 'ar' ? "بناء أسس قوية في القراءة والكتابة والحساب والمهارات الاجتماعية من خلال تجارب تعلم تفاعلية وعملية." : "Building strong foundations in literacy, numeracy, and social skills through engaging, hands-on learning experiences.",
      highlights: language === 'ar' ? ["فنون اللغة الإنجليزية والعربية", "أساسيات الرياضيات", "استكشاف العلوم", "الفنون الإبداعية"] : ["English & Arabic Language Arts", "Mathematics Foundation", "Science Exploration", "Creative Arts"]
    },
    {
      icon: <Microscope className="w-8 h-8" />,
      title: language === 'ar' ? "المرحلة المتوسطة" : "Middle School",
      grades: "Grades 7-9",
      description: language === 'ar' ? "تطوير التفكير النقدي وإعداد الطلاب للتحديات الأكاديمية المتقدمة مع منهج شامل." : "Developing critical thinking and preparing students for advanced academic challenges with comprehensive curriculum.",
      highlights: language === 'ar' ? ["العلوم المتقدمة", "دمج التكنولوجيا", "تطوير اللغة", "تكوين الشخصية"] : ["Advanced Sciences", "Technology Integration", "Language Development", "Character Formation"]
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: language === 'ar' ? "التعليم الثانوي" : "Secondary Education",
      grades: "Grades 10-12",
      description: language === 'ar' ? "برنامج إعداد للجامعة مع خيارات متقدمة ومسارات متخصصة للاستعداد الجامعي." : "College preparatory program with Jordanian National, IGCSE, and International Baccalaureate programs for university readiness.",
      highlights: language === 'ar' ? ["إعداد الجامعة", "البرامج المتقدمة", "التوجيه المهني", "تطوير القيادة"] : ["Jordanian National Program", "IGCSE Program", "International Baccalaureate", "University Preparation"]
    }
  ];

  const specialPrograms = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: language === 'ar' ? "البكالوريا الدولية" : "International Baccalaureate",
      description: language === 'ar' ? "برنامج البكالوريا الدولية لإعداد الطلاب للقبول الجامعي العالمي" : "IB program preparing students for global university admission"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: language === 'ar' ? "الفنون والموسيقى" : "IGCSE Program",
      description: language === 'ar' ? "برنامج الشهادة الدولية العامة للتعليم الثانوي" : "Cambridge IGCSE program for international recognition"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: language === 'ar' ? "البرنامج الوطني الأردني" : "Jordanian National Program",
      description: language === 'ar' ? "المنهج الوطني الأردني المعتمد من وزارة التربية والتعليم" : "Official Jordanian curriculum accredited by Ministry of Education"
    }
  ];

  return (
    <section id="academics" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            {language === 'ar' ? 'التميز الأكاديمي' : 'Academic Excellence'}
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {language === 'ar' ? 
              'تجمع برامجنا الأكاديمية الصارمة بين القيم التقليدية وطرق التدريس المبتكرة لإعداد الطلاب للنجاح في التعليم العالي وما بعده.' :
              'Our rigorous academic programs combine traditional values with innovative teaching methods to prepare students for success in higher education and beyond.'
            }
          </p>
        </div>

        {/* Academic Programs */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {programs.map((program, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <div className="text-blue-600 group-hover:text-white transition-colors duration-300">
                    {program.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-blue-900 mb-2">{program.title}</h3>
                <p className="text-yellow-600 font-semibold mb-4">{program.grades}</p>
                <p className="text-gray-700 mb-6 leading-relaxed">{program.description}</p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-blue-900 text-sm uppercase tracking-wide">Key Highlights</h4>
                  <ul className="space-y-1">
                    {program.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-gray-600 text-sm flex items-center">
                        <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Special Programs */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-blue-900 mb-4">{language === 'ar' ? 'البرامج الخاصة' : 'Academic Programs'}</h3>
            <p className="text-gray-700 text-lg">
              {language === 'ar' ? 
                'برامج تعليمية متنوعة تلبي احتياجات جميع الطلاب' :
                'Diverse educational programs meeting all student needs'
              }
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {specialPrograms.map((program, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-500 transition-colors duration-300">
                  <div className="text-yellow-600 group-hover:text-white transition-colors duration-300">
                    {program.icon}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-blue-900 mb-3">{program.title}</h4>
                <p className="text-gray-700">{program.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Excellence Stats */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-700">University Acceptance</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">15:1</div>
              <div className="text-gray-700">Student-Teacher Ratio</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
              <div className="text-gray-700">AP Courses Offered</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">85%</div>
              <div className="text-gray-700">Advanced Placement</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academics;