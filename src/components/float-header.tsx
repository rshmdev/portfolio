"use client";

import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

export default function FloatHeader() {
  const [scroll, setScroll] = useState(0);
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
      
      // Detectar seção ativa
      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Animação inicial do header
    if (headerRef.current && navRef.current) {
      gsap.fromTo(headerRef.current, 
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, delay: 0.05, ease: "power2.out" }
      );
      
      gsap.fromTo(navRef.current.querySelectorAll('li'), 
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.05, delay: 0.3, ease: "power2.out" }
      );
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      ref={headerRef}
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 opacity-0 ${
        scroll > 100 
          ? "bg-gradient-to-r from-slate-950/95 via-gray-900/95 to-slate-950/95 backdrop-blur-xl shadow-2xl" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <nav ref={navRef} className="flex items-center justify-between py-4">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-2">
              <Image
                src="/icon.png"
                alt="Rian Moraes"
                width={40}
                height={40}
              />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-white p-2 rounded-lg hover:bg-gray-800 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
              <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex items-center space-x-8">
            <li>
              <a
                href="#hero"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("hero");
                }}
                className={`relative transition-all duration-300 group cursor-pointer px-3 py-2 rounded-lg ${
                  activeSection === 'hero' 
                    ? 'text-cyan-400 bg-slate-700/30' 
                    : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                <span className="relative z-10">Início</span>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-700/30 to-gray-700/30 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("about");
                }}
                className={`relative transition-all duration-300 group cursor-pointer px-3 py-2 rounded-lg ${
                  activeSection === 'about' 
                    ? 'text-cyan-400 bg-slate-700/30' 
                    : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                <span className="relative z-10">Sobre</span>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-700/30 to-gray-700/30 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
              </a>
            </li>
            <li>
              <a
                href="#skills"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("skills");
                }}
                className={`relative transition-all duration-300 group cursor-pointer px-3 py-2 rounded-lg ${
                  activeSection === 'skills' 
                    ? 'text-cyan-400 bg-slate-700/30' 
                    : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                <span className="relative z-10">Skills</span>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-700/30 to-gray-700/30 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
              </a>
            </li>
            <li>
              <a
                href="#experience"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("experience");
                }}
                className={`relative transition-all duration-300 group cursor-pointer px-3 py-2 rounded-lg ${
                  activeSection === 'experience' 
                    ? 'text-cyan-400 bg-slate-700/30' 
                    : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                <span className="relative z-10">Experiência</span>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-700/30 to-gray-700/30 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("projects");
                }}
                className={`relative transition-all duration-300 group cursor-pointer px-3 py-2 rounded-lg ${
                  activeSection === 'projects' 
                    ? 'text-cyan-400 bg-slate-700/30' 
                    : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                <span className="relative z-10">Projetos</span>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-700/30 to-gray-700/30 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("contact");
                }}
                className="relative px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                Contato
              </a>
            </li>
          </ul>

          {/* Mobile Navigation Menu */}
          <div className={`md:hidden absolute top-full left-0 w-full bg-gradient-to-r from-slate-950/98 via-gray-900/98 to-slate-950/98 backdrop-blur-xl border-t border-gray-700/50 transition-all duration-300 ${
            isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}>
            <ul className="flex flex-col py-4 px-6 space-y-2">
              <li>
                <a
                  href="#hero"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("hero");
                  }}
                  className={`block px-4 py-3 rounded-lg transition-all duration-300 ${
                    activeSection === 'hero' 
                      ? 'text-cyan-400 bg-slate-700/50' 
                      : 'text-gray-400 hover:text-gray-200 hover:bg-slate-700/30'
                  }`}
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("about");
                  }}
                  className={`block px-4 py-3 rounded-lg transition-all duration-300 ${
                    activeSection === 'about' 
                      ? 'text-cyan-400 bg-slate-700/50' 
                      : 'text-gray-400 hover:text-gray-200 hover:bg-slate-700/30'
                  }`}
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("skills");
                  }}
                  className={`block px-4 py-3 rounded-lg transition-all duration-300 ${
                    activeSection === 'skills' 
                      ? 'text-cyan-400 bg-slate-700/50' 
                      : 'text-gray-400 hover:text-gray-200 hover:bg-slate-700/30'
                  }`}
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("experience");
                  }}
                  className={`block px-4 py-3 rounded-lg transition-all duration-300 ${
                    activeSection === 'experience' 
                      ? 'text-cyan-400 bg-slate-700/50' 
                      : 'text-gray-400 hover:text-gray-200 hover:bg-slate-700/30'
                  }`}
                >
                  Experiência
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("projects");
                  }}
                  className={`block px-4 py-3 rounded-lg transition-all duration-300 ${
                    activeSection === 'projects' 
                      ? 'text-cyan-400 bg-slate-700/50' 
                      : 'text-gray-400 hover:text-gray-200 hover:bg-slate-700/30'
                  }`}
                >
                  Projetos
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("contact");
                  }}
                  className="block px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 text-center"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
