'use client';

import { Check, Award, Clock, Globe, DollarSign, HeartHandshake } from 'lucide-react';

// Icon wrapper for consistent black styling
const IconWrapper = ({ children, ...props }: any) => {
  return <span style={{ color: '#000000' }} {...props}>{children}</span>;
};

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
    <section id="why-us" className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#084B73] mt-4 mb-6">
              What Makes Us Different
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              At RiserX Consultancy, we combine deep industry expertise with innovative 
              approaches to deliver exceptional results for our clients.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 pt-1">
                    <feature.icon size={32} className="text-black" strokeWidth={1.5} />
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
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <div className="aspect-square bg-[#084B73] p-8 flex items-center justify-center">
                <div className="bg-white rounded-xl p-8 text-center w-full shadow-lg">
                  <h3 className="text-4xl font-bold text-gray-900 mb-4">15+</h3>
                  <p className="text-gray-600 mb-6">Years of Excellence</p>
                  
                  <div className="grid grid-cols-2 gap-4 text-left">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-2xl font-bold text-[#084B73]">500+</p>
                      <p className="text-sm text-gray-600">Projects</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-2xl font-bold text-[#084B73]">300+</p>
                      <p className="text-sm text-gray-600">Clients</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-2xl font-bold text-[#084B73]">50+</p>
                      <p className="text-sm text-gray-600">Experts</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-2xl font-bold text-[#084B73]">98%</p>
                      <p className="text-sm text-gray-600">Success</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
