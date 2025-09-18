import React from 'react';
import { Music, Trophy, Users, Palette, Globe, Heart, Briefcase, Zap } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const StudentLife = () => {
  const { t } = useLanguage();

  const activities = [
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Athletics",
      description: "Basketball, Football, Swimming, Track & Field, and more",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: <Music className="w-6 h-6" />,
      title: "Performing Arts",
      description: "Choir, Orchestra, Drama Club, and Annual Musical Productions",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Visual Arts",
      description: "Painting, Sculpture, Photography, and Digital Arts",
      color: "bg-pink-100 text-pink-600"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Model UN",
      description: "Developing diplomatic skills and global awareness",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "STEM Club",
      description: "Robotics, Coding, Science Olympiad, and Innovation Projects",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Community Service",
      description: "Local outreach programs and volunteer opportunities",
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Student Government",
      description: "Leadership development and school governance participation",
      color: "bg-indigo-100 text-indigo-600"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Cultural Clubs",
      description: "International Students Club, Heritage Society, Language Clubs",
      color: "bg-teal-100 text-teal-600"
    }
  ];

  const facilities = [
    {
      name: "Modern Library",
      description: "State-of-the-art learning resource center with digital archives"
    },
    {
      name: "Science Laboratories",
      description: "Fully equipped labs for Chemistry, Physics, and Biology"
    },
    {
      name: "Sports Complex",
      description: "Indoor gymnasium, outdoor courts, and swimming pool"
    },
    {
      name: "Arts Center",
      description: "Music rooms, art studios, and performance theater"
    },
    {
      name: "Technology Center",
      description: "Computer labs with latest software and equipment"
    },
    {
      name: "Cafeteria",
      description: "Nutritious meals and comfortable dining environment"
    }
  ];

  return (
    <section id="student-life" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            {t('studentLife.title')}
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {t('studentLife.description')}
          </p>
        </div>

        {/* Activities Grid */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-blue-900 text-center mb-12">
            Extracurricular Activities
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {activities.map((activity, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group cursor-pointer">
                <div className={`w-12 h-12 ${activity.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {activity.icon}
                </div>
                <h4 className="text-lg font-bold text-blue-900 mb-2">{activity.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Campus Life Highlights */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-3xl font-bold text-blue-900 mb-8">Campus Life Highlights</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-blue-900 mb-2">House System</h4>
                  <p className="text-gray-700">Students are divided into houses that compete in academics, sports, and service projects, fostering school spirit and healthy competition.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-blue-900 mb-2">Annual Events</h4>
                  <p className="text-gray-700">From Science Fair to Cultural Festival, our calendar is filled with events that showcase student talents and celebrate diversity.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-blue-900 mb-2">Peer Mentorship</h4>
                  <p className="text-gray-700">Older students mentor younger ones, creating a supportive community where everyone feels valued and supported.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white">
            <h4 className="text-2xl font-bold mb-6">Student Testimonial</h4>
            <blockquote className="text-lg italic mb-6 text-blue-100">
              "{t('studentLife.testimonial')}"
            </blockquote>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mr-4">
                <span className="font-bold text-blue-900">SZ</span>
              </div>
              <div>
                <div className="font-semibold">{t('studentLife.testimonial.name')}</div>
                <div className="text-blue-200 text-sm">{t('studentLife.testimonial.grade')}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Facilities */}
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
          <h3 className="text-3xl font-bold text-blue-900 text-center mb-12">
            World-Class Facilities
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-white rounded-lg p-6 hover:shadow-lg transition-all duration-300">
                <h4 className="text-xl font-bold text-blue-900 mb-3">{facility.name}</h4>
                <p className="text-gray-700">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentLife;