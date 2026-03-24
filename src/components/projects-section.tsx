"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";
import { createPortal } from "react-dom";
import works from "@/mocks/works";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Work {
  id: number;
  titleKey: string;
  descriptionKey: string;
  images: string[];
  github?: string;
  link?: string;
  technologies: string[];
  methodsKey: string;
  benefitsKey: string;
  resultsKey: string;
}

export default function ProjectsSection() {
  const t = useTranslations('projects');
  const sectionRef = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<Work | null>(null);
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window === 'undefined' || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Animate header
      gsap.fromTo(
        '.projects-header',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.projects-header',
            start: 'top 80%',
          },
        }
      );

      // Animate divider
      gsap.fromTo(
        '.projects-divider',
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.projects-header',
            start: 'top 80%',
          },
        }
      );

      // Animate cards on scroll
      gsap.fromTo(
        '.project-card',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.projects-grid',
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const openProjectModal = (project: Work) => {
    setSelectedProject(project);
    setActiveImageIdx(0);
    document.body.style.overflow = "hidden";
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "unset";
  };

  return (
    <>
      <section ref={sectionRef} id="projects" className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
          <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl"
            style={{ background: 'radial-gradient(circle, var(--color-primary) 0%, transparent 70%)' }} />
          <div className="absolute bottom-1/3 left-0 w-72 h-72 rounded-full opacity-5 blur-3xl animate-float"
            style={{ background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 70%)' }} />
        </div>

        {/* Section Header - not pinned */}
        <div className="relative z-10 pt-32 pb-8 px-6">
          <div className="projects-header flex flex-col md:flex-row md:items-end justify-between gap-6 max-w-7xl mx-auto">
            <div>
              <h2 className="heading-lg mb-4">
                {t('title')}{' '}
                <span className="gradient-text">{t('titleHighlight')}</span>
              </h2>
              <div className="projects-divider section-divider mb-6" style={{ transformOrigin: 'left' }} />
              <p className="body-lg max-w-xl" style={{ color: 'var(--text-secondary)' }}>
                {t('description')}
              </p>
            </div>
            
            {/* Carousel Navigation */}
            <div className="flex items-center gap-3">
              <button 
                onClick={() => carouselRef.current?.scrollBy({ left: -400, behavior: 'smooth'})}
                className="w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110"
                style={{ background: 'var(--bg-glass)', border: '1px solid var(--border-color)', color: 'var(--text-primary)' }}
                aria-label={t('common.previous')}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button 
                onClick={() => carouselRef.current?.scrollBy({ left: 400, behavior: 'smooth'})}
                className="w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110"
                style={{ background: 'var(--bg-glass)', border: '1px solid var(--border-color)', color: 'var(--text-primary)' }}
                aria-label={t('common.next')}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>
        </div>

        {/* ===== PROJECTS CAROUSEL ===== */}
        <div className="relative z-10 w-full px-6 pb-24">
          <div 
            ref={carouselRef}
            className="projects-grid flex overflow-x-auto snap-x snap-mandatory gap-6 md:gap-8 pb-12 hide-scrollbar mx-auto
                       pl-1 md:pl-[max(1rem,calc((100vw-80rem)/2))]
                       pr-6 md:pr-[calc((100vw-72rem)/2)]"
            style={{
              scrollBehavior: 'smooth',
            }}
          >
            {works.map((work, index) => (
              <div
                key={work.id}
                className="project-card snap-center shrink-0 w-[85vw] sm:w-[500px] lg:w-[600px] group cursor-pointer flex flex-col rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2"

                style={{
                  background: 'var(--bg-glass)',
                  border: '1px solid var(--border-color)',
                  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)'
                }}
                onClick={() => openProjectModal(work)}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={work.images[0]}
                    alt={t(work.titleKey)}
                    width={600}
                    height={450}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay gradiente inferior para leitura fácil do card num */}
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[var(--bg-glass)] to-transparent opacity-90" />
                  <div
                    className="absolute top-4 right-4 text-5xl font-bold opacity-10 leading-none"
                    style={{ fontFamily: 'var(--font-header)', zIndex: 10 }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-8 pt-6">
                  <h3 className="text-2xl font-bold mb-3 transition-colors duration-300 group-hover:text-[var(--color-primary-light)]" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-header)' }}>
                    {t(work.titleKey)}
                  </h3>
                  
                  <p className="text-sm leading-relaxed mb-6 flex-1" style={{ color: 'var(--text-secondary)' }}>
                    {t(work.descriptionKey).length > 120 
                      ? t(work.descriptionKey).substring(0, 120) + '...' 
                      : t(work.descriptionKey)}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {work.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1.5 rounded-md text-xs font-semibold"
                        style={{
                          backgroundColor: 'rgba(16, 185, 129, 0.08)',
                          color: 'var(--color-primary)',
                          border: '1px solid rgba(16, 185, 129, 0.15)'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                    {work.technologies.length > 3 && (
                      <span
                        className="px-3 py-1.5 rounded-md text-xs font-semibold"
                        style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', color: 'var(--text-muted)' }}
                      >
                        +{work.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div 
                    className="mt-auto inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-300"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    {t('modal.viewDetails')}
                    <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* ===== PROJECT MODAL ===== */}
      {mounted && selectedProject && createPortal(
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-6"
          style={{ backgroundColor: 'rgba(9, 9, 11, 0.85)', backdropFilter: 'blur(16px)' }}
          onClick={closeProjectModal}
        >
          <div
            className="relative rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto hide-scrollbar"
            style={{
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-color)',
              boxShadow: 'var(--shadow-xl), 0 0 60px rgba(16, 185, 129, 0.05)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Hero */}
            <div className="relative aspect-video md:aspect-[21/9] overflow-hidden rounded-t-2xl">
              <Image
                src={selectedProject.images[activeImageIdx] || selectedProject.images[0]}
                alt={t(selectedProject.titleKey)}
                width={1200}
                height={600}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-secondary)] via-transparent to-transparent" />

              {/* Close */}
              <button
                onClick={closeProjectModal}
                className="absolute top-4 right-4 p-2 rounded-full transition-all duration-300 hover:scale-110"
                style={{
                  background: 'var(--bg-glass)',
                  backdropFilter: 'blur(8px)',
                  color: 'var(--text-secondary)',
                  border: '1px solid var(--border-color)',
                }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Image nav dots */}
              {selectedProject.images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
                  {selectedProject.images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => { e.stopPropagation(); setActiveImageIdx(idx); }}
                      className="transition-all duration-300"
                      style={{
                        width: activeImageIdx === idx ? '24px' : '8px',
                        height: '8px',
                        borderRadius: '4px',
                        background: activeImageIdx === idx
                          ? 'linear-gradient(90deg, var(--color-primary), var(--color-accent))'
                          : 'rgba(255, 255, 255, 0.3)',
                      }}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Modal Content */}
            <div className="p-6 md:p-8 -mt-8 relative z-10">
              <h2 className="heading-sm mb-2">{t(selectedProject.titleKey)}</h2>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {selectedProject.technologies.map((tech, index) => (
                  <span key={index} className="px-3 py-1 rounded-lg text-xs font-semibold"
                    style={{ backgroundColor: 'rgba(16, 185, 129, 0.08)', color: 'var(--color-primary-light)', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                    {tech}
                  </span>
                ))}
              </div>

              {/* Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="md:col-span-2">
                  <h3 className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--color-primary-light)' }}>{t('modal.about')}</h3>
                  <p className="body-md leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{t(selectedProject.descriptionKey)}</p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--color-primary-light)' }}>{t('modal.methods')}</h3>
                  <ul className="space-y-2">
                    {t.raw(selectedProject.methodsKey).map((method: string, index: number) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--color-primary)' }} />
                        <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{method}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: 'var(--color-accent)' }}>{t('modal.benefits')}</h3>
                  <ul className="space-y-2">
                    {t.raw(selectedProject.benefitsKey).map((benefit: string, index: number) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--color-accent)' }} />
                        <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="md:col-span-2 mt-4">
                  <h3 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: 'var(--color-primary)' }}>{t('modal.results')}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {t.raw(selectedProject.resultsKey).map((result: string, index: number) => (
                      <div key={index} className="flex items-start gap-3 p-4 rounded-xl transition-all duration-300 hover:-translate-y-1" style={{ background: 'var(--bg-glass)', border: '1px solid var(--border-color)' }}>
                        <svg className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: 'var(--color-accent)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Gallery thumbnails */}
              {selectedProject.images.length > 1 && (
                <div className="mb-8">
                  <h3 className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--text-muted)' }}>{t('modal.screenshots')}</h3>
                  <div className="flex gap-3 overflow-x-auto pb-2">
                    {selectedProject.images.map((image, idx) => (
                      <button key={idx} onClick={() => setActiveImageIdx(idx)}
                        className="flex-shrink-0 relative rounded-lg overflow-hidden transition-all duration-300"
                        style={{ width: '120px', height: '72px', border: activeImageIdx === idx ? '2px solid var(--color-primary)' : '2px solid transparent', opacity: activeImageIdx === idx ? 1 : 0.5 }}>
                        <Image src={image} alt={`${t(selectedProject.titleKey)} - ${idx + 1}`} width={120} height={72} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                {selectedProject.github && (
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="btn-secondary flex items-center justify-center gap-2 flex-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    <span>{t('modal.github')}</span>
                  </a>
                )}
                {selectedProject.link && (
                  <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center justify-center gap-2 flex-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <span>{t('modal.viewSite')}</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      , document.body)}
    </>
  );
}
