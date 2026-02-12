'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslations } from 'next-intl';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

function AnimatedCounter({ target, suffix = '' }: { target: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!ref.current || typeof window === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const numericTarget = parseInt(target.replace(/\D/g, '')) || 0;
          const duration = 2000;
          const startTime = Date.now();

          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(numericTarget * eased));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  const displayValue = target.includes('%')
    ? `${count}%`
    : `${count}${suffix}`;

  return <div ref={ref}>{displayValue}</div>;
}

export default function AboutSection() {
  const t = useTranslations('about');
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      // Animate content blocks with scroll-linked reveal
      gsap.fromTo(
        '.about-content',
        { x: -60, opacity: 0, filter: 'blur(5px)' },
        {
          x: 0,
          opacity: 1,
          filter: 'blur(0px)',
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 65%',
          },
        }
      );

      // Right column
      gsap.fromTo(
        '.about-right',
        { x: 60, opacity: 0, filter: 'blur(5px)' },
        {
          x: 0,
          opacity: 1,
          filter: 'blur(0px)',
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 65%',
          },
        }
      );

      // Animate divider
      gsap.fromTo(
        '.about-divider',
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 65%',
          },
        }
      );

      // Animate stats with stagger
      gsap.fromTo(
        '.about-stat',
        { y: 40, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.12,
          ease: 'back.out(1.4)',
          scrollTrigger: {
            trigger: '.about-stats',
            start: 'top 88%',
          },
        }
      );

      // Tech stack animation
      gsap.fromTo(
        '.about-tech',
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.06,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.about-tech-wrapper',
            start: 'top 85%',
          },
        }
      );

      // Highlight items reveal
      gsap.fromTo(
        '.about-highlight',
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.about-highlights',
            start: 'top 85%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { number: '3', suffix: '+', label: 'Anos de Experiência', icon: '🚀' },
    { number: '50', suffix: '+', label: 'Projetos Concluídos', icon: '💼' },
    { number: '20', suffix: '+', label: 'Tecnologias', icon: '⚡' },
    { number: '100', suffix: '%', label: 'Dedicação', icon: '🎯' },
  ];

  const highlights = [
    { icon: '🏭', title: 'Industry 4.0 & IoT', desc: 'Sistemas inteligentes para indústria' },
    { icon: '🌐', title: 'Full Stack', desc: 'Front-end ao deploy em cloud' },
    { icon: '📊', title: 'Dashboards & Analytics', desc: 'Dados em tempo real' },
    { icon: '🔧', title: 'Dev Tools', desc: 'CLI tools e automação' },
  ];

  return (
    <section ref={sectionRef} className="relative py-32 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 70%)' }} />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full opacity-5 blur-3xl animate-float"
          style={{ background: 'radial-gradient(circle, var(--color-primary) 0%, transparent 70%)' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Content Left */}
          <div className="about-content space-y-6">
            <h2 className="heading-lg mb-2">
              {t('title')}{' '}
              <span className="gradient-text">{t('titleHighlight')}</span>
            </h2>

            <div className="about-divider w-16 h-0.5 rounded-full"
              style={{
                background: 'linear-gradient(90deg, var(--color-primary), var(--color-accent))',
                transformOrigin: 'left',
              }}
            />

            <div className="space-y-5 pt-2">
              <p className="body-lg" style={{ color: 'var(--text-secondary)' }}>
                {t('intro')} <strong className="gradient-text">{t('name')}</strong>{t('introDescription')}
              </p>

              <p className="body-md" style={{ color: 'var(--text-secondary)' }}>
                {t('expertise')}
              </p>

              <p className="body-md" style={{ color: 'var(--text-secondary)' }}>
                {t('journey')}
              </p>
            </div>

            {/* Tech Stack */}
            <div className="about-tech-wrapper pt-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: 'var(--text-muted)' }}>
                Stack Principal
              </h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'TypeScript', 'Node.js', '.NET', 'Azure', 'PostgreSQL', 'MongoDB'].map((tech) => (
                  <div
                    key={tech}
                    className="about-tech px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 cursor-default"
                    style={{
                      background: 'rgba(70, 102, 255, 0.06)',
                      border: '1px solid rgba(70, 102, 255, 0.12)',
                      color: 'var(--color-primary-light)',
                    }}
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="about-right space-y-6">
            {/* What I do cards */}
            <div className="about-highlights space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: 'var(--text-muted)' }}>
                O que eu faço
              </h3>
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="about-highlight group flex items-center gap-4 p-4 rounded-xl transition-all duration-500 hover:translate-x-2 cursor-default"
                  style={{
                    background: 'rgba(70, 102, 255, 0.03)',
                    border: '1px solid rgba(70, 102, 255, 0.06)',
                  }}
                >
                  <div className="text-2xl transition-transform duration-300 group-hover:scale-125 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-0.5 transition-colors duration-300 group-hover:text-white"
                      style={{ color: 'var(--text-primary)' }}>
                      {item.title}
                    </h4>
                    <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                      {item.desc}
                    </p>
                  </div>
                  <svg
                    className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1"
                    style={{ color: 'var(--color-primary)' }}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="about-stats grid grid-cols-2 md:grid-cols-4 gap-6 mt-24">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="about-stat text-center p-6 rounded-2xl transition-all duration-500 hover:scale-105 cursor-default group"
              style={{
                background: 'rgba(70, 102, 255, 0.03)',
                border: '1px solid rgba(70, 102, 255, 0.08)',
              }}
            >
              <div className="text-2xl mb-3 transition-transform duration-300 group-hover:scale-125">
                {stat.icon}
              </div>
              <div className="heading-md gradient-text mb-1">
                <AnimatedCounter
                  target={stat.number === '100' ? '100%' : stat.number}
                  suffix={stat.suffix}
                />
              </div>
              <div className="text-sm font-medium" style={{ color: 'var(--text-muted)' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
