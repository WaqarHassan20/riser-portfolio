'use client';

import { ArrowRight, Play, Pause, Maximize2 } from 'lucide-react';
import { useState, useRef } from 'react';

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const mainVideoRef = useRef<HTMLVideoElement>(null);
  const expandedVideoRef = useRef<HTMLVideoElement>(null);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const togglePlay = () => {
    const video = isExpanded ? expandedVideoRef.current : mainVideoRef.current;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleExpandView = () => {
    setIsExpanded(!isExpanded);
    setIsPlaying(false);
    // Pause both videos when toggling
    if (mainVideoRef.current) mainVideoRef.current.pause();
    if (expandedVideoRef.current) expandedVideoRef.current.pause();
  };

  return (
    <>
      <section 
        id="home" 
        className="pt-32 pb-24 px-20 md:px-44"
        style={{
          background: 'linear-gradient(135deg, #081F30 0%, #084B73 50%, #081F30 100%)'
        }}
      >
      <div className="mx-auto my-20">
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
              The Risers Consultancy delivers innovative solutions that drive success. 
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

          {/* Right Content - Video Player */}
          <div className="relative flex justify-center items-center">
            <div 
              className="relative rounded-2xl overflow-hidden w-full shadow-2xl transition-all duration-300 hover:shadow-3xl group"
            >
              <div className="aspect-video bg-linear-to-br from-white/20 to-white/10 backdrop-blur-xl flex items-center justify-center relative" style={{
                backdropFilter: 'blur(40px) saturate(180%)',
                WebkitBackdropFilter: 'blur(40px) saturate(180%)',
              }}>
                {/* Video Element */}
                <video 
                  ref={mainVideoRef}
                  className="absolute inset-0 w-full h-full object-cover"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                >
                  <source src="/video/video2.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Overlay for when video is not playing */}
                {!isPlaying && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center backdrop-blur-sm">
                    <div className="text-center text-white">
                      <p className="text-2xl font-bold drop-shadow-md mb-2">Watch Our Story</p>
                      <p className="text-sm opacity-75">Discover how we help businesses succeed</p>
                    </div>
                  </div>
                )}

                {/* Play/Pause Button */}
                <button
                  onClick={togglePlay}
                  className="absolute inset-0 flex items-center justify-center z-10 cursor-pointer group/play"
                >
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md group-hover/play:bg-white/30 transition-all border-2 border-white/30 group-hover/play:scale-110">
                    {isPlaying ? (
                      <Pause size={40} fill="white" className="text-white" />
                    ) : (
                      <Play size={40} fill="white" className="text-white ml-1" />
                    )}
                  </div>
                </button>

                {/* Expand View Button */}
                <button
                  onClick={handleExpandView}
                  className="absolute bottom-4 right-4 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center backdrop-blur-md transition-all border border-white/30 z-20"
                  title="Expand View"
                >
                  <Maximize2 size={20} className="text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>

      {/* Expanded Video Overlay */}
      {isExpanded && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-8 md:p-16"
          onClick={handleExpandView}
        >
          <div 
            className="relative w-full max-w-6xl aspect-video rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full h-full bg-linear-to-br from-white/20 to-white/10 backdrop-blur-xl flex items-center justify-center relative" style={{
              backdropFilter: 'blur(40px) saturate(180%)',
              WebkitBackdropFilter: 'blur(40px) saturate(180%)',
            }}>
              {/* Video Element */}
              <video 
                ref={expandedVideoRef}
                className="absolute inset-0 w-full h-full object-cover"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              >
                <source src="/video/video2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Overlay for when video is not playing */}
              {!isPlaying && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center backdrop-blur-sm">
                  <div className="text-center text-white">
                    <p className="text-4xl font-bold drop-shadow-md mb-3">Watch Our Story</p>
                    <p className="text-lg opacity-75">Discover how we help businesses succeed</p>
                  </div>
                </div>
              )}

              {/* Play/Pause Button */}
              <button
                onClick={togglePlay}
                className="absolute inset-0 flex items-center justify-center z-10 cursor-pointer group/play"
              >
                <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md group-hover/play:bg-white/30 transition-all border-2 border-white/30 group-hover/play:scale-110">
                  {isPlaying ? (
                    <Pause size={48} fill="white" className="text-white" />
                  ) : (
                    <Play size={48} fill="white" className="text-white ml-2" />
                  )}
                </div>
              </button>

              {/* Close Button */}
              <button
                onClick={handleExpandView}
                className="absolute top-4 right-4 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center backdrop-blur-md transition-all border border-white/30 z-20 text-white text-2xl font-bold"
                title="Close"
              >
                ×
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
