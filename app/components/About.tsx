'use client';

import { Users, Target, Globe, Award, MapPin, Shield, Clock } from 'lucide-react';

export default function About() {
  const services = [
    { title: 'Visa Consultation', icon: MapPin },
    { title: 'Document Processing', icon: Shield },
    { title: 'Expert Team', icon: Users },
    { title: '98% Approval Rate', icon: Target },
  ];

  return (
    <section id="about" className="py-16 px-4 bg-linear-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#084B73] mb-5">
            About RiserX Consultancy
          </h2>
          <div className="w-24 h-1 bg-[#084B73] mx-auto mb-5"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your trusted partner in making global relocation dreams a reality
          </p>
        </div>

        {/* Main Content Area */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Left Column - Services & Stats */}
          <div className="lg:col-span-1 grid grid-cols-1 gap-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl flex items-center align-center p-5 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 border-l-4 border-r-4 border-l-[#084B73] border-r-[#084B73] border border-gray-100"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-linear-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center shadow-sm">
                      <Icon size={22} className="text-black" strokeWidth={2.5} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column - Description */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-r-4 border-l-[#084B73] border-r-[#084B73] border border-gray-100">
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-2 h-12 bg-[#084B73] rounded-full"></div>
                <h3 className="text-3xl font-bold text-gray-900">
                  Leading Immigration Consultancy Since 2014
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-5 text-lg">
                RiserX Consultancy is a premier immigration and visa consultancy firm dedicated to helping 
                individuals and families achieve their dreams of living, working, or studying abroad. With 
                over a decade of experience, we have successfully guided thousands of clients through complex 
                immigration processes.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                Our team of certified immigration consultants brings extensive knowledge of visa regulations, 
                documentation requirements, and application procedures across multiple countries. We pride 
                ourselves on our personalized approach, ensuring each client receives tailored guidance based 
                on their unique circumstances and goals.
              </p>
              <p className="text-gray-600 leading-relaxed">
                From initial consultation to post-arrival support, we are committed to making your relocation 
                journey smooth, stress-free, and successful. Trust RiserX to turn your international aspirations 
                into reality.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
