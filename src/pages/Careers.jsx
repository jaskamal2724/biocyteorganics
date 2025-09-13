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
    <div className="min-h-screen bg-gradient-to-b from-[#F8F3DE] via-[#FDFCF5] to-[#FFFDF8]">
  {/* Hero Section */}
  <section className="relative pt-32 pb-20 overflow-hidden">
    <div className="absolute inset-0">
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#FF2100]/30 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-[#9F8310]/25 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-[#A28808]/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
    </div>

    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#F8F5DE] to-[#FDFCF5] text-[#9F8310] rounded-full text-sm font-semibold mb-6 shadow-lg">
          <Briefcase className="w-4 h-4 mr-2" />
          Join Our Team
        </div>
        <h1 className="text-6xl lg:text-7xl font-black leading-tight tracking-tight mb-8">
          <span className="bg-gradient-to-r from-orange-500 to-black bg-clip-text text-transparent">
            Careers at
          </span>
          <br />
          <span className="bg-gradient-to-r from-[#FF2100] via-[#D91B00] to-[#9F8310] bg-clip-text text-transparent">
            BOPL
          </span>
        </h1>
        <p className="text-xl text-slate-700 leading-relaxed max-w-3xl mx-auto font-medium">
          Join a dynamic team committed to delivering better health and happier society through innovative pharmaceutical solutions.
        </p>
      </div>
    </div>
  </section>

  {/* Culture Section */}
  <section className="py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#FDFCF5]/90 backdrop-blur-xl rounded-3xl shadow-2xl shadow-[#9F8310]/10 p-8 lg:p-12 border border-[#EADFC4]/50 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-slate-800 mb-6 leading-tight">
            Culture at BOPL
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed max-w-4xl mx-auto font-medium">
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
                <div className="bg-gradient-to-br from-[#FFF6E6] to-[#F8F3DE] p-6 rounded-2xl shadow-lg group-hover:from-[#FFECD1] group-hover:to-[#FFF8E1] transition-all duration-300 mb-4">
                  <IconComponent className="w-12 h-12 text-[#9F8310] mx-auto" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{value.title}</h3>
                <p className="text-slate-700 font-medium leading-relaxed">{value.description}</p>
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
        <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#F8F5DE] to-[#FDFCF5] text-[#9F8310] rounded-full text-sm font-semibold mb-6 shadow-lg">
          <Users className="w-4 h-4 mr-2" />
          Career Opportunities
        </div>
        <h2 className="text-5xl font-black text-slate-800 mb-6 leading-tight">
          Who can join BOPL?
        </h2>
        <p className="text-xl text-slate-700 max-w-3xl mx-auto font-medium leading-relaxed">
          We welcome talented individuals from various backgrounds to join our mission of improving healthcare.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {opportunities.map((opportunity, index) => {
          const IconComponent = opportunity.icon;
          return (
            <div
              key={index}
              className="group bg-[#FDFCF5]/90 backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-[#9F8310]/20 transition-all duration-500 overflow-hidden transform hover:-translate-y-3 border border-[#EADFC4]/50 text-center"
            >
              <div className=" p-8 text-white">
                <div className="bg-white/20 backdrop-blur-md p-4 rounded-2xl w-fit mb-4 mx-auto">
                  <IconComponent className="text-[#A28808] w-12 h-12 " />
                </div>
                <h3 className="text-2xl font-black mb-2 text-slate-700">{opportunity.title}</h3>
                <span className="inline-block bg-white/25 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-[#FF0000]">
                  {opportunity.category}
                </span>
              </div>
              
              <div className="p-8">
                <p className="text-slate-700 leading-relaxed font-medium">
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
      <div className="border border-[#9F8310] rounded-3xl p-8 lg:p-12 text-white shadow-2xl shadow-[#9F8310]/20">
        <div className="text-center mb-12">
          <div className="border border-[#9F8310] inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-md text-[#FF0000] rounded-full text-sm font-semibold mb-6 shadow-lg ">
            <Mail className="w-4 h-4 mr-2" />
            Get In Touch
          </div>
          <h2 className="text-4xl font-black mb-6 leading-tight text-[#A28808]">
            Ready to Join Our Team?
          </h2>
          <p className="text-lg font-medium leading-relaxed max-w-2xl mx-auto mb-8 text-slate-700">
            We're always looking for talented individuals who share our passion for healthcare excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/15 backdrop-blur-md rounded-2xl p-8  shadow-xl border border-[#9F8310]">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-white/25 backdrop-blur-sm p-4 rounded-2xl border border-[#9F8310]">
                <Mail className="w-8 h-8 text-[#FF0000]" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-[#A28808]">Send Your CV</h3>
                <p className="text-sm font-medium text-slate-700">Current Openings Available</p>
              </div>
            </div>
            <p className="font-medium mb-4 text-[#FF0000]">
              Following are the current openings. Please send your CV to our HR team at:
            </p>
            <a 
              href="mailto:hr@biocyteorganics.com" 
              className="font-bold text-slate-700 hover:text-[#FFD9B3] transition-colors"
            >
              hr@biocyteorganics.com
            </a>
          </div>

          <div className="bg-white/15 backdrop-blur-md rounded-2xl p-8 border border-[#9F8310] shadow-xl">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-white/25 backdrop-blur-sm p-4 rounded-2xl border border-[#9F8310]">
                <Phone className="w-8 h-8 text-[#FF0000]" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-[#A28808]">Franchise Opportunities</h3>
                <p className="text-sm font-medium text-slate-700">Business Partnership</p>
              </div>
            </div>
            <p className="font-medium mb-4 text-[#FF0000]">
              Wanted Franchisees for various areas of country. Please call:
            </p>
            <a 
              href="tel:+919919002065" 
              className="font-bold text-slate-700 hover:text-[#FFD9B3] transition-colors"
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