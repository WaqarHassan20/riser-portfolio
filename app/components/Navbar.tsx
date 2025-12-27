"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      // Update active section based on scroll position
      const sections = [
        "home",
        "about",
        "services",
        "why-us",
        "team",
        "testimonials",
        "contact",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#why-us" },
    { name: "Team", href: "#team" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed z-50 transition-all duration-700 ease-in-out ${
        scrolled
          ? "top-0 left-0 right-0 w-full bg-white shadow-lg"
          : "top-0 left-0 right-0 w-full bg-linear-to-r from-slate-800 via-blue-600 to-[#081F30]"
      }`}
      style={{
        background: scrolled
          ? "rgb(255, 255, 255)"
          : "linear-gradient(135deg, #081F30 0%, #084B73 50%, #081F30 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center group cursor-pointer hover:opacity-80 transition-opacity duration-300"
          >
            <Image 
              src="/images/logo.jpeg" 
              alt="RiserX Logo" 
              width={140} 
              height={50}
              className="object-contain"
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(sectionId)}
                  className={`relative text-sm font-medium tracking-normal transition-all duration-300 cursor-pointer pb-1 ${
                    scrolled
                      ? isActive
                        ? "text-black"
                        : "text-gray-900 hover:text-black"
                      : isActive
                      ? "text-white"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-current transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full hover:w-full'
                  }`}></span>
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden transition-colors p-2 cursor-pointer ${
              scrolled
                ? "text-black hover:text-gray-900"
                : "text-white hover:text-white/80"
            }`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pb-4 pt-2 space-y-1">
            {navLinks.map((link, index) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(sectionId)}
                  className={`block w-full text-left py-3 px-4 transition-all duration-300 font-semibold rounded-lg cursor-pointer ${
                    scrolled
                      ? isActive
                        ? "text-black bg-black/10"
                        : "text-gray-900 hover:text-black hover:bg-black/5"
                      : isActive
                      ? "text-white bg-white/20"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {link.name}
                </button>
              );
            })}
            <button className="w-full rounded-xl bg-black/80 px-5 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-black mt-2 cursor-pointer">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
