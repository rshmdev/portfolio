'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslations } from 'next-intl';
import skills from '@/mocks/skills';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const skillIcons: Record<number, string> = {
  1: '⚛️',
  2: '🔧',
  3: '🗃️',
  4: '☁️',
  5: '💻',
  6: '🛠️',
  7: '🏗️',
  8: '🔒',
};

const skillColors: Record<number, string> = {
  1: '#61DAFB',
  2: '#68A063',
  3: '#336791',
  4: '#0089D6',
  5: '#F7DF1E',
  6: '#F05033',
  7: '#8B5CF6',
  8: '#EF4444',
};

const skillTechTags: Record<number, string[]> = {
  1: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Zustand', 'Framer Motion'],
  2: ['Node.js', 'NestJS', '.NET', 'GraphQL', 'WebSocket', 'Express'],
  3: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma', 'MySQL', 'TypeORM'],
  4: ['Azure', 'Docker', 'CI/CD', 'GitHub Actions', 'Terraform', 'K8s'],
  5: ['JavaScript', 'TypeScript', 'C#', 'Python', 'SQL', 'Go'],
  6: ['Git', 'Docker', 'Jest', 'Cypress', 'Playwright', 'Scrum'],
  7: ['DDD', 'CQRS', 'Microservices', 'Clean Arch', 'RabbitMQ', 'Kafka'],
  8: ['Redis Cache', 'OWASP', 'JWT', 'OAuth2', 'LGPD', 'SSL/TLS'],
};

export default function SkillsSection() {
  const t = useTranslations('skills');
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (typeof window === 'undefined' || !sectionRef.current || !trackRef.current) return;

    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        '.skills-header',
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

      // Divider
      gsap.fromTo(
        '.skills-divider',
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

      // ===== HORIZONTAL SCROLL =====
      const track = trackRef.current!;
      const cards = track.querySelectorAll('.hscroll-card');
      const totalCards = cards.length;

      // Calculate total scroll distance: each card width + gaps
      // We want to scroll from first card to last card in view
      const getScrollAmount = () => {
        const trackWidth = track.scrollWidth;
        const viewportWidth = window.innerWidth;
        return -(trackWidth - viewportWidth + 60); // 60px for padding
      };

      const scrollTween = gsap.to(track, {
        x: getScrollAmount,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: () => `+=${Math.abs(getScrollAmount()) * 1.5}`,
          pin: true,
          pinSpacing: true,
          scrub: 2,
          onUpdate: (self) => {
            const idx = Math.min(
              Math.floor(self.progress * totalCards),
              totalCards - 1
            );
            setCurrentIndex(idx);
          },
          invalidateOnRefresh: true,
        },
      });

      // Individual card parallax - text lags behind for depth
      cards.forEach((card) => {
        const inner = card.querySelector('.hscroll-card-inner');
        if (inner) {
          gsap.fromTo(
            inner,
            { x: 80, opacity: 0.5 },
            {
              x: 0,
              opacity: 1,
              ease: 'none',
              scrollTrigger: {
                trigger: card,
                containerAnimation: scrollTween,
                start: 'left 90%',
                end: 'left 30%',
                scrub: true,
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl"
          style={{ background: 'radial-gradient(circle, var(--color-secondary) 0%, transparent 70%)' }} />
        <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full opacity-5 blur-3xl animate-float-delayed"
          style={{ background: 'radial-gradient(circle, var(--color-primary) 0%, transparent 70%)' }} />
      </div>

      {/* Content wrapper - takes full viewport height when pinned */}
      <div className="relative z-10 h-screen flex flex-col">
        {/* Header - fixed at top */}
        <div className="pt-24 pb-8 px-6">
          <div className="skills-header max-w-6xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2 className="heading-lg mb-3">
                {t('title')}{' '}
                <span className="gradient-text">{t('titleHighlight')}</span>
              </h2>
              <div className="skills-divider w-16 h-0.5 rounded-full"
                style={{
                  background: 'linear-gradient(90deg, var(--color-primary), var(--color-accent))',
                  transformOrigin: 'left',
                }}
              />
            </div>

            {/* Progress */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                {skills.map((_, idx) => (
                  <div
                    key={idx}
                    className="transition-all duration-500"
                    style={{
                      width: currentIndex === idx ? '28px' : '6px',
                      height: '6px',
                      borderRadius: '3px',
                      background: currentIndex === idx
                        ? `linear-gradient(90deg, ${skillColors[idx + 1] || 'var(--color-primary)'}, var(--color-accent))`
                        : 'rgba(255, 255, 255, 0.1)',
                    }}
                  />
                ))}
              </div>
              <span className="text-sm font-mono" style={{ color: 'var(--text-muted)' }}>
                {String(currentIndex + 1).padStart(2, '0')}/{String(skills.length).padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>

        {/* Horizontal Track */}
        <div className="flex-1 flex items-center overflow-visible">
          <div
            ref={trackRef}
            className="flex gap-8 pl-6 md:pl-[max(2rem,calc((100vw-72rem)/2))]"
            style={{ willChange: 'transform' }}
          >
            {skills.map((skill, index) => (
              <div
                key={skill.id}
                className="hscroll-card flex-shrink-0"
                style={{ width: 'min(500px, 85vw)' }}
              >
                <div className="hscroll-card-inner h-full">
                  <div
                    className="group h-full rounded-3xl p-8 relative overflow-hidden transition-all duration-500 hover:translate-y-[-4px]"
                    style={{
                      background: 'var(--bg-glass)',
                      border: '1px solid var(--border-color)',
                    }}
                  >
                    {/* Card number background */}
                    <div
                      className="absolute -top-4 -right-4 text-[10rem] font-bold leading-none opacity-[0.03] pointer-events-none select-none"
                      style={{ fontFamily: 'var(--font-header)' }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </div>

                    {/* Accent line top */}
                    <div
                      className="absolute top-0 left-0 w-full h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: `linear-gradient(90deg, ${skillColors[skill.id]}, transparent)` }}
                    />

                    {/* Header */}
                    <div className="flex items-start gap-4 mb-6">
                      <div
                        className="text-4xl p-3 rounded-2xl transition-all duration-500 group-hover:scale-110"
                        style={{
                          background: `${skillColors[skill.id]}10`,
                          boxShadow: `0 0 0 1px ${skillColors[skill.id]}20`,
                        }}
                      >
                        {skillIcons[skill.id]}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-1 transition-colors duration-300 group-hover:text-white"
                          style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-header)' }}>
                          {t(`items.${skill.id}.name`)}
                        </h3>
                        <span
                          className="text-xs font-semibold uppercase tracking-wider"
                          style={{ color: skillColors[skill.id] }}
                        >
                          {t('area')} {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
                      {t(`items.${skill.id}.description`).length > 200
                        ? t(`items.${skill.id}.description`).substring(0, 200) + '...'
                        : t(`items.${skill.id}.description`)
                      }
                    </p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2">
                      {(skillTechTags[skill.id] || []).map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 hover:scale-105"
                          style={{
                            backgroundColor: `${skillColors[skill.id]}08`,
                            color: skillColors[skill.id],
                            border: `1px solid ${skillColors[skill.id]}15`,
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Icon image */}
                    <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <img
                        src={skill.icon}
                        alt={t(`items.${skill.id}.name`)}
                        className="w-10 h-10 object-contain"
                        style={{ filter: 'brightness(1.5) drop-shadow(0 0 10px rgba(255,255,255,0.2))' }}
                      />
                    </div>

                    {/* Hover glow */}
                    <div
                      className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        boxShadow: `inset 0 0 60px ${skillColors[skill.id]}05, 0 0 40px ${skillColors[skill.id]}08`,
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}

            {/* End spacer */}
            <div className="flex-shrink-0" style={{ width: '30vw' }} />
          </div>
        </div>

        {/* Scroll hint */}
        <div className="pb-8 px-6 flex items-center justify-center gap-2">
          <svg className="w-4 h-4" style={{ color: 'var(--text-muted)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
          <span className="text-xs font-medium tracking-widest uppercase" style={{ color: 'var(--text-muted)' }}>
            {t('scrollHint')}
          </span>
        </div>
      </div>
    </section>
  );
}
