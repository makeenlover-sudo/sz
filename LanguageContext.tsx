import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LanguageContextType {
  language: 'en' | 'ar';
  setLanguage: (lang: 'en' | 'ar') => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Header
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.academics': 'Academics',
    'nav.studentLife': 'Student Life',
    'nav.admissions': 'Admissions',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.tagline': 'Lasallian Education Since 1680',
    'hero.title': 'De La Salle',
    'hero.subtitle': 'Frères',
    'hero.description': 'Empowering minds, nurturing hearts, and building tomorrow\'s leaders through excellence in Catholic education in the heart of Amman.',
    'hero.mission': 'Our mission is to provide human and Christian education to the young, especially the poor, according to the mind of St. John Baptist de La Salle.',
    'hero.apply': 'Apply for Admission',
    'hero.learn': 'Learn More About Us',
    
    // About
    'about.title': 'About Our School',
    'about.description': 'For over seven decades in Jordan, Lasallian schools have been at the forefront of educational innovation, combining academic rigor with moral development.',
    'about.heritage': 'Our Heritage',
    'about.heritage.text1': 'De La Salle Frères in Amman was established in 1950, continuing the educational legacy founded by St. John Baptist de La Salle in 1680. As the patron saint of teachers, St. John Baptist de La Salle founded the Institute of the Brothers of the Christian Schools to provide quality education to children of the poor.',
    'about.heritage.text2': 'Our school in Amman has been serving the Jordanian community for over 70 years, providing holistic education that nurtures both academic excellence and character development. We are part of a global network of Lasallian institutions spanning across six continents.',
    'about.heritage.text3': 'Today, we continue this mission by offering world-class education rooted in Gospel values, preparing our students to become ethical leaders and responsible global citizens.',
    'about.mission': 'Our Mission',
    'about.mission.text': 'To provide human and Christian education to the young, especially the poor, according to the mind of St. John Baptist de La Salle.',
    'about.values': 'Our Core Values',
    'about.stats.years': '75+',
    'about.stats.years.label': 'Years in Jordan',
    'about.stats.students': '1200+',
    'about.stats.students.label': 'Students Enrolled',
    'about.stats.faculty': '85',
    'about.stats.faculty.label': 'Dedicated Faculty Members',
    'about.stats.countries': '80+',
    'about.stats.countries.label': 'Countries with Lasallian Schools',
    
    // Student Life
    'studentLife.title': 'Student Life',
    'studentLife.description': 'Beyond academics, we offer a vibrant campus life that helps students discover their passions, develop leadership skills, and build lifelong friendships.',
    'studentLife.testimonial': 'De La Salle Frères has been my second home since first grade. The teachers genuinely care about our success, and the variety of activities helped me discover my passion for debate and public speaking. I\'m now confident and ready for university!',
    'studentLife.testimonial.name': 'Saif Zurekat',
    'studentLife.testimonial.grade': 'Grade 12 Student',
    
    // Contact
    'contact.address': 'Ar-Razi St. 66, Jabal Al-Hussein, Amman, Jordan',
    'contact.phone': '(06) 566 6428',
    'contact.email': 'info@delasalle-amman.edu.jo',
    
    // Footer
    'footer.founded': 'Founded in 1950',
    'footer.accredited': 'Accredited by the Ministry of Education, Jordan',
    'footer.member': 'Member of Lasallian Schools Network'
  },
  ar: {
    // Header
    'nav.home': 'الرئيسية',
    'nav.about': 'حولنا',
    'nav.academics': 'الأكاديميات',
    'nav.studentLife': 'حياة الطلاب',
    'nav.admissions': 'القبول',
    'nav.contact': 'اتصل بنا',
    
    // Hero
    'hero.tagline': 'التعليم اللاسالي منذ ١٦٨٠',
    'hero.title': 'دي لا سال',
    'hero.subtitle': 'الإخوة',
    'hero.description': 'تمكين العقول وتنمية القلوب وبناء قادة الغد من خلال التميز في التعليم الكاثوليكي في قلب عمان.',
    'hero.mission': 'مهمتنا هي توفير التعليم الإنساني والمسيحي للشباب، وخاصة الفقراء، وفقاً لفكر القديس يوحنا المعمدان دي لا سال.',
    'hero.apply': 'تقدم للقبول',
    'hero.learn': 'تعرف علينا أكثر',
    
    // About
    'about.title': 'حول مدرستنا',
    'about.description': 'لأكثر من سبعة عقود في الأردن، كانت المدارس اللاسالية في المقدمة في الابتكار التعليمي، حيث تجمع بين الصرامة الأكاديمية والتنمية الأخلاقية.',
    'about.heritage': 'تراثنا',
    'about.heritage.text1': 'تأسست مدرسة دي لا سال الإخوة في عمان عام ١٩٥٠، مواصلة الإرث التعليمي الذي أسسه القديس يوحنا المعمدان دي لا سال عام ١٦٨٠. كقديس شفيع للمعلمين، أسس القديس يوحنا المعمدان دي لا سال معهد إخوة المدارس المسيحية لتوفير تعليم عالي الجودة لأطفال الفقراء.',
    'about.heritage.text2': 'تخدم مدرستنا في عمان المجتمع الأردني لأكثر من ٧٠ عاماً، وتوفر تعليماً شاملاً ينمي التميز الأكاديمي وتطوير الشخصية. نحن جزء من شبكة عالمية من المؤسسات اللاسالية تمتد عبر ست قارات.',
    'about.heritage.text3': 'اليوم، نواصل هذه المهمة من خلال تقديم تعليم عالمي المستوى متجذر في القيم الإنجيلية، وإعداد طلابنا ليصبحوا قادة أخلاقيين ومواطنين عالميين مسؤولين.',
    'about.mission': 'مهمتنا',
    'about.mission.text': 'توفير التعليم الإنساني والمسيحي للشباب، وخاصة الفقراء، وفقاً لفكر القديس يوحنا المعمدان دي لا سال.',
    'about.values': 'قيمنا الأساسية',
    'about.stats.years': '٧٥+',
    'about.stats.years.label': 'عاماً في الأردن',
    'about.stats.students': '١٢٠٠+',
    'about.stats.students.label': 'طالب مسجل',
    'about.stats.faculty': '٨٥',
    'about.stats.faculty.label': 'عضو هيئة تدريس مخلص',
    'about.stats.countries': '٨٠+',
    'about.stats.countries.label': 'دولة بها مدارس لاسالية',
    
    // Student Life
    'studentLife.title': 'حياة الطلاب',
    'studentLife.description': 'بالإضافة إلى الأكاديميات، نقدم حياة جامعية نابضة بالحياة تساعد الطلاب على اكتشاف شغفهم وتطوير مهارات القيادة وبناء صداقات تدوم مدى الحياة.',
    'studentLife.testimonial': 'كانت مدرسة دي لا سال الإخوة بيتي الثاني منذ الصف الأول. المعلمون يهتمون حقاً بنجاحنا، وتنوع الأنشطة ساعدني على اكتشاف شغفي بالمناقشة والخطابة. أنا الآن واثق ومستعد للجامعة!',
    'studentLife.testimonial.name': 'سيف زريقات',
    'studentLife.testimonial.grade': 'طالب الصف الثاني عشر',
    
    // Contact
    'contact.address': 'شارع الرازي ٦٦، جبل الحسين، عمان، الأردن',
    'contact.phone': '(٠٦) ٥٦٦ ٦٤٢٨',
    'contact.email': 'info@delasalle-amman.edu.jo',
    
    // Footer
    'footer.founded': 'تأسست عام ١٩٥٠',
    'footer.accredited': 'معتمدة من وزارة التربية والتعليم، الأردن',
    'footer.member': 'عضو في شبكة المدارس اللاسالية'
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'en' | 'ar'>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div className={language === 'ar' ? 'rtl' : 'ltr'} dir={language === 'ar' ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};