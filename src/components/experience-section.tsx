'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslations } from 'next-intl';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ExperienceSection() {
  const t = useTranslations('experience');
  const sectionRef = useRef<HTMLDivElement>(null);

  const experiences = [
    {
      id: 1,
      company: "SMI",
      position: t('jobs.smi.position'),
      period: t('jobs.smi.period'),
      duration: t('jobs.smi.duration'),
      description: t('jobs.smi.description'),
      achievements: [
        t('jobs.smi.achievements.0'),
        t('jobs.smi.achievements.1'),
        t('jobs.smi.achievements.2'),
        t('jobs.smi.achievements.3'),
        t('jobs.smi.achievements.4')
      ],
      technologies: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "Azure"],
      type: "current" as const
    },
    {
      id: 2,
      company: "Facil.tel",
      position: t('jobs.faciltel.position'),
      period: t('jobs.faciltel.period'),
      duration: t('jobs.faciltel.duration'),
      description: t('jobs.faciltel.description'),
      achievements: [
        t('jobs.faciltel.achievements.0'),
        t('jobs.faciltel.achievements.1'),
        t('jobs.faciltel.achievements.2'),
        t('jobs.faciltel.achievements.3'),
        t('jobs.faciltel.achievements.4')
      ],
      technologies: ["Next.js 14", "React", "TypeScript", "Tailwind CSS", "Angular.js"],
      type: "past" as const
    },
    {
      id: 3,
      company: "Direção Concursos",
      position: t('jobs.direcao.position'),
      period: t('jobs.direcao.period'),
      duration: t('jobs.direcao.duration'),
      description: t('jobs.direcao.description'),
      achievements: [
        t('jobs.direcao.achievements.0'),
        t('jobs.direcao.achievements.1'),
        t('jobs.direcao.achievements.2'),
        t('jobs.direcao.achievements.3'),
        t('jobs.direcao.achievements.4')
      ],
      technologies: ["React", "Next.js", "Node.js", "Webflow", "SEO", "JavaScript"],
      type: "past" as const
    }
  ];

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      // Animate header
      gsap.fromTo(
        '.experience-header',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );

      // Animate divider
      gsap.fromTo(
        '.experience-divider',
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );

      // Timeline line growing with scroll
      gsap.fromTo(
        '.exp-timeline-line',
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 2,
          ease: 'none',
          scrollTrigger: {
            trigger: '.experience-timeline',
            start: 'top 70%',
            end: 'bottom 30%',
            scrub: 1,
          },
        }
      );

      // Individual card reveal on scroll
      const cards = document.querySelectorAll('.exp-timeline-item');
      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            y: 80,
            opacity: 0,
            scale: 0.95,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      // Timeline dot scale-in per card
      const dots = document.querySelectorAll('.exp-timeline-dot');
      dots.forEach((dot) => {
        gsap.fromTo(
          dot,
          { scale: 0 },
          {
            scale: 1,
            duration: 0.5,
            ease: 'back.out(2)',
            scrollTrigger: {
              trigger: dot,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="relative py-32 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ background: 'radial-gradient(circle, var(--color-primary) 0%, transparent 70%)' }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="experience-header text-center mb-20">
          <h2 className="heading-lg mb-4">
            {t('title')}{' '}
            <span className="gradient-text">{t('titleHighlight')}</span>
          </h2>
          <div className="experience-divider section-divider mb-6" style={{ transformOrigin: 'center' }} />
          <p className="body-lg max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            {t('description')}
          </p>
        </div>

        {/* Timeline */}
        <div className="experience-timeline relative">
          {/* Center Line */}
          <div
            className="exp-timeline-line absolute left-6 lg:left-1/2 lg:-translate-x-1/2 w-[2px] h-full origin-top"
            style={{ background: 'linear-gradient(180deg, var(--color-primary) 0%, var(--color-accent) 50%, transparent 100%)' }}
          />

          {/* Experience Cards */}
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`exp-timeline-item relative flex items-start ${index % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'
                  }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 lg:left-1/2 -translate-x-1/2 z-20">
                  <div className={`exp-timeline-dot relative w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold transition-all duration-500 ${exp.type === 'current' ? '' : ''
                    }`}
                    style={{
                      backgroundColor: 'var(--bg-secondary)',
                      border: `3px solid ${exp.type === 'current' ? '#4ade80' : 'var(--color-primary)'}`,
                      color: exp.type === 'current' ? '#4ade80' : 'var(--color-primary)',
                      fontFamily: 'var(--font-header)',
                      boxShadow: exp.type === 'current'
                        ? '0 0 20px rgba(74, 222, 128, 0.3)'
                        : '0 0 15px rgba(70, 102, 255, 0.2)',
                    }}>
                    {index + 1}
                    {exp.type === 'current' && (
                      <div className="absolute -inset-2 rounded-full bg-green-400/15 animate-ping" />
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className={`w-full lg:w-[calc(50%-40px)] ml-20 lg:ml-0 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'
                  }`}>
                  <div
                    className="group p-6 rounded-2xl transition-all duration-500 hover:translate-y-[-4px] relative overflow-hidden"
                    style={{
                      background: 'var(--bg-glass)',
                      border: '1px solid var(--border-color)',
                    }}
                  >
                    {/* Top accent line */}
                    <div
                      className="absolute top-0 left-0 w-full h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: exp.type === 'current'
                          ? 'linear-gradient(90deg, #4ade80, var(--color-accent))'
                          : 'linear-gradient(90deg, var(--color-primary), var(--color-accent))',
                      }}
                    />

                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-start gap-2 mb-2 flex-col sm:flex-row">
                        <h3 className="text-xl font-bold transition-colors duration-300"
                          style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-header)' }}>
                          {exp.position}
                        </h3>
                        {exp.type === 'current' && (
                          <span className="px-3 py-1 rounded-full text-xs font-semibold flex-shrink-0"
                            style={{ backgroundColor: 'rgba(74, 222, 128, 0.1)', color: '#4ade80', border: '1px solid rgba(74, 222, 128, 0.2)' }}>
                            {t('current')}
                          </span>
                        )}
                      </div>
                      <h4 className="text-lg font-semibold gradient-text mb-2">{exp.company}</h4>
                      <div className="flex items-center gap-4 text-sm" style={{ color: 'var(--text-muted)' }}>
                        <span className="flex items-center gap-1">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {exp.period}
                        </span>
                        <span>•</span>
                        <span>{exp.duration}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h5 className="text-xs font-semibold mb-2 uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                        {t('achievements')}
                      </h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                            <svg className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: 'var(--color-accent)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-xs font-medium transition-all duration-300 hover:scale-105"
                          style={{
                            backgroundColor: 'rgba(70, 102, 255, 0.06)',
                            color: 'var(--color-primary-light)',
                            border: '1px solid rgba(70, 102, 255, 0.1)'
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer */}
                <div className="hidden lg:block lg:w-[calc(50%-40px)]" />
              </div>
            ))}
          </div>

          {/* End dot */}
          <div className="absolute bottom-0 left-6 lg:left-1/2 -translate-x-1/2">
            <div
              className="w-4 h-4 rounded-full"
              style={{
                background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
                boxShadow: '0 0 20px rgba(70, 102, 255, 0.4)',
              }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
