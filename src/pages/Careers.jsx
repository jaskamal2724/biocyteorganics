import { Users, Briefcase, GraduationCap, Mail, Phone, Target, Heart, Lightbulb, Award } from 'lucide-react';

const Careers = () => {

  const opportunities = [
    {
      category: "Students",
      title: "Live Project Experience",
      description: "Work on live projects to learn corporate functions that will help you later in your careers. Stand a chance to win Pre Placement Offers (PPO).",
      icon: GraduationCap,
      color: "from-blue-500 to-cyan-500"
    },
    {
      category: "Campus Recruitment",
      title: "Comprehensive Evaluation",
      description: "We conduct campus recruitments that include a written evaluation followed by a group discussion and a personal interview.",
      icon: Users,
      color: "from-green-500 to-emerald-500"
    },
    {
      category: "Express Interest",
      title: "Join Our Team",
      description: "If you are keen to work with us, send us your CV with covering note and subject 'I am interested in working with BOPL' at hr@biocyteorganics.com.",
      icon: Mail,
      color: "from-purple-500 to-indigo-500"
    },
    {
      category: "Franchises",
      title: "Business Opportunities",
      description: "Wanted Franchisees for various areas of country. Please Call +91-9919002065-66",
      icon: Briefcase,
      color: "from-orange-500 to-red-500"
    }
  ];

  const cultureValues = [
    {
      icon: Target,
      title: "Vision Driven",
      description: "BOPL is driven by a vision and committed to complete customer care."
    },
    {
      icon: Heart,
      title: "Community Focus",
      description: "We help each other emphasizing on self learning curve in a community environment."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We believe in commitment, focus on using modern technology and seamless delivery."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We think big and strive for excellence in everything we do."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-sky-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-sky-100 to-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6 shadow-lg">
              <Briefcase className="w-4 h-4 mr-2" />
              Join Our Team
            </div>
            <h1 className="text-6xl lg:text-7xl font-black leading-tight tracking-tight mb-8">
              <span className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 bg-clip-text text-transparent">
                Careers at
              </span>
              <br />
              <span className="bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
                BOPL
              </span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto font-medium">
              Join a dynamic team committed to delivering better health and happier society through innovative pharmaceutical solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl shadow-blue-500/10 p-8 lg:p-12 border border-white/50 mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black text-slate-800 mb-6 leading-tight">
                Culture at BOPL
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed max-w-4xl mx-auto font-medium">
                We may be a small team but we think big. It is like a community here, we help each other emphasizing on self learning curve. 
                BOPL is driven by a vision and committed to complete customer care. We believe in commitment, focus on using modern technology 
                and seamless delivery of products and services. If you think you have or you can develop these qualities you are the correct person to be in BOPL.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {cultureValues.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div
                    key={index}
                    className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300"
                  >
                    <div className="bg-gradient-to-br from-sky-100 to-blue-100 p-6 rounded-2xl shadow-lg group-hover:from-sky-200 group-hover:to-blue-200 transition-all duration-300 mb-4">
                      <IconComponent className="w-12 h-12 text-blue-600 mx-auto" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-3">{value.title}</h3>
                    <p className="text-slate-600 font-medium leading-relaxed">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Who Can Join Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 rounded-full text-sm font-semibold mb-6 shadow-lg">
              <Users className="w-4 h-4 mr-2" />
              Career Opportunities
            </div>
            <h2 className="text-5xl font-black text-slate-800 mb-6 leading-tight">
              Who can join BOPL?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">
              We welcome talented individuals from various backgrounds to join our mission of improving healthcare.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {opportunities.map((opportunity, index) => {
              const IconComponent = opportunity.icon;
              return (
                <div
                  key={index}
                  className=" group bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 overflow-hidden transform hover:-translate-y-3 border border-white/50 text-center"
                >
                  <div className={`bg-[#9fc1f5] p-8 text-white`}>
                    <div className="bg-white/20 backdrop-blur-md p-4 rounded-2xl w-fit mb-4 mx-auto">
                      <IconComponent className="text-slate-600 w-12 h-12 " />
                    </div>
                    <h3 className="text-2xl font-black mb-2">{opportunity.title}</h3>
                    <span className="inline-block bg-white/25 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-slate-700">
                      {opportunity.category}
                    </span>
                  </div>
                  
                  <div className="p-8">
                    <p className="text-slate-600 leading-relaxed font-medium">
                      {opportunity.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#D9E4FF] rounded-3xl p-8 lg:p-12 text-black shadow-2xl shadow-blue-500/20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-md text-black rounded-full text-sm font-semibold mb-6 shadow-lg border border-white/30">
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </div>
              <h2 className="text-slate-600 text-4xl font-black mb-6 leading-tight">
                Ready to Join Our Team?
              </h2>
              <p className="text-slate-600 text-lg font-medium leading-relaxed max-w-2xl mx-auto mb-8">
                We're always looking for talented individuals who share our passion for healthcare excellence.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/15 backdrop-blur-md rounded-2xl p-8 border border-white/30 shadow-xl">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-white/25 backdrop-blur-sm p-4 rounded-2xl">
                    <Mail className="w-8 h-8 text-slate-600" />
                  </div>
                  <div>
                    <h3 className="text-slate-600 text-xl font-bold  mb-2">Send Your CV</h3>
                    <p className="text-slate-600 text-sm font-medium">Current Openings Available</p>
                  </div>
                </div>
                <p className="text-slate-600 font-medium mb-4">
                  Following are the current openings. Please send your CV to our HR team at:
                </p>
                <a 
                  href="mailto:hr@biocyteorganics.com" 
                  className="text-slate-600 font-bold hover:text-sky-200 transition-colors"
                >
                  hr@biocyteorganics.com
                </a>
              </div>

              <div className="bg-white/15 backdrop-blur-md rounded-2xl p-8 border border-white/30 shadow-xl">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="text-slate-600 bg-white/25 backdrop-blur-sm p-4 rounded-2xl">
                    <Phone className="w-8 h-8 " />
                  </div>
                  <div>
                    <h3 className="text-slate-600 text-xl font-bold  mb-2">Franchise Opportunities</h3>
                    <p className="text-slate-600 text-sm font-medium">Business Partnership</p>
                  </div>
                </div>
                <p className="text-slate-600 font-medium mb-4">
                  Wanted Franchisees for various areas of country. Please call:
                </p>
                <a 
                  href="tel:+919919002065" 
                  className="text-slate-600 font-bold hover:text-sky-200 transition-colors"
                >
                  +91-9919002065-66
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;