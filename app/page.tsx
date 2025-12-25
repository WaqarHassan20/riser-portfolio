import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Universities from './components/Universities';
import Offices from './components/Offices';
import WhyUs from './components/WhyUs';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Universities />
        <Offices />
        <WhyUs />
        <Team />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
