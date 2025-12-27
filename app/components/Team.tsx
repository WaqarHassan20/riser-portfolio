'use client';

import { Linkedin, Twitter, Mail } from 'lucide-react';

// Icon wrapper for consistent black styling
const IconWrapper = ({ children, ...props }: any) => {
  return <span style={{ color: '#000000' }} {...props}>{children}</span>;
};

export default function Team() {
  const team = [
    {
      name: 'Michael Anderson',
      role: 'CEO & Founder',
      image: 'MA',
      bio: 'Strategic visionary with 20+ years in business consulting',
    },
    {
      name: 'Sarah Williams',
      role: 'Chief Strategy Officer',
      image: 'SW',
      bio: 'Expert in digital transformation and innovation',
    },
    {
      name: 'David Chen',
      role: 'Head of Operations',
      image: 'DC',
      bio: 'Operational excellence and process optimization specialist',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Lead Financial Advisor',
      image: 'ER',
      bio: 'Financial strategy and risk management expert',
    },
    {
      name: 'James Thompson',
      role: 'HR Consulting Director',
      image: 'JT',
      bio: 'Organizational development and talent management',
    },
    {
      name: 'Lisa Park',
      role: 'Marketing Strategist',
      image: 'LP',
      bio: 'Growth marketing and brand positioning specialist',
    },
  ];

  return (
    <section id="team" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#084B73] mb-4">
            Meet Our Expert Consultants
          </h2>
          <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
            Our diverse team of experienced professionals is dedicated to helping 
            your business succeed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              {/* Image Placeholder */}
              <div className="h-64 bg-[#084B73] flex items-center justify-center relative overflow-hidden">
                <div className="text-white text-6xl font-bold opacity-30 absolute">
                  {member.image}
                </div>
                <div className="text-white text-4xl font-bold z-10">
                  {member.image}
                </div>
                
                {/* Social Links - Appear on Hover */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all">
                    <Linkedin size={18} className="text-[#084B73]" />
                  </button>
                  <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all">
                    <Twitter size={18} className="text-blue-400" />
                  </button>
                  <button className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all">
                    <Mail size={18} className="text-red-600" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-[#084B73] font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
