'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import works from '@/mocks/works';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const section = sectionRef.current;
    const items = section.querySelectorAll('.depth-item');
    
    // Set initial state for all items
    gsap.set(items, {
      opacity: 0.3,
      y: 50,
      scale: 0.9,
      rotationY: 8
    });
    
    // Create timeline for depth effect
    const tl = gsap.timeline();
    
    // Animate each item from the depth
    gsap.utils.toArray(items).forEach((elem: any, index) => {
      tl.to(elem, {
        duration: 1.5,
        opacity: 1,
        y: 0,
        scale: 1,
        rotationY: 0,
        ease: "power2.out"
      }, index * 0.3);
    });

    // Create ScrollTrigger for the depth effect
    ScrollTrigger.create({
      animation: tl,
      trigger: section,
      start: 'top 70%',
      end: 'bottom 30%',
      scrub: 0.5,
      toggleActions: "play none none reverse"
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative min-h-screen py-20 overflow-hidden"
      style={{ perspective: '1000px' }}
    >
      <div className="container mx-auto px-6">
        {/* Title */}
        <div className="depth-item text-center mb-16">
          <h2 className="text-6xl font-bold text-white mb-6" style={{ fontSize: 'clamp(3rem, 6vw, 4rem)' }}>
            Meus <span className="text-purple-400">Projetos</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore alguns dos projetos que desenvolvi
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {works.map((work, index) => (
            <div key={work.id} className="depth-item">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-500 hover:bg-white/15 h-full">
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-72 object-cover transition-all duration-500 hover:scale-110 hover:grayscale"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 hover:text-purple-400 transition-colors duration-300">
                  {work.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {work.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {work.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
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
            <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105">
              Vamos Conversar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}