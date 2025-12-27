"use client";

import { useState, useEffect } from 'react';
import {
  Navbar,
  Hero,
  About,
  LiveTicker,
  Services,
  Universities,
  Offices,
  WhyUs,
  Process,
  Team,
  Testimonials,
  Contact,
  Footer,
  Loader
} from './components/index';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader label="Welcome to The Risers Consultancy" fullscreen />;
  }

  return (
    <>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Hero />
        <About />
        <LiveTicker />
        <Services />
        <Universities />
        <Offices />
        <WhyUs />
        <Process />
        <Team />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
