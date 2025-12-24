'use client';

import { Check, Award, Clock, Globe, DollarSign, HeartHandshake } from 'lucide-react';

export default function WhyUs() {
  const features = [
    {
      icon: Award,
      title: 'Proven Expertise',
      description: 'Over 15 years of industry experience with certified consultants',
    },
    {
      icon: Clock,
      title: 'Fast Delivery',
      description: 'Quick turnaround times without compromising quality',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving clients across 30+ countries worldwide',
    },
    {
      icon: DollarSign,
      title: 'Cost-Effective',
      description: 'Competitive pricing with maximum ROI for your investment',
    },
    {
      icon: HeartHandshake,
      title: '24/7 Support',
      description: 'Round-the-clock assistance for all your consulting needs',
    },
    {
      icon: Check,
      title: 'Guaranteed Results',
      description: 'Data-driven approaches that deliver measurable outcomes',
    },
  ];

  return (
    <section id="why-us" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
              What Makes Us Different
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              At RiserX Consultancy, we combine deep industry expertise with innovative 
              approaches to deliver exceptional results for our clients.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg mb-1">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-square bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 p-8 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 text-center w-full">
                  <h3 className="text-4xl font-bold text-gray-900 mb-4">15+</h3>
                  <p className="text-gray-600 mb-6">Years of Excellence</p>
                  
                  <div className="grid grid-cols-2 gap-4 text-left">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-2xl font-bold text-blue-600">500+</p>
                      <p className="text-sm text-gray-600">Projects</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <p className="text-2xl font-bold text-purple-600">300+</p>
                      <p className="text-sm text-gray-600">Clients</p>
                    </div>
                    <div className="bg-pink-50 p-4 rounded-lg">
                      <p className="text-2xl font-bold text-pink-600">50+</p>
                      <p className="text-sm text-gray-600">Experts</p>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <p className="text-2xl font-bold text-indigo-600">98%</p>
                      <p className="text-sm text-gray-600">Success</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full blur-2xl opacity-50"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-400 rounded-full blur-2xl opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
