import { Heart, Stethoscope, Shield, Users, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "About BIOCYTE Organics",
      description: "Committed to delivering better health and happier society through innovative pharmaceutical solutions.",
      image: "https://imgs.search.brave.com/Ahi5nrSpFDikp7JkDTxwuz7YZhjbKWAChhoesY8XjHk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly91cy4x/MjNyZi5jb20vNDUw/d20vbWVscG9tZW4v/bWVscG9tZW4yMDEw/L21lbHBvbWVuMjAx/MDAwOTQ1LzE1NzI5/NzQ4Ny1ibHVlLXN1/cmdpY2FsLW1hc2tz/LW92ZXJoZWFkLXZp/ZXctZmxhdC1sYXku/anBnP3Zlcj02",
      color: "from-red-500 to-pink-500",
      ref:"c1"
    },
    {
      icon: Stethoscope,
      title: "Product Portfolio",
      description: "Portfolio of over 35 pharmacy products and equipments for comprehensive healthcare solutions.",
      image: "https://imgs.search.brave.com/9dbXZj0yvd7xW-IutKO8ySOnEhV6DM21p0vh8yaItjI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTMw/ODA5NTIxL3Bob3Rv/L21lZGljaW5lLXBp/bGxzLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1SeUJQZXVG/Zng0V2F2djdMMjBR/MzE2bERmdlZnVG5J/TFZrVzJWSHd1XzlB/PQ",
      color: "from-blue-500 to-cyan-500",
      ref:"c2"
    },
    {
      icon: Shield,
      title: "Quality & Reliability",
      description: "Customers can trust and rely on our products and services with guaranteed quality assurance.",
      image: "https://imgs.search.brave.com/Jh79AOBEL3Te-XwJIodNrM6cZBfzFm0WoGc9s9xcnS4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/Y3JlYXRlLnZpc3Rh/LmNvbS9hcGkvbWVk/aWEvc21hbGwvMTk3/NTUxMjE0L3N0b2Nr/LXBob3RvLWxhYi1j/aGVtaXN0LWNoZWNr/aW5nLWJlYXV0eS1h/bmQtbWFrZS11cC1w/cm9kdWN0cw",
      color: "from-green-500 to-emerald-500",
      ref:"c3"
    },
    {
      icon: Users,
      title: "Our Credentials",
      description: "Government supplies and certifications from leading healthcare authorities across India.",
      image: "https://imgs.search.brave.com/8nmPxDY6w6IdUw_GRvk0Jwnk5OYPUMlUOGgpu4r2ng4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTA5/ODM2ODU2L3Bob3Rv/L2dsYXNzLWdsb2Jl/LWluZGlhLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1DM1hf/czZZQnJYYUhpT3pE/SndQNFptemlUd3No/MmgxZ2Y4aTBWcmVR/MXhFPQ",
      color: "from-purple-500 to-indigo-500",
      ref:"c4"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-sky-50 -my-18">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-sky-100 to-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6 shadow-lg">
            <Heart className="w-4 h-4 mr-2" />
            Healthcare Excellence
          </div>
          <h2 className="text-5xl font-black text-slate-800 mb-6 leading-tight">
            Our Healthcare Solutions
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">
            Providing comprehensive pharmaceutical services across Uttar Pradesh & Bihar with a focus on quality, 
            reliability, and innovative healthcare solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 overflow-hidden transform hover:-translate-y-3 border border-white/50 lg:w-70 sm:w-[500px] sm:mx-auto"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-115 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0`}></div>
                  <div className="absolute top-6 left-6">
                    <div className={`bg-white/25 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/30 bg-gradient-to-t ${service.color} opacity-90`}>
                      <IconComponent className={`w-8 h-8 text-white `} />
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed font-medium">
                    {service.description}
                  </p>
                  <button className="flex items-center text-blue-600 hover:text-blue-700 font-semibold group-hover:translate-x-2 transition-transform">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Business Territories */}
        <div className="mt-24 bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl shadow-blue-500/10 p-8 lg:p-12 border border-white/50">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-black text-slate-800 mb-6 leading-tight">
                Our Business Territories
              </h3>
              <p className="text-lg text-slate-600 mb-8 font-medium leading-relaxed">
                We proudly serve healthcare needs across major regions in Northern India, 
                ensuring accessible and affordable pharmaceutical solutions.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-gradient-to-r from-sky-500 to-blue-500 rounded-full shadow-lg"></div>
                  <span className="text-slate-700 font-semibold">Uttar Pradesh - Complete Coverage</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full shadow-lg"></div>
                  <span className="text-slate-700 font-semibold">Bihar - Comprehensive Services</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-sky-100 via-blue-100 to-indigo-100 rounded-3xl p-10 text-center shadow-xl border border-blue-200/50">
                <div className="text-7xl font-black bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-600 bg-clip-text text-transparent mb-4">
                  2
                </div>
                <p className="text-slate-700 font-bold text-lg">Major Business Territories</p>
                <p className="text-slate-600 text-sm mt-2 font-medium">Serving millions of patients</p>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-cyan-400 to-sky-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full opacity-20 animate-pulse animation-delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;