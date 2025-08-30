import { Users, Award, Target, Building2, GraduationCap, Briefcase, MapPin, Calendar } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const leadership = [
    {
      name: "J. R. S Gaur",
      qualification: "Bachelor of Science",
      experience: "25 Years",
      previousCompanies: "Ranbaxy Laboratories Limited, Glenmark Laboratories Limited, Glenmark Pharmaceuticals Limited"
    },
    {
      name: "Vibhor Tiwari", 
      qualification: "Bachelor of Science, Masters in Business Administration",
      experience: "12 Years",
      previousCompanies: "Biological E. Limited, Maxx Limited"
    },
    {
      name: "Indra Sen Singh",
      qualification: "Bachelor of Science, Diploma in Marketing sponsored by SIDBI",
      experience: "15 Years", 
      previousCompanies: "Dr. Reddy's Laboratories Limited, Maxx Limited"
    }
  ];

  const partners = [
    "CREATIVE MEDICAL SYSTEM GERMANY",
    "PNEUMACARE HEALTH PRIVATE LIMITED"
  ];

const AboutUs = () => {
  const pillRef = useRef()
  const headSpanRef = useRef()
  const headSpanRef1 = useRef()

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-sky-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-2000"></div>
          <div className="scale-75 absolute -bottom-8 left-20 w-72 h-70 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div ref={pillRef} className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-sky-100 to-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6 shadow-lg">
              <Building2 className="w-4 h-4 mr-2" />
              <h5 >About Our Company</h5>
            </div>
            <h1 className="text-6xl lg:text-7xl font-black leading-tight tracking-tight mb-8">
              <span ref={headSpanRef} className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 bg-clip-text text-transparent">
                About
              </span>
              <br />
              <span ref={headSpanRef1} className="bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
                BIOCYTE Organics
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl shadow-blue-500/10 p-8 lg:p-12 border border-white/50">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-black text-slate-800 mb-6 leading-tight">
                  Overview of Biocyte Organics
                </h2>
                <div className="space-y-6 text-slate-600 leading-relaxed">
                  <p className="text-lg font-medium">
                    <strong className="text-slate-800">BIOCYTE Organics Private Limited (BOPL)</strong> is one of the largest mid-sized privately held pharmaceutical companies in India, headquartered at Kanpur, Uttar Pradesh. As a healthcare solutions provider BOPL is focused on providing high quality and affordable treatment.
                  </p>
                  <p className="font-medium">
                    BOPL is an innovative pharmaceutical company that markets a broad range of products and provides services for sleep diseases, respiratory ailment and critical care.
                  </p>
                  <p className="font-medium">
                    BOPL targets key business alliances and is set ideal choice for forming sustainable relationships for International Business, Marketing and Distribution venture delivering value to its customers.
                  </p>
                  <p className="font-medium">
                    BOPL is known for a vision and committed to complete customer care. We are committed to make health affordable to all, effective use of modern technology and seamless delivery of products and services. BOPL also has a powerful element of corporate social responsibility and is in mission to create healthier society BOPL is working on Anti Tobacco as well as an HIV / AIDS awareness initiatives.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-sky-100 via-blue-100 to-indigo-100 rounded-3xl p-10 shadow-xl border border-blue-200/50">
                  <div className="grid grid-cols-2 gap-8">
                    <div className="text-center">
                      <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg mb-4">
                        <Target className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                        <div className="text-3xl font-black bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">35+</div>
                        <p className="text-slate-700 font-semibold text-sm">Products</p>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg mb-4">
                        <Award className="w-12 h-12 text-indigo-600 mx-auto mb-3" />
                        <div className="text-3xl font-black bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">25+</div>
                        <p className="text-slate-700 font-semibold text-sm">Years Experience</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-6">
                    <p className="text-slate-700 font-bold text-lg">Committed to Healthcare Excellence</p>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-cyan-400 to-sky-500 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full opacity-20 animate-pulse animation-delay-1000"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-100 to-blue-100 text-indigo-800 rounded-full text-sm font-semibold mb-6 shadow-lg">
              <Users className="w-4 h-4 mr-2" />
              Our Leadership Team
            </div>
            <h2 className="text-5xl font-black text-slate-800 mb-6 leading-tight">
              Leadership
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">
              Meet our experienced leadership team driving innovation and excellence in pharmaceutical solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <div
                key={index}
                className="group bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 overflow-hidden transform hover:-translate-y-3 border border-white/50"
              >
                <div className="bg-gradient-to-br from-sky-500 via-blue-500 to-indigo-600 p-8 text-white">
                  <div className="bg-white/20 backdrop-blur-md p-4 rounded-2xl w-fit mx-auto mb-4">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-center mb-2">{leader.name}</h3>
                </div>
                
                <div className="p-8">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <GraduationCap className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-slate-800 text-sm">Academic Qualifications</p>
                        <p className="text-slate-600 text-sm font-medium">{leader.qualification}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Calendar className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-slate-800 text-sm">Total Experience</p>
                        <p className="text-slate-600 text-sm font-medium">{leader.experience}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Briefcase className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-slate-800 text-sm">Previous Companies</p>
                        <p className="text-slate-600 text-sm font-medium leading-relaxed">{leader.previousCompanies}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Partners Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-700 rounded-3xl p-8 lg:p-12 text-white shadow-2xl shadow-blue-500/20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-md text-white rounded-full text-sm font-semibold mb-6 shadow-lg border border-white/30">
                <Building2 className="w-4 h-4 mr-2" />
                Strategic Partnerships
              </div>
              <h2 className="text-4xl font-black mb-6 leading-tight">
                Business / Channel Partners
              </h2>
              <p className="text-sky-100 text-lg font-medium leading-relaxed max-w-2xl mx-auto">
                We collaborate with leading organizations to deliver comprehensive healthcare solutions across multiple markets.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="bg-white/15 backdrop-blur-md rounded-2xl p-8 border border-white/30 shadow-xl hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-center space-x-4">
                    <div className="bg-white/25 backdrop-blur-sm p-4 rounded-2xl">
                      <Building2 className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{partner}</h3>
                      <div className="flex items-center text-sky-200">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span className="text-sm font-medium">Strategic Partner</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-sky-100 font-medium">
                F - 11, 2nd Floor, Fazal Ganj, Kanpur, New Delhi
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;