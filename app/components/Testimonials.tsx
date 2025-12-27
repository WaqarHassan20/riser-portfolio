'use client';

import { Star, Quote } from 'lucide-react';
import Image from 'next/image';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Ahmed',
      role: 'Student at University of Oxford',
      country: 'UK',
      image: '/images/testimonials/student1.jpg',
      rating: 5,
      text: 'The Risers Consultancy made my dream of studying at Oxford a reality. Their guidance throughout the application process was invaluable. They helped me craft a compelling personal statement and prepared me thoroughly for the interview.',
      year: '2023',
    },
    {
      name: 'Muhammad Hassan',
      role: 'Student at University of Toronto',
      country: 'Canada',
      image: '/images/testimonials/student2.jpg',
      rating: 5,
      text: 'I cannot thank The Risers Consultancy enough! They secured a $25,000 scholarship for me and handled everything from application to visa. Professional, caring, and incredibly knowledgeable.',
      year: '2023',
    },
    {
      name: 'Emma Wilson',
      role: 'Student at University of Melbourne',
      country: 'Australia',
      image: '/images/testimonials/student3.jpg',
      rating: 5,
      text: 'Best decision I made was choosing The Risers Consultancy. They understood my goals perfectly and matched me with the ideal university. The visa process was smooth and stress-free thanks to their expert guidance.',
      year: '2024',
    },
    {
      name: 'Ali Raza',
      role: 'Student at MIT',
      country: 'USA',
      image: '/images/testimonials/student4.jpg',
      rating: 5,
      text: 'Getting into MIT seemed impossible until I worked with The Risers Consultancy. Their team\'s expertise in US admissions and scholarship applications was phenomenal. They truly care about your success!',
      year: '2024',
    },
    {
      name: 'Zara Khan',
      role: 'Student at University of Manchester',
      country: 'UK',
      image: '/images/testimonials/student5.jpg',
      rating: 5,
      text: 'The Risers Consultancy exceeded all my expectations. From university selection to accommodation arrangements, they took care of everything. I felt supported every step of the way.',
      year: '2023',
    },
    {
      name: 'David Chen',
      role: 'Student at Technical University Munich',
      country: 'Germany',
      image: '/images/testimonials/student6.jpg',
      rating: 5,
      text: 'Outstanding service! The team helped me secure admission to TUM with a full scholarship. Their knowledge of German universities and visa requirements was impressive. Highly recommended!',
      year: '2024',
    },
  ];

  return (
    <section id="testimonials" className="py-24 px-20 md:px-44 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#084B73]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#081F30]/5 rounded-full blur-3xl"></div>
      
      <div className="mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-[#084B73] mb-4">
            Success Stories
          </h2>
          <div className="w-24 h-1 bg-[#084B73] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hear from students who achieved their dreams of studying abroad with our guidance
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Card */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden h-full flex flex-col">
                {/* Quote Background */}
                <div className="absolute top-4 right-4 opacity-5">
                  <Quote size={80} className="text-[#084B73]" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-6 relative z-10">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 text-base leading-relaxed mb-6 relative z-10 flex-grow">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-[#084B73]/20 to-transparent mb-6"></div>

                {/* Author Info */}
                <div className="flex items-center gap-4 relative z-10">
                  {/* Avatar */}
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#084B73] to-[#081F30] flex items-center justify-center shrink-0 shadow-md">
                    <span className="text-white font-bold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>

                  {/* Details */}
                  <div className="flex-grow">
                    <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-[#084B73] font-medium">{testimonial.role}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-gray-500">{testimonial.country}</span>
                      <span className="text-xs text-gray-400">•</span>
                      <span className="text-xs text-gray-500">Class of {testimonial.year}</span>
                    </div>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-[#084B73] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
