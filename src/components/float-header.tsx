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

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
      
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

    if (headerRef.current) {
      gsap.fromTo(headerRef.current, 
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.3, ease: "power3.out" }
      );
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (section: string) => {
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const handleLanguageChange = (newLocale: string) => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    router.push(segments.join('/'));
    setIsLanguageMenuOpen(false);
  };

  const navItems = [
    { id: 'hero', label: t('home') },
    { id: 'about', label: t('about') },
    { id: 'skills', label: t('skills') },
    { id: 'experience', label: t('experience') },
    { id: 'projects', label: t('projects') },
  ];

  const isScrolled = scroll > 50;

  return (
    <header
      ref={headerRef}
      className="fixed w-full top-0 left-0 z-50"
      style={{
        transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        background: isScrolled 
          ? 'rgba(9, 9, 11, 0.85)' 
          : 'transparent',
        backdropFilter: isScrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(20px)' : 'none',
        borderBottom: isScrolled 
          ? '1px solid var(--border-color)' 
          : '1px solid transparent',
        boxShadow: isScrolled 
          ? '0 8px 32px rgba(0, 0, 0, 0.3)' 
          : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => handleNavClick('hero')}
          >
            <div className="relative">
              <Image 
                src="/icon.png" 
                alt="Rian Moraes" 
                width={40} 
                height={40} 
                className="rounded-full transition-transform duration-300 group-hover:scale-110" 
              />
              <div 
                className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ 
                  background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
                  filter: 'blur(8px)',
                  zIndex: -1 
                }}
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-1">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className="relative px-4 py-2 rounded-lg transition-all duration-300 font-medium text-sm"
                    style={{ 
                      color: activeSection === item.id 
                        ? 'var(--color-primary-light)' 
                        : 'var(--text-secondary)' 
                    }}
                  >
                    {item.label}
                    {/* Active indicator line */}
                    <span 
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full transition-all duration-300"
                      style={{
                        width: activeSection === item.id ? '60%' : '0%',
                        background: 'linear-gradient(90deg, var(--color-primary), var(--color-accent))',
                      }}
                    />
                  </button>
                </li>
              ))}
            </ul>

            <button
              onClick={() => handleNavClick("contact")}
              className="btn-primary text-sm !px-5 !py-2.5 !rounded-lg"
            >
              {t('contact')}
            </button>

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 hover:bg-white/5"
                style={{ color: 'var(--text-secondary)' }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
                <span className="uppercase text-xs font-semibold tracking-wider">{locale}</span>
              </button>

              {isLanguageMenuOpen && (
                <div 
                  className="absolute top-full right-0 mt-2 w-36 rounded-xl shadow-xl overflow-hidden"
                  style={{
                    background: 'rgba(9, 9, 11, 0.95)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid var(--border-color)',
                  }}
                >
                  <button
                    onClick={() => handleLanguageChange('pt')}
                    className={`w-full text-left px-4 py-3 text-sm transition-colors ${
                      locale === 'pt' ? 'gradient-text bg-white/5' : 'hover:bg-white/5'
                    }`}
                    style={{ color: locale === 'pt' ? undefined : 'var(--text-secondary)' }}
                  >
                    🇧🇷 Português
                  </button>
                  <button
                    onClick={() => handleLanguageChange('en')}
                    className={`w-full text-left px-4 py-3 text-sm transition-colors ${
                      locale === 'en' ? 'gradient-text bg-white/5' : 'hover:bg-white/5'
                    }`}
                    style={{ color: locale === 'en' ? undefined : 'var(--text-secondary)' }}
                  >
                    🇺🇸 English
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
            style={{ color: 'var(--text-primary)' }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        <div 
          className="md:hidden overflow-hidden transition-all duration-500 ease-out"
          style={{
            maxHeight: isMobileMenuOpen ? '400px' : '0',
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
        >
          <div 
            className="rounded-xl my-2 p-4"
            style={{
              background: 'rgba(9, 9, 11, 0.95)',
              backdropFilter: 'blur(20px)',
              border: '1px solid var(--border-color)',
            }}
          >
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                      activeSection === item.id ? 'gradient-text bg-white/5' : 'hover:bg-white/5'
                    }`}
                    style={{ color: activeSection === item.id ? undefined : 'var(--text-secondary)' }}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => handleNavClick("contact")}
                  className="w-full btn-primary text-sm mt-2"
                >
                  {t('contact')}
                </button>
              </li>
            </ul>

            <div className="mt-4 pt-4 border-t" style={{ borderColor: 'var(--border-color)' }}>
              <div className="flex gap-2">
                <button
                  onClick={() => handleLanguageChange('pt')}
                  className={`flex-1 px-4 py-3 text-sm rounded-lg transition-colors ${
                    locale === 'pt' ? 'gradient-text bg-white/5' : 'hover:bg-white/5'
                  }`}
                  style={{ color: locale === 'pt' ? undefined : 'var(--text-secondary)' }}
                >
                  🇧🇷 PT
                </button>
                <button
                  onClick={() => handleLanguageChange('en')}
                  className={`flex-1 px-4 py-3 text-sm rounded-lg transition-colors ${
                    locale === 'en' ? 'gradient-text bg-white/5' : 'hover:bg-white/5'
                  }`}
                  style={{ color: locale === 'en' ? undefined : 'var(--text-secondary)' }}
                >
                  🇺🇸 EN
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
