import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, CheckCircle, X } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { submitContactMessage, validateEmail } from '../lib/supabase';

const Contact = () => {
  const { t, language } = useLanguage();

  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [validationErrors, setValidationErrors] = useState<{[key: string]: string}>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Clear validation error for this field when user starts typing
    if (validationErrors[name]) {
      setValidationErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
    
    setContactForm({
      ...contactForm,
      [name]: value
    });
  };

  const validateForm = (): boolean => {
    const errors: {[key: string]: string} = {};

    // Validate name
    if (!contactForm.name.trim() || contactForm.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters long';
    }

    // Validate email
    if (!contactForm.email.trim()) {
      errors.email = 'Email is required';
    } else if (!validateEmail(contactForm.email)) {
      errors.email = 'Please enter a valid email address';
    }

    // Validate subject
    if (!contactForm.subject) {
      errors.subject = 'Please select a subject';
    }

    // Validate message
    if (!contactForm.message.trim() || contactForm.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters long';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset previous states
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    // Validate form before submission
    if (!validateForm()) {
      setIsSubmitting(false);
      setSubmitStatus('error');
      setErrorMessage('Please fix the validation errors below');
      return;
    }

    try {
      console.log('🚀 Starting contact message submission...');
      
      await submitContactMessage(contactForm);
      
      console.log('✅ Contact message submitted successfully');
      setSubmitStatus('success');
      
      // Reset form on success
      setContactForm({ 
        name: '', 
        email: '', 
        subject: '', 
        message: '' 
      });
      
      // Clear any validation errors
      setValidationErrors({});
      
    } catch (error) {
      console.error('❌ Error submitting contact message:', error);
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: language === 'ar' ? "عنوان المدرسة" : "School Address",
      details: [t('contact.address').split(', ')[0], t('contact.address').split(', ').slice(1).join(', ')],
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: language === 'ar' ? "أرقام الهاتف" : "Phone Numbers",
      details: [`${language === 'ar' ? 'الرئيسي' : 'Main'}: ${t('contact.phone')}`, `${language === 'ar' ? 'القبول' : 'Admissions'}: ${t('contact.phone')}`],
      color: "bg-green-100 text-green-600"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: language === 'ar' ? "عناوين البريد الإلكتروني" : "Email Addresses",
      details: [t('contact.email'), "admissions@delasalle-amman.edu.jo"],
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: language === 'ar' ? "ساعات العمل" : "Office Hours",
      details: [
        language === 'ar' ? "الاثنين - الجمعة: 7:30 ص - 3:30 م" : "Monday - Friday: 7:30 AM - 3:30 PM", 
        language === 'ar' ? "السبت: 8:00 ص - 12:00 م" : "Saturday: 8:00 AM - 12:00 PM"
      ],
      color: "bg-yellow-100 text-yellow-600"
    }
  ];

  const departments = [
    { name: "General Inquiry", email: "info@delasalle-amman.edu.jo" },
    { name: "Admissions Office", email: "admissions@delasalle-amman.edu.jo" },
    { name: "Academic Affairs", email: "academics@delasalle-amman.edu.jo" },
    { name: "Student Services", email: "students@delasalle-amman.edu.jo" },
    { name: "Parent Relations", email: "parents@delasalle-amman.edu.jo" }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We're here to answer your questions and help you become part of the 
            De La Salle Frères family. Get in touch with us today.
          </p>
        </div>

        {/* Contact Information Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 group">
              <div className={`w-16 h-16 ${info.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {info.icon}
              </div>
              <h3 className="text-lg font-bold text-blue-900 mb-3">{info.title}</h3>
              <div className="space-y-1">
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-700 text-sm">{detail}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form and Map */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <MessageCircle className="w-8 h-8 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-blue-900">Send us a Message</h3>
            </div>
            
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="font-medium">Message received successfully!</span>
                </div>
                <p className="mt-1 text-sm">Thank you for contacting us! Your message has been received and we will get back to you within 24 hours.</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                <div className="flex items-center">
                  <X className="w-5 h-5 mr-2" />
                  <span className="font-medium">Message Submission Failed</span>
                </div>
                <p className="mt-1 text-sm">{errorMessage}</p>
                {Object.keys(validationErrors).length === 0 && (
                  <p className="mt-1 text-sm">If the problem persists, please contact us directly at {t('contact.email')}</p>
                )}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={contactForm.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    validationErrors.name ? 'border-red-500 bg-red-50' : 'border-gray-300'
                  }`}
                  placeholder="Enter your full name"
                  required
                />
                {validationErrors.name && (
                  <p className="mt-1 text-sm text-red-600">{validationErrors.name}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={contactForm.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    validationErrors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'
                  }`}
                  placeholder="Enter your email address"
                  required
                />
                {validationErrors.email && (
                  <p className="mt-1 text-sm text-red-600">{validationErrors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                  name="subject"
                  value={contactForm.subject}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    validationErrors.subject ? 'border-red-500 bg-red-50' : 'border-gray-300'
                  }`}
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="admissions">Admissions Inquiry</option>
                  <option value="academics">Academic Programs</option>
                  <option value="student-life">Student Life & Activities</option>
                  <option value="general">General Information</option>
                  <option value="other">Other</option>
                </select>
                {validationErrors.subject && (
                  <p className="mt-1 text-sm text-red-600">{validationErrors.subject}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={contactForm.message}
                  onChange={handleInputChange}
                  rows={6}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    validationErrors.message ? 'border-red-500 bg-red-50' : 'border-gray-300'
                  }`}
                  placeholder="Please provide as much detail as possible..."
                  required
                ></textarea>
                {validationErrors.message && (
                  <p className="mt-1 text-sm text-red-600">{validationErrors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </button>
              
              <p className="text-xs text-gray-500 text-center">
                * Required fields. We'll respond within 24 hours.
              </p>
            </form>
          </div>

          {/* Map and Department Contacts */}
          <div className="space-y-8">
            {/* Interactive Map Placeholder */}
            <div className="bg-gray-200 rounded-2xl p-8 text-center">
              <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-700 mb-2">{language === 'ar' ? 'اعثر علينا' : 'Find Us'}</h3>
              <p className="text-gray-600 mb-4">
                {language === 'ar' ? 
                  'تقع في قلب عمان، يمكن الوصول إليها بسهولة بوسائل النقل العام' :
                  'Located in Jabal Al-Hussein, Amman, easily accessible by public transportation'
                }
              </p>
              <div className="bg-blue-600 text-white p-4 rounded-lg">
                <p className="font-semibold">{t('contact.address').split(', ')[0]}</p>
                <p>{t('contact.address').split(', ').slice(1).join(', ')}</p>
              </div>
              <button className="mt-4 text-blue-600 hover:text-blue-800 font-medium transition-colors">
                {language === 'ar' ? 'احصل على الاتجاهات' : 'Get Directions'}
              </button>
            </div>

            {/* Department Contacts */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-blue-900 mb-6">Department Contacts</h3>
              <div className="space-y-4">
                {departments.map((dept, index) => (
                  <div key={index} className="flex justify-between items-center border-b border-gray-100 pb-3">
                    <span className="font-medium text-gray-700">{dept.name}</span>
                    <a 
                      href={`mailto:${dept.email}`}
                      className="text-blue-600 hover:text-blue-800 text-sm transition-colors"
                    >
                      {dept.email}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Join Our Community?</h3>
          <p className="text-blue-100 text-lg mb-8">
            Take the first step towards your child's exceptional educational journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('admissions')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-semibold rounded-lg transition-colors duration-300"
            >
              Apply Now
            </button>
            <button 
              onClick={() => window.open('tel:+96261234567')}
              className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300"
            >
              Call Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;