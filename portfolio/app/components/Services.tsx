'use client';

import { Briefcase, TrendingUp, Users, BarChart, Lightbulb, Shield } from 'lucide-react';

export default function Services() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };
  const services = [
    {
      icon: Briefcase,
      title: 'Business Strategy',
      description: 'Comprehensive strategic planning to align your business objectives with market opportunities.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: TrendingUp,
      title: 'Growth Consulting',
      description: 'Accelerate your business growth with data-driven strategies and market insights.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Users,
      title: 'HR Consulting',
      description: 'Optimize your workforce with talent management and organizational development solutions.',
      color: 'from-pink-500 to-pink-600',
    },
    {
      icon: BarChart,
      title: 'Financial Advisory',
      description: 'Expert financial planning, analysis, and risk management for sustainable success.',
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      icon: Lightbulb,
      title: 'Innovation Strategy',
      description: 'Foster innovation and digital transformation to stay ahead of the competition.',
      color: 'from-cyan-500 to-cyan-600',
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Identify, assess, and mitigate risks to protect your business interests.',
      color: 'from-teal-500 to-teal-600',
    },
  ];

  return (
    <section id="services" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
            Comprehensive Solutions for Your Business
          </h2>
          <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
            We offer a wide range of consulting services designed to address your 
            unique challenges and drive measurable results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
              <button className="mt-6 text-blue-600 font-semibold flex items-center gap-2 group-hover:gap-4 transition-all">
                Learn More
                <span>→</span>
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Need a Custom Solution?</h3>
          <p className="text-xl mb-8 opacity-90">
            We tailor our services to meet your specific business needs.
          </p>
          <button 
            onClick={scrollToContact}
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
