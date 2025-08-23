import { Pill, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-600 p-3 rounded-2xl shadow-lg">
                <Pill className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-black">BOPL</h3>
                <p className="text-slate-400 text-sm font-medium">Life • Health • Happiness</p>
              </div>
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed max-w-md font-medium">
              BIOCYTE Organics Private Limited is one of India's largest mid-sized pharmaceutical companies, 
              committed to providing innovative healthcare solutions and affordable treatments.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-slate-800 p-3 rounded-xl hover:bg-gradient-to-r hover:from-sky-500 hover:to-blue-600 transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-slate-800 p-3 rounded-xl hover:bg-gradient-to-r hover:from-sky-500 hover:to-blue-600 transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-slate-800 p-3 rounded-xl hover:bg-gradient-to-r hover:from-sky-500 hover:to-blue-600 transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="bg-slate-800 p-3 rounded-xl hover:bg-gradient-to-r hover:from-sky-500 hover:to-blue-600 transition-all duration-300 transform hover:-translate-y-1 shadow-lg">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-300 hover:text-sky-400 transition-colors font-medium hover:translate-x-1 transform duration-200 inline-block">Homepage</a></li>
              <li><a href="#" className="text-slate-300 hover:text-sky-400 transition-colors font-medium hover:translate-x-1 transform duration-200 inline-block">About Us</a></li>
              <li><a href="#" className="text-slate-300 hover:text-sky-400 transition-colors font-medium hover:translate-x-1 transform duration-200 inline-block">Products & Services</a></li>
              <li><a href="#" className="text-slate-300 hover:text-sky-400 transition-colors font-medium hover:translate-x-1 transform duration-200 inline-block">Careers</a></li>
              <li><a href="#" className="text-slate-300 hover:text-sky-400 transition-colors font-medium hover:translate-x-1 transform duration-200 inline-block">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-sky-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-slate-300 font-medium">Kanpur, Uttar Pradesh</p>
                  <p className="text-slate-400 text-sm">India</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-sky-400" />
                <p className="text-slate-300 font-medium">+91-9999580327</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-sky-400" />
                <p className="text-slate-300 font-medium">sales@infolancers.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm mb-4 md:mb-0 font-medium">
              © Copyright 2025. Biocyte Organics Private Limited. All Rights Reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-sky-400 transition-colors font-medium">Privacy Policy</a>
              <a href="#" className="text-slate-400 hover:text-sky-400 transition-colors font-medium">Terms of Service</a>
              <a href="#" className="text-slate-400 hover:text-sky-400 transition-colors font-medium">Site Map</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;