'use client';

import { useState } from 'react';
import { MapPin, ChevronRight, ChevronLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';

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
      country: 'United Kingdom',
      flagCode: 'GB',
      city: 'London',
      description: 'Discover rich history combined with modern business excellence. A global financial center with unparalleled educational and career opportunities.',
    },
    {
      country: 'Cyprus',
      flagCode: 'CY',
      city: 'Nicosia & Limassol',
      description: 'Beautiful Mediterranean island with excellent business opportunities. Low taxes, strategic location, and high quality of life.',
    },
    {
      country: 'Lithuania',
      flagCode: 'LT',
      city: 'Vilnius',
      description: 'A rapidly growing Baltic hub for innovation and startups. Modern infrastructure, EU membership, and competitive living costs.',
    },
    {
      country: 'Australia',
      flagCode: 'AU',
      city: 'Sydney & Melbourne',
      description: 'Embrace work-life balance in stunning landscapes. Outstanding quality of life, thriving economy, and beautiful natural environments.',
    },
    {
      country: 'United States',
      flagCode: 'US',
      city: 'New York & California',
      description: 'Land of opportunity with diverse career paths. Access to cutting-edge industries, prestigious universities, and limitless growth potential.',
    },
    {
      country: 'Georgia',
      flagCode: 'GE',
      city: 'Tbilisi',
      description: 'Emerging European destination with favorable business climate. Low taxes, rich culture, and growing expat community.',
    },
    {
      country: 'Romania',
      flagCode: 'RO',
      city: 'Bucharest & Cluj-Napoca',
      description: 'Dynamic EU member with thriving tech scene. Affordable living costs, rich history, and excellent connectivity.',
    },
    {
      country: 'Canada',
      flagCode: 'CA',
      city: 'Toronto & Vancouver',
      description: 'Welcoming multicultural society with strong economy. Excellent healthcare, education system, and immigration-friendly policies.',
    },
    {
      country: 'Germany',
      flagCode: 'DE',
      city: 'Berlin & Munich',
      description: 'Europe\'s economic powerhouse with innovation at its core. Strong industrial base, world-class education, and central European location.',
    },
    {
      country: 'United Arab Emirates',
      flagCode: 'AE',
      city: 'Dubai & Abu Dhabi',
      description: 'Modern business hub with tax-free income. Luxurious lifestyle, strategic location, and thriving international community.',
    },
    {
      country: 'Singapore',
      flagCode: 'SG',
      city: 'Singapore',
      description: 'Asia\'s premier business destination with world-class infrastructure. Safe, clean, and efficient with exceptional career opportunities.',
    },
    {
      country: 'New Zealand',
      flagCode: 'NZ',
      city: 'Auckland & Wellington',
      description: 'Stunning natural beauty with progressive society. High quality of life, strong work-life balance, and friendly immigration policies.',
    }
  ];

  const cardsPerSlide = 4;
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
    <section id="services" className="py-16 px-20 md:px-44 bg-gray-50">
      <div className="mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#084B73] mb-4">
            Destinations We Offer
          </h2>
          <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
            We specialize in helping you relocate to premier destinations worldwide. 
            Discover countries that offer exceptional opportunities for your career and lifestyle.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative px-20 pt-10 pb-20">
          <div className="transition-all duration-500 ease-in-out">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {getCurrentDestinations().map((destination, index) => (
                <div
                  key={`${currentSlide}-${index}`}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group animate-fadeIn h-95 flex flex-col"
                >
                  {/* Header with Flag and Country Name */}
                  <div className="bg-linear-to-br from-[#0E79BC] to-[#084B73] p-5 text-white">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-14 h-14 rounded-full overflow-hidden border-3 border-white shadow-lg bg-white shrink-0">
                        <Image
                          src={`https://flagcdn.com/w160/${destination.flagCode.toLowerCase()}.png`}
                          alt={`${destination.country} flag`}
                          width={56}
                          height={56}
                          className="w-full h-full object-fit"
                        />
                      </div>
                      <h3 className="text-xl font-bold">{destination.country}</h3>
                    </div>
                    <p className="text-white/90 text-sm font-medium flex items-center gap-2 ml-1">
                      <MapPin size={15} className="shrink-0" />
                      {destination.city}
                    </p>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex-1 flex flex-col">
                    <p className="text-gray-600 leading-relaxed text-sm flex-1 mt-3">
                      {destination.description}
                    </p>

                    <button 
                      onClick={scrollToContact}
                      className="text-white font-semibold text-xs px-4 py-3 rounded-md flex items-center gap-2 bg-[#0E79BC] transition-all cursor-pointer hover:bg-[#084B73] hover:shadow-md w-fit hover:gap-3"
                    >
                      Get Started
                      <ArrowRight size={16} />
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
                className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white text-[#084B73] rounded-full p-3 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:-translate-x-1 group"
                aria-label="Previous slide"
              >
                <ChevronLeft size={24} strokeWidth={2.5} className="group-hover:animate-slideLeft" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white text-[#084B73] rounded-full p-3 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:translate-x-1 group"
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
                  index === currentSlide ? 'w-8 bg-[#084B73]' : 'w-2 bg-gray-300'
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
