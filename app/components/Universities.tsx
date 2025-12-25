'use client';

import { GraduationCap } from 'lucide-react';

export default function Universities() {
  // Flattened list of all universities with country info
  const allUniversities = [
    { name: 'University of Oxford', country: 'UK', flag: '🇬🇧' },
    { name: 'University of Cambridge', country: 'UK', flag: '🇬🇧' },
    { name: 'Imperial College London', country: 'UK', flag: '🇬🇧' },
    { name: 'University College London', country: 'UK', flag: '🇬🇧' },
    { name: 'University of Melbourne', country: 'Australia', flag: '🇦🇺' },
    { name: 'Australian National University', country: 'Australia', flag: '🇦🇺' },
    { name: 'University of Sydney', country: 'Australia', flag: '🇦🇺' },
    { name: 'University of Queensland', country: 'Australia', flag: '🇦🇺' },
    { name: 'University of Toronto', country: 'Canada', flag: '🇨🇦' },
    { name: 'McGill University', country: 'Canada', flag: '🇨🇦' },
    { name: 'University of British Columbia', country: 'Canada', flag: '🇨🇦' },
    { name: 'University of Alberta', country: 'Canada', flag: '🇨🇦' },
    { name: 'MIT', country: 'USA', flag: '🇺🇸' },
    { name: 'Stanford University', country: 'USA', flag: '🇺🇸' },
    { name: 'Harvard University', country: 'USA', flag: '🇺🇸' },
    { name: 'Princeton University', country: 'USA', flag: '🇺🇸' },
  ];

  // Duplicate the array for seamless infinite scroll
  const duplicatedUniversities = [...allUniversities, ...allUniversities];

  return (
    <section className="py-16 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[rgb(24,69,179)] mb-5">
            Partner Universities
          </h2>
          <div className="w-24 h-1 bg-[rgb(24,69,179)] mx-auto mb-5"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We have partnerships with world-renowned universities to help you achieve your educational goals
          </p>
        </div>

        {/* Auto-scrolling University Slider */}
        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex animate-scroll">
              {duplicatedUniversities.map((uni, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 mx-4 bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 w-80 group"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-4xl">{uni.flag}</div>
                    <div className="w-12 h-12 bg-[rgb(24,69,179)] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <GraduationCap size={24} className="text-white" strokeWidth={2.5} />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[rgb(24,69,179)] transition-colors">
                    {uni.name}
                  </h3>
                  <p className="text-sm text-gray-600">{uni.country}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Gradient Overlays */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-md">
            <div className="text-4xl font-bold text-[rgb(24,69,179)] mb-2">16+</div>
            <div className="text-gray-600 font-medium">Partner Universities</div>
          </div>
          <div className="p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-md">
            <div className="text-4xl font-bold text-[rgb(24,69,179)] mb-2">4</div>
            <div className="text-gray-600 font-medium">Countries</div>
          </div>
          <div className="p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-md">
            <div className="text-4xl font-bold text-[rgb(24,69,179)] mb-2">95%</div>
            <div className="text-gray-600 font-medium">Acceptance Rate</div>
          </div>
          <div className="p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-md">
            <div className="text-4xl font-bold text-[rgb(24,69,179)] mb-2">1000+</div>
            <div className="text-gray-600 font-medium">Students Placed</div>
          </div>
        </div>
      </div>
    </section>
  );
}
