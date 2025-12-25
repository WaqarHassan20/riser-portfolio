'use client';

import { useState } from 'react';
import { MapPin, ChevronRight, ChevronLeft } from 'lucide-react';

export default function Services() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const destinations = [
    {
      flag: '🇬🇧',
      country: 'United Kingdom',
      city: 'London',
      description: 'Discover rich history combined with modern business excellence. A global financial center with unparalleled educational and career opportunities.',
    },
    {
      flag: '🇦🇺',
      country: 'Australia',
      city: 'Sydney & Melbourne',
      description: 'Embrace work-life balance in stunning landscapes. Outstanding quality of life, thriving economy, and beautiful natural environments.',
    },
    {
      flag: '🇨🇦',
      country: 'Canada',
      city: 'Toronto & Vancouver',
      description: 'Build your future in a welcoming multicultural society. Excellent healthcare, education systems, and vast career opportunities.',
    },
    {
      flag: '🇦🇪',
      country: 'United Arab Emirates',
      city: 'Dubai',
      description: 'Experience luxury and innovation in the Middle East. Tax-free income, world-class infrastructure, and a thriving business environment.',
    },
    {
      flag: '🇺🇸',
      country: 'United States',
      city: 'New York & California',
      description: 'Land of opportunity with diverse career paths. Access to cutting-edge industries, prestigious universities, and limitless growth potential.',
    },
    {
      flag: '🇩🇪',
      country: 'Germany',
      city: 'Berlin & Munich',
      description: 'Europe\'s economic powerhouse with strong industrial heritage. Excellent work-life balance, social benefits, and central European location.',
    }
  ];

  const cardsPerSlide = 3;
  const totalSlides = Math.ceil(destinations.length / cardsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentDestinations = () => {
    const start = currentSlide * cardsPerSlide;
    return destinations.slice(start, start + cardsPerSlide);
  };

  return (
    <section id="services" className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[rgb(24,69,179)] mb-4">
            Destinations We Offer
          </h2>
          <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
            We specialize in helping you relocate to premier destinations worldwide. 
            Discover countries that offer exceptional opportunities for your career and lifestyle.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative px-20">
          <div className="transition-all duration-500 ease-in-out">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {getCurrentDestinations().map((destination, index) => (
                <div
                  key={`${currentSlide}-${index}`}
                  className="bg-white rounded-2xl overflow-visible shadow-lg hover:shadow-2xl transition-all duration-300 group animate-fadeIn"
                >
                  {/* Header with Flag */}
                  <div className="bg-[rgb(24,69,179)] p-6 text-white rounded-t-2xl">
                    <div className="text-6xl mb-3">{destination.flag}</div>
                    <h3 className="text-2xl font-bold mb-1">{destination.country}</h3>
                    <p className="text-white/90 text-sm font-medium flex items-center gap-2">
                      <MapPin size={16} />
                      {destination.city}
                    </p>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {destination.description}
                    </p>

                    <button className="text-white font-medium text-[0.78rem] px-4 py-2 rounded-sm flex items-center gap-2 bg-[rgb(24,69,179)] transition-all cursor-pointer">
                      view details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          {totalSlides > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white text-[rgb(24,69,179)] rounded-full p-3 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:-translate-x-1 group"
                aria-label="Previous slide"
              >
                <ChevronLeft size={24} strokeWidth={2.5} className="group-hover:animate-slideLeft" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white text-[rgb(24,69,179)] rounded-full p-3 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:translate-x-1 group"
                aria-label="Next slide"
              >
                <ChevronRight size={24} strokeWidth={2.5} className="group-hover:animate-slideRight" />
              </button>
            </>
          )}
        </div>

        {/* Slide Indicators */}
        {totalSlides > 1 && (
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentSlide ? 'w-8 bg-[rgb(24,69,179)]' : 'w-2 bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
