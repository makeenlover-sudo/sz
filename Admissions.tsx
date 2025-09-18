import React, { useState } from 'react';
import { Calendar, FileText, CheckCircle, Clock, Users, Phone, Mail, X } from 'lucide-react';
import { submitAdmissionApplication, validateEmail, validatePhone } from '../lib/supabase';

const Admissions = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    grade: '',
    parentName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [validationErrors, setValidationErrors] = useState<{[key: string]: string}>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Clear validation error for this field when user starts typing
    if (validationErrors[name]) {
      setValidationErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
    
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = (): boolean => {
    const errors: {[key: string]: string} = {};

    // Validate student name
    if (!formData.studentName.trim() || formData.studentName.trim().length < 2) {
      errors.studentName = 'Student name must be at least 2 characters long';
    }

    // Validate parent name
    if (!formData.parentName.trim() || formData.parentName.trim().length < 2) {
      errors.parentName = 'Parent name must be at least 2 characters long';
    }

    // Validate email
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    // Validate phone
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!validatePhone(formData.phone)) {
      errors.phone = 'Please enter a valid phone number (8-15 digits)';
    }

    // Validate grade
    if (!formData.grade) {
      errors.grade = 'Please select a grade level';
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
      console.log('🚀 Starting admission application submission...');
      
      await submitAdmissionApplication({
        student_name: formData.studentName,
        grade: formData.grade,
        parent_name: formData.parentName,
        email: formData.email,
        phone: formData.phone,
        message: formData.message
      });

      console.log('✅ Admission application submitted successfully');
      setSubmitStatus('success');
      
      // Reset form on success
      setFormData({
        studentName: '',
        grade: '',
        parentName: '',
        email: '',
        phone: '',
        message: ''
      });
      
      // Clear any validation errors
      setValidationErrors({});
      
    } catch (error) {
      console.error('❌ Error submitting admission application:', error);
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const admissionSteps = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Submit Application",
      description: "Complete and submit the online application form with required documents."
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Schedule Assessment",
      description: "Attend an assessment session and interview with our admissions team."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Family Meeting",
      description: "Meet with school administrators to discuss your child's educational journey."
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Admission Decision",
      description: "Receive admission decision and complete enrollment procedures."
    }
  ];

  const requirements = [
    "Completed application form",
    "Birth certificate",
    "Previous academic records",
    "Medical records and vaccination certificate",
    "Passport-size photographs",
    "Parent/guardian identification documents"
  ];

  const importantDates = [
    { event: "Early Admission Deadline", date: "January 15, 2025" },
    { event: "Regular Admission Deadline", date: "March 1, 2025" },
    { event: "Assessment Period", date: "March 15-30, 2025" },
    { event: "Admission Results", date: "April 15, 2025" },
    { event: "Registration Period", date: "May 1-31, 2025" }
  ];

  return (
    <section id="admissions" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Admissions
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We welcome students who are eager to learn, grow, and contribute to our 
            vibrant school community. Begin your Lasallian journey today.
          </p>
        </div>

        {/* Admission Process */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-blue-900 text-center mb-12">
            Admission Process
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {admissionSteps.map((step, index) => (
              <div key={index} className="relative text-center">
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors duration-300">
                    <div className="text-blue-600 group-hover:text-white transition-colors duration-300">
                      {step.icon}
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-blue-900 mb-3">{step.title}</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">{step.description}</p>
                </div>
                {index < admissionSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-yellow-500"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Application Form & Requirements */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Application Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">Apply Now</h3>
            
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="font-medium">Application submitted successfully!</span>
                </div>
                <p className="mt-1 text-sm">Thank you for your interest! We will contact you soon to discuss the next steps.</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                <div className="flex items-center">
                  <X className="w-5 h-5 mr-2" />
                  <span className="font-medium">Application Submission Failed</span>
                </div>
                <p className="mt-1 text-sm">{errorMessage}</p>
                {Object.keys(validationErrors).length === 0 && (
                  <p className="mt-1 text-sm">If the problem persists, please contact us directly at admissions@delasalle-amman.edu.jo</p>
                )}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Student Name *
                </label>
                <input
                  type="text"
                  name="studentName"
                  value={formData.studentName}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    validationErrors.studentName ? 'border-red-500 bg-red-50' : 'border-gray-300'
                  }`}
                  placeholder="Enter student's full name"
                  required
                />
                {validationErrors.studentName && (
                  <p className="mt-1 text-sm text-red-600">{validationErrors.studentName}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Grade Level *
                </label>
                <select
                  name="grade"
                  value={formData.grade}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    validationErrors.grade ? 'border-red-500 bg-red-50' : 'border-gray-300'
                  }`}
                  required
                >
                  <option value="">Select Grade</option>
                  <option value="kg">Kindergarten</option>
                  <option value="1">Grade 1</option>
                  <option value="2">Grade 2</option>
                  <option value="3">Grade 3</option>
                  <option value="4">Grade 4</option>
                  <option value="5">Grade 5</option>
                  <option value="6">Grade 6</option>
                  <option value="7">Grade 7</option>
                  <option value="8">Grade 8</option>
                  <option value="9">Grade 9</option>
                  <option value="10">Grade 10</option>
                  <option value="11">Grade 11</option>
                  <option value="12">Grade 12</option>
                </select>
                {validationErrors.grade && (
                  <p className="mt-1 text-sm text-red-600">{validationErrors.grade}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Parent/Guardian Name *
                </label>
                <input
                  type="text"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    validationErrors.parentName ? 'border-red-500 bg-red-50' : 'border-gray-300'
                  }`}
                  placeholder="Enter parent/guardian's full name"
                  required
                />
                {validationErrors.parentName && (
                  <p className="mt-1 text-sm text-red-600">{validationErrors.parentName}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
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
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    validationErrors.phone ? 'border-red-500 bg-red-50' : 'border-gray-300'
                  }`}
                  placeholder="Enter your phone number"
                  required
                />
                {validationErrors.phone && (
                  <p className="mt-1 text-sm text-red-600">{validationErrors.phone}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us about your child's interests or any questions you have..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Submitting Application...
                  </>
                ) : (
                  'Submit Application'
                )}
              </button>
              
              <p className="text-xs text-gray-500 text-center">
                * Required fields. All information will be kept confidential.
              </p>
            </form>
          </div>

          {/* Requirements & Important Dates */}
          <div className="space-y-8">
            {/* Requirements */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Required Documents</h3>
              <ul className="space-y-3">
                {requirements.map((requirement, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    {requirement}
                  </li>
                ))}
              </ul>
            </div>

            {/* Important Dates */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
                <Clock className="w-6 h-6 mr-2 text-yellow-500" />
                Important Dates
              </h3>
              <div className="space-y-4">
                {importantDates.map((date, index) => (
                  <div key={index} className="flex justify-between items-center border-b border-gray-100 pb-2">
                    <span className="text-gray-700 font-medium">{date.event}</span>
                    <span className="text-blue-600 font-semibold">{date.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information for Admissions */}
        <div className="bg-blue-600 rounded-2xl p-8 lg:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-6">Have Questions About Admissions?</h3>
          <p className="text-blue-100 text-lg mb-8">
            Our admissions team is here to help you through every step of the process.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <div className="flex items-center justify-center">
              <Phone className="w-6 h-6 mr-3" />
              <span className="text-lg">+962 6 123 4567</span>
            </div>
            <div className="flex items-center justify-center">
              <Mail className="w-6 h-6 mr-3" />
              <span className="text-lg">admissions@delasalle-amman.edu.jo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admissions;