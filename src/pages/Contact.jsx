import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, Building2, Clock, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: Building2,
      title: "Registered Office / Mailing Address",
      details: "House No. 5, Meerpur Cantt, Kanpur - 208004, Uttar Pradesh",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      title: "Phone Number",
      details: "+91-9919002065",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Phone,
      title: "Telefax Number",
      details: "+91-8429692065",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@biocyteorganics.com",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: MapPin,
      title: "Branch Office",
      details: "2C/50-53, FLAT NO.-403, 4TH FLOOR, AJEET RESIDENCY, VIKAS NAGAR-2 LUCKNOW (Phone) +91-8929692065",
      color: "from-orange-500 to-yellow-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 via-amber-50 to-orange-50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-amber-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-100 to-amber-100 text-[#A28808] rounded-full text-sm font-semibold mb-6 shadow-lg">
              <MessageSquare className="w-4 h-4 mr-2" />
              Get In Touch
            </div>
            <h1 className="text-6xl lg:text-7xl font-black leading-tight tracking-tight mb-8">
              <span className="bg-gradient-to-r from-orange-500 to-black bg-clip-text text-transparent">
                Contact
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-500 to-black bg-clip-text text-transparent">
                BOPL
              </span>
            </h1>
            <p className="text-xl text-slate-700 leading-relaxed max-w-3xl mx-auto font-medium">
              We're here to help with your pharmaceutical needs. Reach out to us for inquiries,
              partnerships, or any questions about our products and services.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-100 to-amber-100 rounded-full text-sm font-semibold mb-6 shadow-lg text-[#FF0000]">
              <MapPin className="w-4 h-4 mr-2" />
              Contact Information
            </div>
            <h2 className="text-5xl font-black text-[#A28808] mb-6 leading-tight">
              Get In Touch With Us
            </h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto font-medium leading-relaxed">
              Multiple ways to reach our team for all your healthcare solution needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div
                  key={index}
                  className="group bg-white/90 backdrop-blur-xl rounded-3xl border border-[#9F8310] shadow-xl hover:shadow-2xl hover:shadow-[#9F8310]/20 transition-all duration-500 overflow-hidden transform hover:-translate-y-3"
                >
                  <div className="bg-yellow-50 p-8 text-slate-700 border-b border-[#9F8310]/40">
                    <div className="bg-white/25 backdrop-blur-md p-4 rounded-2xl w-fit mb-4">
                      <IconComponent className="w-12 h-12 text-[#A28808]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#A28808]">{info.title}</h3>
                  </div>

                  <div className="p-8 bg-[#F8F5DE]">
                    <p className="text-slate-700 leading-relaxed font-medium">
                      {info.details}
                    </p>
                    {info.icon === Mail && (
                      <a
                        href={`mailto:${info.details}`}
                        className="inline-block mt-7 text-[#FF0000] hover:text-[#9F8310] font-semibold transition-colors"
                      >
                        Send Email →
                      </a>
                    )}
                    {info.icon === Phone && (
                      <a
                        href={`tel:${info.details}`}
                        className="inline-block mt-7 text-[#FF0000] hover:text-[#9F8310] font-semibold transition-colors"
                      >
                        Call Now →
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className=" backdrop-blur-xl rounded-3xl border border-[#9F8310] shadow-2xl shadow-[#9F8310]/20 p-8 lg:p-12">
              <div className="mb-8">
                <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-100 to-amber-100 text-[#FF0000] rounded-full text-sm font-semibold mb-6 shadow-lg">
                  <Send className="w-4 h-4 mr-2" />
                  Submit Online Query
                </div>
                <h3 className="text-4xl font-black text-[#A28808] mb-4 leading-tight">
                  Send Us a Message
                </h3>
                <p className="text-slate-700 font-medium leading-relaxed">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-[#A28808] mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 bg-slate-50 border border-[#9F8310]/30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#A28808] focus:border-transparent font-medium transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-[#A28808] mb-2">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 bg-slate-50 border border-[#9F8310]/30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#A28808] focus:border-transparent font-medium transition-all duration-300"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-bold text-[#A28808] mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 bg-slate-50 border border-[#9F8310]/30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#A28808] focus:border-transparent font-medium transition-all duration-300"
                    placeholder="Enter message subject"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-[#A28808] mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-4 bg-slate-50 border border-[#9F8310]/30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#A28808] focus:border-transparent font-medium transition-all duration-300 resize-none"
                    placeholder="Enter your message here..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#D4AF37] via-[#A28808] to-[#9F8310] text-white px-8 py-4 rounded-2xl hover:shadow-2xl hover:shadow-[#9F8310]/25 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center font-semibold text-lg"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Map and Office Hours */}
            <div className="space-y-8">
              {/* Map */}
              <div className=" backdrop-blur-xl rounded-3xl border border-[#9F8310] shadow-2xl shadow-[#9F8310]/20 p-8">
                <h3 className="text-2xl font-black text-[#A28808] mb-6">Our Location</h3>
                <div className="aspect-video bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3570.4234567890123!2d80.3318!3d26.4499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDI2JzU5LjYiTiA4MMKwMTknNTQuNSJF!5e0!3m2!1sen!2sin!4v1234567890123"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="BOPL Office Location"
                  />
                </div>
                <div className="mt-4 p-4 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl border border-[#9F8310]/30">
                  <p className="text-slate-700 font-semibold text-sm">
                    📍 House No. 5, Meerpur Cantt, Kanpur - 208004, Uttar Pradesh
                  </p>
                </div>
              </div>

              {/* Office Hours */}
              <div className="border-1 border-[#9F8310] rounded-3xl p-8 text-white shadow-2xl shadow-[#9F8310]/20">
                <div className="flex items-center mb-6">
                  <div className="bg-white/20 backdrop-blur-md p-4 rounded-2xl mr-4 border-1 border-[#9F8310]">
                    <Clock className="w-8 h-8 text-[#FF0000]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-[#9F8310]">Office Hours</h3>
                    <p className="text-slate-700 font-medium">We're here to help</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-slate-700">Monday - Friday</span>
                    <span className="text-[#FF0000]">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-slate-700">Saturday</span>
                    <span className="text-[#FF0000]">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-slate-700">Sunday</span>
                    <span className="text-[#FF0000]">Closed</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-white/15 backdrop-blur-md rounded-2xl border-1 border-[#9F8310]">
                  <p className="text-sm font-medium text-[#9F8310]">
                    💡 For urgent inquiries outside office hours, please email us and we'll respond within 24 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className=" backdrop-blur-xl rounded-3xl border border-[#9F8310] shadow-2xl shadow-[#9F8310]/20 p-8 lg:p-12 text-center">
            <h3 className="text-4xl font-black text-[#A28808] mb-6 leading-tight">
              Ready to Connect?
            </h3>
            <p className="text-xl text-slate-700 mb-8 font-medium leading-relaxed max-w-2xl mx-auto">
              Whether you're looking for pharmaceutical solutions, partnership opportunities,
              or have questions about our products, we're here to help.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919919002065"
                className="bg-gradient-to-r from-[#D4AF37] via-[#A28808] to-[#9F8310] text-white px-10 py-4 rounded-2xl hover:shadow-2xl hover:shadow-[#9F8310]/25 transform hover:-translate-y-2 transition-all duration-300 flex items-center justify-center font-semibold text-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
              <a
                href="mailto:info@biocyteorganics.com"
                className="border-2 border-[#9F8310] backdrop-blur-sm text-[#FF0000] px-10 py-4 rounded-2xl hover:border-[#A28808] hover:text-[#A28808] hover:bg-white hover:shadow-xl transition-all duration-300 font-semibold text-lg flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>

  );
};

export default Contact;