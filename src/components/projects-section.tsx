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

// Componente para carousel de imagens do projeto
interface ProjectImageCarouselProps {
  images: string[];
  title: string;
  onImageClick: () => void;
}

const ProjectImageCarousel: React.FC<ProjectImageCarouselProps> = ({ images, title, onImageClick }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageAutoPlaying, setIsImageAutoPlaying] = useState(true);
  const imageIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-play para imagens
  useEffect(() => {
    if (isImageAutoPlaying && images.length > 1) {
      imageIntervalRef.current = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, 3000);
    } else {
      if (imageIntervalRef.current) {
        clearInterval(imageIntervalRef.current);
      }
    }

    return () => {
      if (imageIntervalRef.current) {
        clearInterval(imageIntervalRef.current);
      }
    };
  }, [isImageAutoPlaying, images.length]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <div 
      className="relative overflow-hidden rounded-xl aspect-[16/9] group cursor-pointer"
      onClick={onImageClick}
      onMouseEnter={() => setIsImageAutoPlaying(false)}
      onMouseLeave={() => setIsImageAutoPlaying(true)}
    >
      {/* Imagens */}
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image}
              width={800}
              height={450}
              alt={`${title} - Image ${index + 1}`}
              className="w-full h-full object-cover object-center transition-all duration-500 group-hover:scale-110"
            />
          </div>
        ))}
      </div>

      {/* Overlay de hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Ícone de visualização */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
        </div>
      </div>

      {/* Controles de navegação das imagens (apenas se houver múltiplas imagens) */}
      {images.length > 1 && (
        <>
          {/* Setas de navegação */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full p-2 text-white opacity-0 group-hover:opacity-100 transition-all duration-300"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full p-2 text-white opacity-0 group-hover:opacity-100 transition-all duration-300"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Indicadores de pontos */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  goToImage(index);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentImageIndex
                    ? "bg-white scale-125"
                    : "bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>

          {/* Contador de imagens */}
          <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {currentImageIndex + 1}/{images.length}
          </div>
        </>
      )}
    </div>
  );
};

interface Work {
  id: number;
  titleKey: string;
  descriptionKey: string;
  images: string[];
  github?: string;
  technologies: string[];
  methodsKey: string;
  benefitsKey: string;
  resultsKey: string;
}

export default function ProjectsSection() {
  const t = useTranslations('projects');
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedProject, setSelectedProject] = useState<Work | null>(null);
  const [filteredWorks] = useState<Work[]>(works);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);


  // Open project modal
  const openProjectModal = (project: Work) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  // Close project modal
  const closeProjectModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "unset";
  };

  // Auto-play do carousel
  useEffect(() => {
    if (isAutoPlaying && filteredWorks.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % filteredWorks.length);
      }, 4000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, filteredWorks.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % filteredWorks.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + filteredWorks.length) % filteredWorks.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animacao do titulo
      gsap.fromTo(
        ".projects-title",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".projects-title",
            start: "top 80%",
          },
        }
      );

      // Animacao do filtro
      gsap.fromTo(
        ".filter-container",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".filter-container",
            start: "top 80%",
          },
        }
      );

      // Animacao do carousel
      gsap.fromTo(
        ".carousel-container",
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          delay: 0.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".carousel-container",
            start: "top 80%",
          },
        }
      );

      // Animacao dos controles
      gsap.fromTo(
        ".carousel-controls",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".carousel-controls",
            start: "top 90%",
          },
        }
      );

      // Animacao do CTA
      gsap.fromTo(
        ".projects-cta",
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".projects-cta",
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  const handleNavClick = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section
        ref={sectionRef}
        id="projects"
        className="min-h-screen py-20 relative overflow-hidden"
      >
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]"></div>
          {/* Floating particles */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400/30 rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-cyan-400/40 rounded-full animate-ping"></div>
          <div className="absolute top-1/2 left-3/4 w-3 h-3 bg-pink-400/20 rounded-full animate-bounce"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Title */}
          <div className="projects-title text-center mb-16">
            <h2
              className="text-6xl font-bold text-white mb-6 relative"
              style={{ fontSize: "clamp(3rem, 6vw, 4rem)" }}
            >
              <span className="relative inline-block">
                {t('title')}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 animate-pulse">
                  {t('titleHighlight')}
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 blur-xl -z-10 animate-pulse"></div>
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              {t('description')}
              <br />
              <span className="text-purple-400 text-lg">
                {t('subtitle')}
              </span>
            </p>
          </div>  

          {/* Carousel Container */}
          <div className="carousel-container relative max-w-6xl mx-auto mb-16">
            <div className="relative overflow-hidden rounded-2xl">
              {/* Slides */}
              <div 
                className="flex transition-transform duration-1000 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                {filteredWorks.map((work, index) => (
                  <div key={work.id} className="w-full flex-shrink-0">
                    <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-500 hover:bg-white/15 mx-4">
                      <div className="grid md:grid-cols-2 gap-8 items-center">
                        {/* Project Images Carousel */}
                        <ProjectImageCarousel 
                          images={work.images} 
                          title={work.titleKey}
                          onImageClick={() => openProjectModal(work)}
                        />

                        {/* Project Info */}
                        <div className="space-y-6">
                          <h3 className="text-3xl font-bold text-white hover:text-purple-400 transition-colors duration-300">
                            {t(work.titleKey)}
                          </h3>

                          <p className="text-gray-300 text-lg leading-relaxed">
                            {t(work.descriptionKey)}
                          </p>

                          <div className="flex flex-wrap gap-2">
                            {work.technologies.slice(0, 6).map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium border border-purple-500/30"
                              >
                                {tech}
                              </span>
                            ))}
                            {work.technologies.length > 6 && (
                              <span className="px-3 py-1 bg-gray-500/20 text-gray-400 rounded-full text-sm font-medium">
                                +{work.technologies.length - 6}
                              </span>
                            )}
                          </div>

                          <div className="flex gap-4">
                            <button
                              onClick={() => openProjectModal(work)}
                              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 flex items-center gap-2"
                            >
                              <span>{t('modal.viewDetails')}</span>
                              <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </button>
                            {work.github && (
                            <a
                              href={work.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-6 py-3 bg-transparent border-2 border-purple-500 text-purple-300 hover:bg-purple-500/10 hover:text-white rounded-lg font-semibold transition-all duration-300 flex items-center gap-2"
                            >
                              <svg
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                              </svg>
                              <span>{t('github')}</span>
                            </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            {filteredWorks.length > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:text-purple-400 transition-all duration-300 border border-white/20 hover:border-purple-400/50"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:text-purple-400 transition-all duration-300 border border-white/20 hover:border-purple-400/50"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}
          </div>

          {/* Carousel Controls */}
          {filteredWorks.length > 1 && (
            <div className="carousel-controls flex justify-center items-center gap-6 mb-16">
              {/* Dots Indicator */}
              <div className="flex gap-2">
                {filteredWorks.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? "bg-gradient-to-r from-purple-500 to-cyan-500 scale-125"
                        : "bg-white/30 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>

              {/* Auto-play Toggle */}
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  isAutoPlaying
                    ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white"
                    : "bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20"
                }`}
              >
                {isAutoPlaying ? (
                  <>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                    </svg>
                    <span>{t('pause')}</span>
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    <span>{t('play')}</span>
                  </>
                )}
              </button>
            </div>
          )}

          {/* Call to Action */}
          <div className="projects-cta text-center">
            <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-md rounded-2xl p-8 border border-purple-400/30 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-cyan-600/10 animate-pulse"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-white mb-4">
                  {t('cta.title')}
                </h3>
                <p className="text-gray-300 text-lg mb-8">
                  {t('cta.description')}
                </p>
                <button
                  onClick={() => handleNavClick("contact")}
                  className="px-8 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50"
                >
                  {t('cta.button')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
          onClick={closeProjectModal}
          style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0 }}
        >
          <div
            className="bg-gray-900/95 backdrop-blur-md rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-purple-400/30 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 z-[61] bg-gray-900/95 backdrop-blur-md border-b border-purple-400/20 p-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">
                {t(selectedProject.titleKey)}
              </h2>
              <button
                onClick={closeProjectModal}
                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Project Images Carousel */}
              <div className="mb-6">
                <ProjectImageCarousel 
                  images={selectedProject.images} 
                  title={selectedProject.titleKey}
                  onImageClick={() => {}}
                />
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">
                  {t('modal.technologies')}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">
                  {t('modal.about')}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {t(selectedProject.descriptionKey)}
                </p>
              </div>

              {/* Methods */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">
                  {t('modal.methods')}
                </h3>
                <ul className="space-y-2">
                  {t.raw(selectedProject.methodsKey).map((method: any, index: number) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-gray-300"
                    >
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{method}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">
                  {t('modal.benefits')}
                </h3>
                <ul className="space-y-2">
                  {t.raw(selectedProject.benefitsKey).map((benefit: any, index: number) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-gray-300"
                    >
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Results */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">
                  {t('modal.results')}
                </h3>
                <ul className="space-y-2">
                  {t.raw(selectedProject.resultsKey).map((result: any, index: number) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-gray-300"
                    >
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
