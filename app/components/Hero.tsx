'use client';

import { ArrowRight, Play } from 'lucide-react';
import { useState } from 'react';

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
    <section id="home" className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-block">
              <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
                🚀 Transform Your Business Today
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Empowering Your{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Business Growth
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              RiserX Consultancy delivers innovative solutions that drive success. 
              We transform challenges into opportunities with our expert consulting services.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToContact}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Get Started
                <ArrowRight size={20} />
              </button>
              <button 
                onClick={() => setShowVideo(true)}
                className="bg-white text-gray-700 px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 border-2 border-gray-200 hover:border-blue-600 transition-all duration-300">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                  <Play size={16} fill="white" className="text-white ml-1" />
                </div>
                Watch Video
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-900">500+</h3>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">98%</h3>
                <p className="text-gray-600">Client Satisfaction</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">50+</h3>
                <p className="text-gray-600">Expert Consultants</p>
              </div>
            </div>
          </div>

          {/* Right Content - Image/Video Placeholder */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl cursor-pointer group" onClick={() => setShowVideo(true)}>
              <div className="aspect-video bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <div className="text-center text-white">
                  <div className="w-20 h-20 bg-white/30 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm group-hover:bg-white/40 transition-all">
                    <Play size={40} fill="white" className="text-white ml-2" />
                  </div>
                  <p className="text-lg font-semibold">Watch Our Story</p>
                </div>
              </div>
            </div>

            {/* Video Modal */}
            {showVideo && (
              <div 
                className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fadeIn"
                onClick={() => setShowVideo(false)}
              >
                <div className="relative max-w-4xl w-full aspect-video bg-gray-900 rounded-2xl overflow-hidden animate-scaleIn" onClick={(e) => e.stopPropagation()}>
                  <button 
                    onClick={() => setShowVideo(false)}
                    className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white text-2xl z-10 backdrop-blur-sm transition-all"
                  >
                    ×
                  </button>
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-400 to-purple-600">
                    <div className="text-center text-white">
                      <Play size={64} fill="white" className="text-white mx-auto mb-4" />
                      <p className="text-xl">Video Player Placeholder</p>
                      <p className="text-sm opacity-75 mt-2">Your promotional video will play here</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-yellow-400 rounded-full blur-3xl opacity-50 animate-pulse-slow"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-400 rounded-full blur-3xl opacity-50 animate-pulse-slow"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
