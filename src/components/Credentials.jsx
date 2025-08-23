import React from 'react';
import { Award, CheckCircle, Building, MapPin } from 'lucide-react';

const Credentials = () => {
  const credentials = [
    { code: "K. G. M. C", location: "LUCKNOW", type: "Medical College" },
    { code: "S. G. P. G. I", location: "LUCKNOW", type: "Institute" },
    { code: "C. G. H. S", location: "KANPUR", type: "Health Scheme" },
    { code: "G. S. V. M. C", location: "KANPUR", type: "Medical College" },
    { code: "IIT", location: "KANPUR", type: "Institute" }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-sky-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-800 rounded-full text-sm font-semibold mb-6 shadow-lg">
            <Award className="w-4 h-4 mr-2" />
            Government Certified
          </div>
          <h2 className="text-5xl font-black text-slate-800 mb-6 leading-tight">
            Our Credentials & Certifications
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">
            Trusted by leading government institutions and healthcare organizations across India.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {credentials.map((credential, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-3xl p-8 hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-sky-100 to-blue-100 p-4 rounded-2xl group-hover:from-sky-200 group-hover:to-blue-200 transition-all duration-300 shadow-lg">
                  <Building className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-black text-slate-800 text-xl mb-3">
                    {credential.code}
                  </h3>
                  <div className="flex items-center text-slate-600 mb-3">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm font-medium">{credential.location}</span>
                  </div>
                  <span className="inline-block bg-gradient-to-r from-indigo-100 to-blue-100 text-indigo-800 text-xs px-3 py-1 rounded-full font-semibold">
                    {credential.type}
                  </span>
                </div>
                <CheckCircle className="w-6 h-6 text-emerald-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Government Supplies Section */}
        <div className="bg-sky-500 rounded-3xl p-8 lg:p-12 text-white shadow-2xl shadow-blue-500/20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-black mb-6 leading-tight">
                Government Supplies Partner
              </h3>
              <p className="text-sky-100 text-lg mb-8 leading-relaxed font-medium">
                We are proud to be a trusted supplier to various government healthcare institutions, 
                providing essential pharmaceutical products and medical equipment to serve public health needs.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-black mb-2">5+</div>
                  <div className="text-sky-200 text-sm font-medium">Government Institutions</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black mb-2">100%</div>
                  <div className="text-sky-200 text-sm font-medium">Compliance Rate</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/15 backdrop-blur-md rounded-3xl p-8 border border-white/30 shadow-xl">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-emerald-400" />
                    <span className="font-semibold">ISO Certified Manufacturing</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-emerald-400" />
                    <span className="font-semibold">GMP Compliant Facilities</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-emerald-400" />
                    <span className="font-semibold">Government Approved Supplier</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-emerald-400" />
                    <span className="font-semibold">Quality Assurance Certified</span>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-white/10 rounded-full animate-pulse animation-delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Credentials;