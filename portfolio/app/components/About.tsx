'use client';

import { Target, Eye, Award, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">About Us</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
            Leading Consultancy Firm
          </h2>
          <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
            With years of experience and a passion for excellence, we help businesses 
            achieve their full potential through strategic consulting.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Image Placeholder */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Award size={48} className="text-white" />
                </div>
                <p className="text-gray-700 font-semibold">Excellence in Consulting</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Your Trusted Partner in Business Transformation
            </h3>
            <p className="text-gray-600 leading-relaxed">
              At RiserX Consultancy, we believe in creating lasting partnerships with our clients. 
              Our team of experienced consultants brings deep industry knowledge and innovative 
              thinking to every project.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We specialize in helping organizations navigate complex challenges, optimize 
              operations, and achieve sustainable growth. Our holistic approach ensures that 
              every solution is tailored to your unique needs.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="space-y-2">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Target className="text-blue-600" size={24} />
                </div>
                <h4 className="font-semibold text-gray-900">Our Mission</h4>
                <p className="text-sm text-gray-600">
                  Empower businesses to reach new heights through strategic guidance.
                </p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Eye className="text-purple-600" size={24} />
                </div>
                <h4 className="font-semibold text-gray-900">Our Vision</h4>
                <p className="text-sm text-gray-600">
                  Be the leading force in global business transformation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { icon: Users, title: 'Client-Centric', desc: 'Your success is our priority' },
            { icon: Award, title: 'Excellence', desc: 'Delivering exceptional results' },
            { icon: Target, title: 'Results-Driven', desc: 'Focused on measurable outcomes' },
            { icon: Eye, title: 'Integrity', desc: 'Honest and transparent approach' },
          ].map((value, index) => (
            <div key={index} className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <value.icon size={32} className="text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">{value.title}</h4>
              <p className="text-sm text-gray-600">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
