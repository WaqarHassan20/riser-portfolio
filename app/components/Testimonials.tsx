'use client';

import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      name: 'John Smith',
      role: 'CEO, TechCorp',
      image: 'JS',
      rating: 5,
      text: 'RiserX Consultancy transformed our business strategy. Their insights and expertise helped us achieve 150% growth in just one year. Highly recommended!',
      color: 'from-blue-500 to-[rgb(24,69,179)]',
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

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  return (
    <section id="testimonials" className="py-20 px-4 bg-white"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[rgb(24,69,179)] mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
            Don't just take our word for it - hear from the businesses we've helped transform.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 cursor-pointer"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} className="text-black" strokeWidth={2} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 cursor-pointer"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} className="text-black" strokeWidth={2} />
          </button>

          {/* Testimonial Cards */}
          <div className="overflow-hidden rounded-3xl">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-3xl p-12 shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
                    {/* Quote Icon */}
                    <div className="absolute top-8 right-8 opacity-5">
                      <Quote size={80} className="text-gray-900" />
                    </div>

                    {/* Rating */}
                    <div className="flex justify-center gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={24} className="text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8 text-center relative z-10 italic">
                      "{testimonial.text}"
                    </p>

                    {/* Author */}
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-[rgb(24,69,179)] rounded-full flex items-center justify-center mb-4">
                        <span className="text-white font-bold text-xl">{testimonial.image}</span>
                      </div>
                      <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                      <p className="text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  index === currentIndex
                    ? 'w-8 bg-[rgb(24,69,179)]'
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid md:grid-cols-4 gap-8 text-center">
          <div className="p-6">
            <h3 className="text-4xl font-bold text-[rgb(24,69,179)] mb-2">
              98%
            </h3>
            <p className="text-gray-600">Client Satisfaction</p>
          </div>
          <div className="p-6">
            <h3 className="text-4xl font-bold text-[rgb(24,69,179)] mb-2">
              500+
            </h3>
            <p className="text-gray-600">Completed Projects</p>
          </div>
          <div className="p-6">
            <h3 className="text-4xl font-bold text-[rgb(24,69,179)] mb-2">
              300+
            </h3>
            <p className="text-gray-600">Happy Clients</p>
          </div>
          <div className="p-6">
            <h3 className="text-4xl font-bold text-[rgb(24,69,179)] mb-2">
              15+
            </h3>
            <p className="text-gray-600">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}
