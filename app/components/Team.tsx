'use client';

import { Linkedin, Twitter, Mail } from 'lucide-react';
import Image from 'next/image';

export default function Team() {
  const team = [
    {
      name: 'Dr. Ahmed Hassan',
      role: 'CEO & Senior Consultant',
      specialization: 'UK & European Universities',
      image: '/images/team/member1.jpg',
      bio: 'Over 15 years of experience in international education consulting with 500+ successful student placements.',
      linkedin: '#',
      twitter: '#',
      email: 'ahmed@therisers.com',
    },
    {
      name: 'Sarah Williams',
      role: 'Director of Operations',
      specialization: 'USA & Canada Programs',
      image: '/images/team/member2.jpg',
      bio: 'Expert in North American admissions with a track record of securing scholarships worth $2M+ for students.',
      linkedin: '#',
      twitter: '#',
      email: 'sarah@therisers.com',
    },
    {
      name: 'Michael Chen',
      role: 'Visa Consultant',
      specialization: 'Visa Processing & Interview Prep',
      image: '/images/team/member3.jpg',
      bio: 'Former visa officer with 98% success rate in visa approvals across multiple countries.',
      linkedin: '#',
      twitter: '#',
      email: 'michael@therisers.com',
    },
    {
      name: 'Fatima Khan',
      role: 'Student Counselor',
      specialization: 'Australia & New Zealand',
      image: '/images/team/member4.jpg',
      bio: 'Passionate counselor helping students achieve their dreams with personalized guidance and support.',
      linkedin: '#',
      twitter: '#',
      email: 'fatima@therisers.com',
    },
    {
      name: 'James Rodriguez',
      role: 'Financial Aid Advisor',
      specialization: 'Scholarships & Funding',
      image: '/images/team/member5.jpg',
      bio: 'Specialized in identifying scholarship opportunities and securing financial aid for deserving students.',
      linkedin: '#',
      twitter: '#',
      email: 'james@therisers.com',
    },
    {
      name: 'Aisha Malik',
      role: 'Test Preparation Coach',
      specialization: 'IELTS, TOEFL, GRE & SAT',
      image: '/images/team/member6.jpg',
      bio: 'Certified trainer with 10+ years helping students achieve top scores in standardized tests.',
      linkedin: '#',
      twitter: '#',
      email: 'aisha@therisers.com',
    },
  ];

  return (
    <section id="team" className="py-24 px-20 md:px-44 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#084B73]/5 rounded-full blur-3xl -z-0"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#081F30]/5 rounded-full blur-3xl -z-0"></div>
      
      <div className="mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-[#084B73] mb-4">
            Meet Our Expert Team
          </h2>
          <div className="w-24 h-1 bg-[#084B73] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our passionate team of consultants is dedicated to making your study abroad dreams a reality
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {team.map((member, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Card */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3">
                {/* Image Circle Container */}
                <div className="relative pt-12 pb-6 bg-gradient-to-br from-[#084B73]/5 to-[#081F30]/5">
                  <div className="w-40 h-40 mx-auto relative">
                    {/* Circular Image */}
                    <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl relative bg-gradient-to-br from-[#084B73] to-[#081F30]">
                      <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                    
                    {/* Decorative Ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-[#084B73]/20 scale-110 group-hover:scale-125 transition-transform duration-500"></div>
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center gap-3 mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <a 
                      href={member.linkedin}
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300"
                    >
                      <Linkedin size={18} className="text-[#0077B5]" />
                    </a>
                    <a 
                      href={member.twitter}
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300"
                    >
                      <Twitter size={18} className="text-[#1DA1F2]" />
                    </a>
                    <a 
                      href={`mailto:${member.email}`}
                      className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300"
                    >
                      <Mail size={18} className="text-[#EA4335]" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-[#084B73] font-semibold text-lg mb-2">{member.role}</p>
                  <div className="inline-block px-4 py-1 bg-[#084B73]/10 rounded-full mb-4">
                    <p className="text-sm text-[#084B73] font-medium">{member.specialization}</p>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                  
                  {/* Contact Button */}
                  <button className="mt-6 px-6 py-2 bg-gradient-to-r from-[#084B73] to-[#081F30] text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                    Get in Touch
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
