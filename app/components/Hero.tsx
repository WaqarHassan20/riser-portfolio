'use client';

import { ArrowRight, Play } from 'lucide-react';
import { useState } from 'react';

// Icon wrapper for consistent black styling
const IconWrapper = ({ children, ...props }: any) => {
  return <span style={{ color: '#000000' }} {...props}>{children}</span>;
};

export default function Hero() {
  const [showVideo, setShowVideo] = useState(false);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="pt-32 pb-24 px-4"
      style={{
        background: 'linear-gradient(135deg, rgb(30, 41, 59) 0%, rgb(39, 100, 232) 50%, rgb(30, 80, 199) 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-lg">
              Empowering Your{' '}
              <span className="text-white">
                Business Growth
              </span>
            </h1>
            
            <p className="text-lg text-white/95 leading-relaxed drop-shadow-md">
              RiserX Consultancy delivers innovative solutions that drive success. 
              We transform challenges into opportunities with our expert consulting services.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button 
                onClick={scrollToContact}
                className="bg-white backdrop-blur-2xl cursor-pointer text-black px-5 py-2 rounded-full font-semibold  transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                style={{
                  backdropFilter: 'blur(60px) saturate(200%)',
                  WebkitBackdropFilter: 'blur(60px) saturate(200%)',
                }}
              >
                Get Started
                <ArrowRight size={18} />
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div>
                <h3 className="text-3xl font-bold text-white drop-shadow-md">500+</h3>
                <p className="text-sm text-white/90 mt-1">Projects Completed</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white drop-shadow-md">98%</h3>
                <p className="text-sm text-white/90 mt-1">Client Satisfaction</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white drop-shadow-md">50+</h3>
                <p className="text-sm text-white/90 mt-1">Expert Consultants</p>
              </div>
            </div>
          </div>

          {/* Right Content - Image/Video Placeholder */}
          <div className="relative flex justify-center items-center">
            <div className="relative rounded-lg overflow-hidden cursor-pointer group w-full max-w-lg transition-all duration-300 hover:scale-105" onClick={() => setShowVideo(true)}>
              <div className="aspect-video bg-white/30 backdrop-blur-xl flex items-center justify-center" style={{
                backdropFilter: 'blur(40px) saturate(180%)',
                WebkitBackdropFilter: 'blur(40px) saturate(180%)',
              }}>
                <div className="text-center text-white">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-md group-hover:bg-white/30 transition-all border-2 border-white/30">
                    <Play size={36} fill="white" className="text-white ml-1" />
                  </div>
                  <p className="text-lg font-bold drop-shadow-md">Watch Our Story</p>
                </div>
              </div>
            </div>

            {/* Video Modal */}
            {showVideo && (
              <div 
                className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
                onClick={() => setShowVideo(false)}
              >
                <div className="relative max-w-4xl w-full aspect-video bg-gray-900 rounded-xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
                  <button 
                    onClick={() => setShowVideo(false)}
                    className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white text-2xl z-10 backdrop-blur-sm transition-all"
                  >
                    ×
                  </button>
                  <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-blue-500 to-indigo-600">
                    <div className="text-center text-white">
                      <Play size={64} fill="white" className="text-white mx-auto mb-4" />
                      <p className="text-xl">Video Player Placeholder</p>
                      <p className="text-sm opacity-75 mt-2">Your promotional video will play here</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
