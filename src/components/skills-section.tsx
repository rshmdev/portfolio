'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import skills from '@/mocks/skills';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SkillsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const skillsGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      // Animação do título
      gsap.fromTo(
        titleRef.current,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Animação dos cards de skills
      gsap.fromTo(
        '.skill-card',
        {
          y: 80,
          opacity: 0,
          scale: 0.8,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: skillsGridRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Animações de hover para os cards
      const skillCards = document.querySelectorAll('.skill-card');
      skillCards.forEach((card) => {
        const handleMouseEnter = () => {
          gsap.to(card, {
            y: -10,
            scale: 1.05,
            duration: 0.3,
            ease: 'power2.out',
          });
          
          gsap.to(card.querySelector('.skill-icon'), {
            rotation: 360,
            duration: 0.6,
            ease: 'power2.out',
          });
        };

        const handleMouseLeave = () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: 'power2.out',
          });
        };

        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave);
      });

      // Animação de progresso das barras de skill
      gsap.utils.toArray('.skill-progress').forEach((progress: any) => {
        const width = progress.dataset.width;
        gsap.fromTo(
          progress,
          {
            width: '0%',
          },
          {
            width: width + '%',
            duration: 1.5,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: progress,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="container mx-auto px-6 py-20 min-h-screen flex flex-col justify-center">
      <div className="text-center mb-16">
        <h2 ref={titleRef} className="text-5xl lg:text-6xl font-bold text-white mb-6">
          Minhas <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Habilidades</span>
        </h2>
        <p className="fade-in-text text-xl text-gray-300 max-w-2xl mx-auto">
          Tecnologias e ferramentas que domino para criar soluções completas e inovadoras
        </p>
      </div>

      <div ref={skillsGridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill-card group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300"
          >
            {/* Efeito de brilho no hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="relative z-10">
              {/* Ícone */}
              <div className="skill-icon w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg flex items-center justify-center">
                <img 
                  src={skill.icon} 
                  alt={skill.name}
                  className="w-10 h-10 object-contain filter brightness-110"
                />
              </div>

              {/* Nome da skill */}
              <h3 className="text-lg font-semibold text-white text-center mb-3">
                {skill.name}
              </h3>

              {/* Partículas decorativas */}
              <div className="absolute top-2 right-2 w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping" />
              <div className="absolute bottom-2 left-2 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping" style={{ animationDelay: '0.5s' }} />
            </div>
          </div>
        ))}
      </div>

      {/* Seção de estatísticas */}
      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
        {[
          { number: '3+', label: 'Anos de Experiência' },
          { number: '50+', label: 'Projetos Concluídos' },
          { number: '15+', label: 'Tecnologias' },
          { number: '100%', label: 'Dedicação' },
        ].map((stat, index) => (
          <div key={index} className="text-center fade-in-text">
            <div className="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-2">
              {stat.number}
            </div>
            <div className="text-gray-300 text-sm lg:text-base">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}