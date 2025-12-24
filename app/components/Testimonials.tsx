'use client';

import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'John Smith',
      role: 'CEO, TechCorp',
      image: 'JS',
      rating: 5,
      text: 'RiserX Consultancy transformed our business strategy. Their insights and expertise helped us achieve 150% growth in just one year. Highly recommended!',
      color: 'from-blue-500 to-blue-600',
    },
    {
      name: 'Maria Garcia',
      role: 'Founder, InnovateLab',
      image: 'MG',
      rating: 5,
      text: 'Working with RiserX was a game-changer. They provided actionable strategies that resulted in significant improvements in our operational efficiency.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      name: 'Robert Johnson',
      role: 'CFO, FinanceFirst',
      image: 'RJ',
      rating: 5,
      text: 'The financial advisory services exceeded our expectations. Their team is professional, knowledgeable, and truly committed to client success.',
      color: 'from-pink-500 to-pink-600',
    },
    {
      name: 'Jennifer Lee',
      role: 'Director, GrowthHub',
      image: 'JL',
      rating: 5,
      text: 'Outstanding service! RiserX helped us navigate complex market challenges and emerge stronger. Their strategic guidance was invaluable.',
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      name: 'Alex Turner',
      role: 'VP Operations, LogiTech',
      image: 'AT',
      rating: 5,
      text: 'The team at RiserX is exceptional. They delivered practical solutions that addressed our specific needs and drove measurable results.',
      color: 'from-cyan-500 to-cyan-600',
    },
    {
      name: 'Sophie Martin',
      role: 'COO, RetailPro',
      image: 'SM',
      rating: 5,
      text: 'Impressive expertise and dedication. RiserX consultants went above and beyond to ensure our project success. A true partner in growth.',
      color: 'from-teal-500 to-teal-600',
    },
  ];

  return (
    <section id="testimonials" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
            Don't just take our word for it - hear from the businesses we've helped transform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote size={64} className="text-blue-600" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 bg-gradient-to-br ${testimonial.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                  <span className="text-white font-bold text-lg">{testimonial.image}</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid md:grid-cols-4 gap-8 text-center">
          <div className="p-6">
            <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              98%
            </h3>
            <p className="text-gray-600">Client Satisfaction</p>
          </div>
          <div className="p-6">
            <h3 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              500+
            </h3>
            <p className="text-gray-600">Completed Projects</p>
          </div>
          <div className="p-6">
            <h3 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-indigo-600 bg-clip-text text-transparent mb-2">
              300+
            </h3>
            <p className="text-gray-600">Happy Clients</p>
          </div>
          <div className="p-6">
            <h3 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent mb-2">
              15+
            </h3>
            <p className="text-gray-600">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}
