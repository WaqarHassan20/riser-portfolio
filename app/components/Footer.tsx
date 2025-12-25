'use client';

import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

// Icon wrapper for consistent black styling
const IconWrapper = ({ children, ...props }: any) => {
  return <span style={{ color: '#000000' }} {...props}>{children}</span>;
};
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[rgb(24,69,179)] to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">RX</span>
              </div>
              <span className="text-xl font-bold text-white">RiserX</span>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Empowering businesses to achieve excellence through innovative consulting solutions and strategic guidance.
            </p>
            <div className="flex gap-3">
              <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[rgb(24,69,179)] transition-all duration-300 transform hover:scale-110">
                <Facebook size={20} />
              </button>
              <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-400 transition-all duration-300 transform hover:scale-110">
                <Twitter size={20} />
              </button>
              <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[rgb(24,69,179)] transition-all duration-300 transform hover:scale-110">
                <Linkedin size={20} />
              </button>
              <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-all duration-300 transform hover:scale-110">
                <Instagram size={20} />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><button onClick={() => scrollToSection('home')} className="hover:text-blue-400 transition-colors">Home</button></li>
              <li><button onClick={() => scrollToSection('about')} className="hover:text-blue-400 transition-colors">About Us</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-blue-400 transition-colors">Services</button></li>
              <li><button onClick={() => scrollToSection('team')} className="hover:text-blue-400 transition-colors">Our Team</button></li>
              <li><button onClick={() => scrollToSection('testimonials')} className="hover:text-blue-400 transition-colors">Testimonials</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="hover:text-blue-400 transition-colors">Contact</button></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Business Strategy</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Growth Consulting</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">HR Consulting</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Financial Advisory</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Innovation Strategy</Link></li>
              <li><Link href="#" className="hover:text-blue-400 transition-colors">Risk Management</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-blue-400 flex-shrink-0 mt-1" />
                <span>123 Business Avenue<br />New York, NY 10001, USA</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-blue-400 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-blue-400 flex-shrink-0" />
                <span>info@riserxconsultancy.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} RiserX Consultancy. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-blue-400 transition-colors">Terms of Service</Link>
              <Link href="#" className="hover:text-blue-400 transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
