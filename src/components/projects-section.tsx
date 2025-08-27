"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import works from "@/mocks/works";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Work {
  id: number;
  title: string;
  description: string;
  image: string;
  github: string;
  technologies: string[];
  methods: string[];
  benefits: string[];
  results: string[];
}

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedProject, setSelectedProject] = useState<Work | null>(null);
  const [filteredWorks, setFilteredWorks] = useState<Work[]>(works);
  const [selectedTech, setSelectedTech] = useState<string>("Todos");

  // Get all unique technologies
  const allTechnologies = [
    "Todos",
    ...Array.from(new Set(works.flatMap((work) => work.technologies))),
  ];

  // Filter projects by technology
  const filterByTechnology = (tech: string) => {
    setSelectedTech(tech);
    if (tech === "Todos") {
      setFilteredWorks(works);
    } else {
      setFilteredWorks(
        works.filter((work) => work.technologies.includes(tech))
      );
    }
  };

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

  useEffect(() => {
    if (!sectionRef.current) return;

    const section = sectionRef.current;
    const items = section.querySelectorAll(".depth-item");

    // Set initial state for all items
    gsap.set(items, {
      opacity: 0,
      y: 30,
      scale: 0.95,
    });

    // Animate each item individually when it enters viewport
    gsap.utils.toArray(items).forEach((elem: any, index) => {
      ScrollTrigger.create({
        trigger: elem,
        start: "top 85%",
        end: "bottom 15%",
        toggleActions: "play none none reverse",
        animation: gsap.to(elem, {
          duration: 0.8,
          opacity: 1,
          y: 0,
          scale: 1,
          ease: "power2.out",
          delay: index * 0.1,
        }),
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
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
        className="min-h-screen py-20 overflow-hidden"
        style={{ perspective: "1000px" }}
      >
        <div className="container mx-auto px-6">
          {/* Title */}
          <div className="depth-item text-center mb-16">
            <h2
              className="text-6xl font-bold text-white mb-6"
              style={{ fontSize: "clamp(3rem, 6vw, 4rem)" }}
            >
              Meus <span className="text-purple-400">Projetos</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Explore alguns dos projetos que desenvolvi com tecnologias
              modernas
            </p>
          </div>

          {/* Technology Filter */}
          <div className="depth-item mb-12">
            <div className="flex flex-wrap justify-center gap-3">
              {allTechnologies.map((tech) => (
                <button
                  key={tech}
                  onClick={() => filterByTechnology(tech)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedTech === tech
                      ? "bg-purple-600 text-white shadow-lg shadow-purple-600/25"
                      : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white"
                  }`}
                >
                  {tech}
                </button>
              ))}
            </div>
          </div>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredWorks.map((work, index) => (
              <div key={work.id} className="depth-item">
                <div
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-500 hover:bg-white/15 h-full flex flex-col group cursor-pointer"
                  onClick={() => openProjectModal(work)}
                >
                  <div className="relative overflow-hidden rounded-xl mb-4 aspect-[4/3]">
                    <Image
                      src={work.image}
                      width={400}
                      height={300}
                      alt={work.title}
                      className="w-full h-full object-cover object-center transition-all duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                        <svg
                          className="w-6 h-6 text-white"
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
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                    {work.title}
                  </h3>

                  <p className="text-gray-300 text-sm mb-4 flex-grow line-clamp-3">
                    {work.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {work.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium border border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                    {work.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-gray-500/20 text-gray-400 rounded-full text-xs font-medium">
                        +{work.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-purple-400 text-sm font-medium group-hover:text-purple-300 transition-colors">
                      Ver detalhes
                    </span>
                    <svg
                      className="w-4 h-4 text-purple-400 group-hover:translate-x-1 transition-transform"
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
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="depth-item text-center">
            <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30">
              <h3 className="text-3xl font-bold text-white mb-4">
                Gostou dos projetos?
              </h3>
              <p className="text-gray-300 mb-6">
                Entre em contato para discutirmos seu próximo projeto
              </p>
              <button
                onClick={() => handleNavClick("contact")}
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Vamos Conversar
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Project Modal - Moved outside section to be relative to viewport */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
          onClick={closeProjectModal}
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
        >
          <div
            className="bg-gray-900/95 backdrop-blur-md rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-purple-400/30 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 z-[61] bg-gray-900/95 backdrop-blur-md border-b border-purple-400/20 p-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-white">
                {selectedProject.title}
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
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-xl mb-6 aspect-[16/9]">
                <Image
                  src={selectedProject.image}
                  width={800}
                  height={450}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Tecnologias Utilizadas
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
                  Sobre o Projeto
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* Methods */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Metodologia e Desenvolvimento
                </h3>
                <ul className="space-y-2">
                  {selectedProject.methods.map((method, index) => (
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
                  Benefícios e Impacto
                </h3>
                <ul className="space-y-2">
                  {selectedProject.benefits.map((benefit, index) => (
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
                  Resultados Alcançados
                </h3>
                <ul className="space-y-2">
                  {selectedProject.results.map((result, index) => (
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

              {/* <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-purple-400/20">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 text-center flex items-center justify-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  Ver Projeto
                </a>
                <button
                  onClick={() => handleNavClick("contact")}
                  className="flex-1 px-6 py-3 bg-transparent border-2 border-purple-500 text-purple-300 hover:bg-purple-500/10 hover:text-white rounded-lg font-semibold transition-all duration-300 text-center"
                >
                  Falar sobre este projeto
                </button>
              </div> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
