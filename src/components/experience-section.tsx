'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslations } from 'next-intl';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface Experience {
  id: number;
  company: string;
  position: string;
  period: string;
  duration: string;
  description: string;
  achievements: string[];
  technologies: string[];
  type: 'current' | 'past';
}



export default function ExperienceSection() {
  const t = useTranslations('experience');
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

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
      // Animação do título
      gsap.fromTo(
        titleRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Animação da linha da timeline
      gsap.fromTo(
        '.timeline-line',
        {
          scaleY: 0,
        },
        {
          scaleY: 1,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Animação dos cards de experiência
      gsap.fromTo(
        '.experience-card',
        {
          opacity: 0,
          x: (index) => (index % 2 === 0 ? -100 : 100),
          scale: 0.8,
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.8,
          ease: 'back.out(1.7)',
          stagger: 0.3,
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Animação dos pontos da timeline
      gsap.fromTo(
        '.timeline-dot',
        {
          scale: 0,
          rotation: 180,
        },
        {
          scale: 1,
          rotation: 0,
          duration: 0.6,
          ease: 'back.out(2)',
          stagger: 0.2,
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="container mx-auto px-4 sm:px-6 py-12 sm:py-20 min-h-screen flex flex-col justify-center">
      {/* Título da seção */}
      <div className="text-center mb-12 sm:mb-16">
        <h2 ref={titleRef} className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6" style={{ fontSize: 'clamp(1.875rem, 5vw, 4rem)' }}>
          {t('title')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">{t('titleHighlight')}</span>
        </h2>
        <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
          {t('description')}
        </p>
      </div>

      {/* Timeline */}
      <div ref={timelineRef} className="relative max-w-6xl mx-auto">
        {/* Linha central da timeline - Mobile: Left aligned, Desktop: Center */}
        <div className="absolute left-4 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500 timeline-line origin-top" />

        {/* Cards de experiência */}
        <div className="space-y-8 sm:space-y-16 ">
          {experiences.map((exp, index) => (
            <div key={exp.id} className={`experience-card relative flex items-start lg:items-center ${
              index % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'
            }`}>
              {/* Ponto da timeline - Mobile: Left positioned, Desktop: Center */}
              <div className="absolute left-0 lg:left-1/2 lg:transform lg:-translate-x-1/2 z-20">
                <div className={`timeline-dot w-4 h-4 lg:w-6 lg:h-6 rounded-full border-2 lg:border-4 ${exp.type === 'current' ? 'bg-green-400 border-green-300' : 'bg-purple-400 border-purple-300'} shadow-lg`} />
                {exp.type === 'current' && (
                  <div className="absolute -top-1 -left-1 w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-green-400/30 animate-ping" />
                )}
              </div>

              {/* Content */}
                <div className={`w-full lg:w-5/12 ml-12 lg:ml-0 `}>
                <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-4 sm:p-6 hover:border-purple-500/50 transition-all duration-300 group">
                  {/* Header do card */}
                  <div className="mb-4">
                    <div className="flex items-start sm:items-center gap-2 mb-2 flex-col sm:flex-row">
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                        {exp.position}
                      </h3>
                      {exp.type === 'current' && (
                        <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs font-semibold rounded-full border border-green-500/30 self-start">
                          {t('current')}
                        </span>
                      )}
                    </div>
                    <h4 className="text-base sm:text-lg font-semibold text-purple-400 mb-1">{exp.company}</h4>
                    <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-400">
                      <span>{exp.period}</span>
                      <span>•</span>
                      <span>{exp.duration}</span>
                    </div>
                  </div>

                  {/* Descrição */}
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Conquistas */}
                  <div className="mb-4">
                    <h5 className="text-xs sm:text-sm font-semibold text-white mb-2">{t('achievements')}:</h5>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-xs text-gray-400 flex items-start gap-2">
                          <span className="text-purple-400 mt-1 flex-shrink-0">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tecnologias */}
                  <div>
                    <h5 className="text-xs sm:text-sm font-semibold text-white mb-2">{t('technologies')}:</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-2 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded text-xs font-medium text-purple-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Espaço vazio do outro lado - Desktop only */}
              <div className="hidden lg:block lg:w-5/12" />
            </div>
          ))}
        </div>
      </div>

      {/* Call to action */}
      <div className="text-center mt-16">
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4">
            {t('cta.title')}
          </h3>
          <p className="text-gray-300 mb-6">
            {t('cta.description')}
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
          >
            {t('cta.button')}
          </button>
        </div>
      </div>
    </div>
  );
}