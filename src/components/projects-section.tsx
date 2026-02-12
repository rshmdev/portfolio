"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";
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
  const tunnelRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<Work | null>(null);
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (typeof window === 'undefined' || !sectionRef.current || !tunnelRef.current) return;

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

      // ===== TUNNEL EFFECT =====
      const totalProjects = works.length;
      const cards = document.querySelectorAll('.tunnel-card');

      // Create master timeline
      const masterTl = gsap.timeline({
        scrollTrigger: {
          trigger: tunnelRef.current,
          start: 'top top',
          // Each project gets ~300vh of scroll space for a much smoother feel
          end: `+=${totalProjects * 300}vh`,
          pin: true,
          pinSpacing: true,
          scrub: 3, // Higher = smoother/slower interpolation
          onUpdate: (self) => {
            const idx = Math.min(
              Math.floor(self.progress * totalProjects),
              totalProjects - 1
            );
            setCurrentIndex(idx);
          },
        },
      });

      // For each project, create entrance → hold → exit sequence
      cards.forEach((card, i) => {
        const segmentDuration = 1;
        const enterDuration = 0.25;  // Quick entrance
        const holdDuration = 0.5;    // Long hold - time to read
        const exitDuration = 0.25;   // Quick exit

        // Start time for this card
        const startTime = i * segmentDuration;

        if (i === 0) {
          // First card starts already visible (no entrance animation)
          gsap.set(card, {
            scale: 1,
            opacity: 1,
            z: 0,
            rotateX: 0,
            filter: 'blur(0px)',
          });

          // Hold: stay in focus
          masterTl.to(
            card,
            {
              scale: 1,
              opacity: 1,
              z: 0,
              duration: holdDuration + enterDuration, // Extra time since we skip entrance
              ease: 'none',
            },
            startTime
          );
        } else {
          // Enter: fly in from tunnel depth
          masterTl.fromTo(
            card,
            {
              scale: 0.2,
              opacity: 0,
              z: -1500,
              rotateX: 15,
              filter: 'blur(20px)',
            },
            {
              scale: 1,
              opacity: 1,
              z: 0,
              rotateX: 0,
              filter: 'blur(0px)',
              duration: enterDuration,
              ease: 'power2.out',
            },
            startTime
          );

          // Hold: stay in focus
          masterTl.to(
            card,
            {
              scale: 1,
              opacity: 1,
              z: 0,
              duration: holdDuration,
            },
            startTime + enterDuration
          );
        }

        // Exit: fly past camera (except last card)
        const holdStart = i === 0
          ? startTime + holdDuration + enterDuration
          : startTime + enterDuration + holdDuration;

        if (i < totalProjects - 1) {
          masterTl.to(
            card,
            {
              scale: 2.5,
              opacity: 0,
              z: 800,
              filter: 'blur(10px)',
              duration: exitDuration,
              ease: 'power2.in',
            },
            holdStart
          );
        }
      });
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
        <div className="relative z-10 pt-32 pb-16 px-6">
          <div className="projects-header text-center max-w-6xl mx-auto">
            <h2 className="heading-lg mb-4">
              {t('title')}{' '}
              <span className="gradient-text">{t('titleHighlight')}</span>
            </h2>
            <div className="projects-divider section-divider mb-6" style={{ transformOrigin: 'center' }} />
            <p className="body-lg max-w-3xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              {t('description')}
            </p>
          </div>
        </div>

        {/* ===== TUNNEL VIEWPORT ===== */}
        <div
          ref={tunnelRef}
          className="relative w-full overflow-hidden"
          style={{
            height: '100vh',
            perspective: '1200px',
            perspectiveOrigin: '50% 50%',
          }}
        >
          {/* Tunnel background lines */}
          <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
            {/* Radial tunnel grid */}
            <div className="absolute inset-0 opacity-[0.04]"
              style={{
                background: `
                     repeating-conic-gradient(from 0deg, transparent 0deg 10deg, rgba(70, 102, 255, 0.3) 10deg 10.5deg),
                     radial-gradient(circle, transparent 0%, var(--bg-primary) 70%)
                   `,
              }}
            />
            {/* Center vanishing point glow */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(70, 102, 255, 0.08) 0%, transparent 70%)',
              }}
            />
          </div>

          {/* Progress indicator */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
            {works.map((_, idx) => (
              <div
                key={idx}
                className="transition-all duration-500"
                style={{
                  width: currentIndex === idx ? '32px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  background: currentIndex === idx
                    ? 'linear-gradient(90deg, var(--color-primary), var(--color-accent))'
                    : 'rgba(255, 255, 255, 0.15)',
                  boxShadow: currentIndex === idx ? '0 0 12px rgba(70, 102, 255, 0.4)' : 'none',
                }}
              />
            ))}
            <span className="text-xs font-mono ml-2" style={{ color: 'var(--text-muted)' }}>
              {String(currentIndex + 1).padStart(2, '0')}/{String(works.length).padStart(2, '0')}
            </span>
          </div>

          {/* Project Cards - stacked */}
          <div className="absolute inset-0 flex items-center justify-center" style={{ transformStyle: 'preserve-3d' }}>
            {works.map((work, index) => (
              <div
                key={work.id}
                className="tunnel-card absolute w-full max-w-5xl px-6"
                style={{
                  opacity: 0,
                  transformStyle: 'preserve-3d',
                  willChange: 'transform, opacity, filter',
                }}
              >
                <div
                  className="group cursor-pointer"
                  onClick={() => openProjectModal(work)}
                >
                  <div className="flex flex-col lg:flex-row gap-8 items-center">
                    {/* Image */}
                    <div className="w-full lg:w-3/5">
                      <div className="project-showcase">
                        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                          <Image
                            src={work.images[0]}
                            alt={t(work.titleKey)}
                            width={800}
                            height={500}
                            className="project-image w-full h-full object-cover"
                          />
                          {/* Overlay */}
                          <div className="project-overlay absolute inset-0 flex items-center justify-center"
                            style={{ background: 'rgba(10, 14, 39, 0.6)', backdropFilter: 'blur(2px)' }}>
                            <div
                              className="flex items-center gap-3 px-6 py-3 rounded-full text-sm font-semibold"
                              style={{
                                background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
                                color: 'white',
                                boxShadow: '0 4px 20px rgba(70, 102, 255, 0.4)',
                              }}
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                              </svg>
                              {t('modal.viewDetails')}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="w-full lg:w-2/5 space-y-4">
                      <div
                        className="text-7xl font-bold opacity-10 leading-none"
                        style={{ fontFamily: 'var(--font-header)' }}
                      >
                        {String(index + 1).padStart(2, '0')}
                      </div>

                      <h3 className="heading-sm" style={{ color: 'var(--text-primary)' }}>
                        {t(work.titleKey)}
                      </h3>

                      <p className="body-md leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        {t(work.descriptionKey)}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 pt-1">
                        {work.technologies.slice(0, 5).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1.5 rounded-lg text-xs font-medium"
                            style={{
                              backgroundColor: 'rgba(70, 102, 255, 0.08)',
                              color: 'var(--color-primary-light)',
                              border: '1px solid rgba(70, 102, 255, 0.15)'
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                        {work.technologies.length > 5 && (
                          <span
                            className="px-3 py-1.5 rounded-lg text-xs font-medium"
                            style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', color: 'var(--text-muted)' }}
                          >
                            +{work.technologies.length - 5}
                          </span>
                        )}
                      </div>

                      {/* Links */}
                      <div className="flex items-center gap-4 pt-2">
                        {work.github && (
                          <a
                            href={work.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm font-medium transition-colors duration-300 hover:text-white"
                            style={{ color: 'var(--text-muted)' }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            GitHub
                          </a>
                        )}
                        {work.link && (
                          <a
                            href={work.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm font-medium transition-colors duration-300 hover:text-white"
                            style={{ color: 'var(--text-muted)' }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            Live
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll hint at bottom */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-1">
            <span className="text-xs font-medium tracking-widest uppercase" style={{ color: 'var(--text-muted)' }}>
              {t('scrollHint')}
            </span>
            <svg className="w-4 h-4 animate-bounce" style={{ color: 'var(--text-muted)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>

      </section>

      {/* ===== PROJECT MODAL ===== */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-6"
          style={{ backgroundColor: 'rgba(10, 14, 39, 0.95)', backdropFilter: 'blur(12px)' }}
          onClick={closeProjectModal}
        >
          <div
            className="relative rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto"
            style={{
              background: 'var(--bg-secondary)',
              border: '1px solid rgba(70, 102, 255, 0.15)',
              boxShadow: '0 25px 80px rgba(0, 0, 0, 0.5), 0 0 60px rgba(70, 102, 255, 0.08)',
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
                  background: 'rgba(10, 14, 39, 0.7)',
                  backdropFilter: 'blur(8px)',
                  color: 'var(--text-secondary)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
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
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.technologies.map((tech, index) => (
                  <span key={index} className="px-3 py-1 rounded-lg text-xs font-medium"
                    style={{ backgroundColor: 'rgba(70, 102, 255, 0.08)', color: 'var(--color-primary-light)', border: '1px solid rgba(70, 102, 255, 0.15)' }}>
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
                  <h3 className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--color-accent-light)' }}>{t('modal.benefits')}</h3>
                  <ul className="space-y-2">
                    {t.raw(selectedProject.benefitsKey).map((benefit: string, index: number) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: 'var(--color-accent)' }} />
                        <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="md:col-span-2">
                  <h3 className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--color-secondary-light)' }}>{t('modal.results')}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {t.raw(selectedProject.resultsKey).map((result: string, index: number) => (
                      <div key={index} className="flex items-start gap-2 p-3 rounded-lg" style={{ background: 'rgba(70, 102, 255, 0.04)' }}>
                        <svg className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: 'var(--color-accent)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{result}</span>
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

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3">
                {selectedProject.github && (
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center justify-center gap-2 !py-3">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    <span>{t('modal.github')}</span>
                  </a>
                )}
                {selectedProject.link && (
                  <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="btn-secondary flex items-center justify-center gap-2 !py-3">
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
      )}
    </>
  );
}
