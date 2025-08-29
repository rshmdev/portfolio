'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutSection() {
  const t = useTranslations('about');
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      // Animação do texto
      gsap.fromTo(
        textRef.current,
        {
          x: -100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 40%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Animação da imagem/avatar
      gsap.fromTo(
        imageRef.current,
        {
          x: 100,
          opacity: 0,
          scale: 0.8,
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Animação de hover para a imagem
      const handleMouseEnter = () => {
        gsap.to(imageRef.current, {
          scale: 1.05,
          rotation: 5,
          duration: 0.3,
          ease: 'power2.out',
        });
      };

      const handleMouseLeave = () => {
        gsap.to(imageRef.current, {
          scale: 1,
          rotation: 0,
          duration: 0.3,
          ease: 'power2.out',
        });
      };

      const imageElement = imageRef.current;
      if (imageElement) {
        imageElement.addEventListener('mouseenter', handleMouseEnter);
        imageElement.addEventListener('mouseleave', handleMouseLeave);
      }

      return () => {
        if (imageElement) {
          imageElement.removeEventListener('mouseenter', handleMouseEnter);
          imageElement.removeEventListener('mouseleave', handleMouseLeave);
        }
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="container mx-auto px-6 py-20 flex items-center justify-center min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl">
        {/* Texto */}
        <div ref={textRef} className="space-y-6">
          <h2 className="fade-in-text text-5xl lg:text-6xl font-bold text-white mb-6" style={{ fontSize: 'clamp(3rem, 6vw, 4rem)' }}>
            {t('title')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">{t('titleHighlight')}</span>
          </h2>
          
          <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
            <p className="fade-in-text">
              {t('intro')} <strong className="text-white">{t('name')}</strong>{t('introDescription')}
            </p>
            
            <p className="fade-in-text">
              {t('expertise')}
            </p>
            
            <p className="fade-in-text">
              {t('journey')}
            </p>
            
            <p className="fade-in-text">
              {t('interests')}
            </p>
          </div>

          <div className="fade-in-text flex flex-wrap gap-3 mt-8">
            {['React', 'Next.js', 'Node.js', 'TypeScript', 'JavaScript', 'Python', 'PostgreSQL', 'MongoDB'].map((tech) => (
              <span 
                key={tech}
                className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-sm font-medium text-purple-300 hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Imagem/Avatar */}
        <div ref={imageRef} className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-80 h-80 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 p-1">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden">
                <div className="w-72 h-72 rounded-full bg-gradient-to-br from-purple-400/20 via-pink-400/20 to-blue-400/20 flex items-center justify-center">
                  <Image
                    src="/icon.png"
                    alt={t('name')}
                    width={180}
                    height={180}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Elementos decorativos */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500 rounded-full animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-500 rounded-full animate-pulse" />
            <div className="absolute top-1/2 -left-8 w-4 h-4 bg-blue-500 rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}