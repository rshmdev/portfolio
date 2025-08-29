"use client";

import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';

export default function FloatHeader() {
  const t = useTranslations('navigation');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [scroll, setScroll] = useState(0);
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
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

  const handleLanguageChange = (newLocale: string) => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    const newPath = segments.join('/');
    router.push(newPath);
    setIsLanguageMenuOpen(false);
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
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex items-center space-x-8">
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
                  <span className="relative z-10">{t('home')}</span>
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
                <span className="relative z-10">{t('about')}</span>
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
                <span className="relative z-10">{t('skills')}</span>
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
                <span className="relative z-10">{t('experience')}</span>
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
                <span className="relative z-10">{t('projects')}</span>
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
                  {t('contact')}
                </a>
              </li>
            </ul>

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                className="flex items-center space-x-2 px-3 py-2 text-gray-400 hover:text-gray-200 transition-colors rounded-lg hover:bg-slate-700/30"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
                <span className="uppercase text-sm font-medium">{locale}</span>
                <svg className={`w-4 h-4 transition-transform duration-200 ${isLanguageMenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Language Dropdown */}
              {isLanguageMenuOpen && (
                <div className="absolute top-full right-0 mt-2 w-32 bg-slate-900/95 backdrop-blur-md border border-slate-700 rounded-lg shadow-xl z-50">
                  <button
                    onClick={() => handleLanguageChange('pt')}
                    className={`w-full text-left px-4 py-3 text-sm transition-colors rounded-t-lg ${
                      locale === 'pt' 
                        ? 'text-cyan-400 bg-slate-700/50' 
                        : 'text-gray-300 hover:text-white hover:bg-slate-700/30'
                    }`}
                  >
                    🇧🇷 Português
                  </button>
                  <button
                    onClick={() => handleLanguageChange('en')}
                    className={`w-full text-left px-4 py-3 text-sm transition-colors rounded-b-lg ${
                      locale === 'en' 
                        ? 'text-cyan-400 bg-slate-700/50' 
                        : 'text-gray-300 hover:text-white hover:bg-slate-700/30'
                    }`}
                  >
                    🇺🇸 English
                  </button>
                </div>
              )}
            </div>
          </div>

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
                  {t('home')}
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
                  {t('about')}
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
                  {t('skills')}
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
                  {t('experience')}
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
                  {t('projects')}
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
                    {t('contact')}
                  </a>
                </li>
              </ul>

              {/* Mobile Language Selector */}
              <div className="mt-4 pt-4 border-t border-gray-700/50">
                <div className="px-4 py-2 text-gray-400 text-sm font-medium mb-2">
                  {t('language')}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleLanguageChange('pt')}
                    className={`flex-1 px-4 py-3 text-sm transition-colors rounded-lg ${
                      locale === 'pt' 
                        ? 'text-cyan-400 bg-slate-700/50' 
                        : 'text-gray-300 hover:text-white hover:bg-slate-700/30'
                    }`}
                  >
                    🇧🇷 Português
                  </button>
                  <button
                    onClick={() => handleLanguageChange('en')}
                    className={`flex-1 px-4 py-3 text-sm transition-colors rounded-lg ${
                      locale === 'en' 
                        ? 'text-cyan-400 bg-slate-700/50' 
                        : 'text-gray-300 hover:text-white hover:bg-slate-700/30'
                    }`}
                  >
                    🇺🇸 English
                  </button>
                </div>
              </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
