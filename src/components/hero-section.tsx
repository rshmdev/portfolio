'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useTranslations } from 'next-intl';
import { BGPattern } from '@/components/ui/bg-pattern';

export default function HeroSection() {
  const t = useTranslations('hero');
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const { ScrollTrigger } = require('gsap/ScrollTrigger');
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Badge entrance
      timeline.fromTo(
        '.hero-badge',
        { y: -30, opacity: 0, scale: 0.8 },
        { y: 0, opacity: 1, scale: 1, duration: 0.6 },
        0.3
      );

      // Animate title
      timeline.fromTo(
        titleRef.current,
        { y: 100, opacity: 0, filter: 'blur(10px)' },
        { y: 0, opacity: 1, filter: 'blur(0px)', duration: 1.2 },
        0.4
      );

      // Animate subtitle
      timeline.fromTo(
        subtitleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        0.8
      );

      // Animate CTAs
      timeline.fromTo(
        ctaRef.current?.children || [],
        { y: 30, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.12 },
        1.1
      );

      // Tech stack
      timeline.fromTo(
        '.hero-tech',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.06 },
        1.3
      );

      // Scroll indicator
      timeline.fromTo(
        '.scroll-indicator',
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.5 },
        1.8
      );

      // ========== SCROLL PIN EFFECT ==========
      // Pin the hero section and fade/scale it out as you scroll
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        pin: true,
        pinSpacing: false,
        onUpdate: (self: any) => {
          const progress = self.progress;
          if (heroRef.current) {
            // Scale down, blur and fade as you scroll
            gsap.set(heroRef.current, {
              scale: 1 - progress * 0.15,
              opacity: 1 - progress * 1.2,
              filter: `blur(${progress * 8}px)`,
            });
          }
        },
      });

      // Floating animation for decorative elements
      gsap.to('.float-element', {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 0.3
      });

      // Parallax orbs
      gsap.to('.parallax-orb-1', {
        y: -40,
        x: 20,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      gsap.to('.parallax-orb-2', {
        y: -30,
        x: -15,
        duration: 7,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

    }, heroRef);

    // Mouse parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 20;
      const y = (clientY / window.innerHeight - 0.5) * 20;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      ctx.revert();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-20" style={{ zIndex: 1 }}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Minimal Gradient Accent */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] opacity-10 pointer-events-none blur-[100px]"
          style={{
            background: 'radial-gradient(circle at top, var(--color-primary) 0%, transparent 60%)',
          }}
        />

        {/* Grid Pattern */}
        <BGPattern
          variant="grid"
          mask="fade-bottom"
          fill="var(--color-slate-light)"
          size={60}
          className="opacity-[0.10]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Badge */}
        <div className="hero-badge inline-flex items-center gap-2 px-5 py-2.5 mb-8 rounded-full text-sm font-medium"
          style={{
            background: 'var(--bg-glass)',
            border: '1px solid var(--border-color)',
            boxShadow: 'var(--shadow-glow)',
          }}>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: 'var(--color-primary)' }} />
            <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: 'var(--color-primary)' }} />
          </span>
          <span style={{ color: 'var(--text-primary)' }}>Disponível para novos projetos</span>
        </div>

        {/* Main Title */}
        <h1 ref={titleRef} className="heading-xl mb-6" style={{ color: 'var(--text-primary)' }}>
          {t('greeting')}{' '}
          <span className="gradient-text">{t('name')}</span>
        </h1>

        {/* Subtitle */}
        <p ref={subtitleRef} className="body-lg mb-12 max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
          <span className="font-semibold gradient-text">{t('title')}</span>{' '}
          {t('subtitle')}
        </p>

        {/* CTA Buttons */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection('projects')}
            className="btn-primary w-full sm:w-auto group"
          >
            <span className="flex items-center justify-center gap-2">
              {t('cta')}
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>

          <button
            onClick={() => scrollToSection('contact')}
            className="btn-secondary w-full sm:w-auto group"
          >
            <span className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              {t('contact')}
            </span>
          </button>
        </div>

        {/* Tech Stack Pills */}
        <div className="mt-16 flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {['React', 'Next.js', 'TypeScript', 'Node.js', '.NET', 'Azure', 'PostgreSQL'].map((tech) => (
            <div
              key={tech}
              className="hero-tech px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:-translate-y-1 cursor-default hover:text-white"
              style={{
                background: 'var(--bg-glass)',
                border: '1px solid var(--border-color)',
                boxShadow: 'var(--shadow-glow)',
                color: 'var(--text-muted)',
              }}
            >
              {tech}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2">
        <div
          className="flex flex-col items-center gap-2 cursor-pointer group"
          onClick={() => scrollToSection('about')}
        >
          <span className="text-xs font-medium tracking-widest uppercase" style={{ color: 'var(--text-muted)' }}>Scroll</span>
          <div
            className="w-6 h-10 rounded-full flex items-start justify-center pt-2"
            style={{ border: '2px solid rgba(255, 255, 255, 0.15)' }}
          >
            <div
              className="w-1.5 h-3 rounded-full animate-bounce"
              style={{
                background: 'linear-gradient(180deg, var(--color-primary), var(--color-accent))',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
