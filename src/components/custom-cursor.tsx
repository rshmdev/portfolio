'use client'

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const CURSOR_COLORS: { [key: string]: string } = {
  "h1": "cyan-400",
  "h2": "purple-400",
  "button": "orange-500",
  "a": "green-400",
  "default": "blue-500"
};

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const outerCursorRef = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState<{ x: number, y: number }>({ x: 0, y: 0 });
  const [cursorColor, setCursorColor] = useState<string>("blue-500");
  const [clicked, setClicked] = useState<boolean>(false);
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const requestRef = useRef<number>();

  const updatePosition = (x: number, y: number) => {
    setPosition({ x, y });
    if (cursorRef.current && outerCursorRef.current) {
      gsap.to(cursorRef.current, {
        x: x - 6,
        y: y - 6,
        duration: 0.1,
        ease: "power2.out"
      });
      gsap.to(outerCursorRef.current, {
        x: x - 16,
        y: y - 16,
        duration: 0.3,
        ease: "power2.out"
      });
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      requestRef.current = requestAnimationFrame(() => {
        updatePosition(e.clientX, e.clientY);
      });
    };

    const handleMouseDown = () => {
      setClicked(true);
      if (cursorRef.current && outerCursorRef.current) {
        gsap.to([cursorRef.current, outerCursorRef.current], {
          scale: 0.8,
          duration: 0.1,
          ease: "power2.out"
        });
      }
      setTimeout(() => {
        setClicked(false);
        if (cursorRef.current && outerCursorRef.current) {
          gsap.to([cursorRef.current, outerCursorRef.current], {
            scale: 1,
            duration: 0.3,
            ease: "elastic.out(1, 0.3)"
          });
        }
      }, 150);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const tagName = target.tagName.toLowerCase();
      const isInteractive = ['button', 'a', 'input', 'textarea'].includes(tagName) || 
                           target.classList.contains('cursor-pointer') ||
                           target.closest('button, a, [role="button"]');
      
      setCursorColor(CURSOR_COLORS[tagName] || CURSOR_COLORS["default"]);
      setIsHovering(Boolean(isInteractive));
      
      if (isInteractive && outerCursorRef.current) {
        gsap.to(outerCursorRef.current, {
          scale: 1.5,
          duration: 0.3,
          ease: "power2.out"
        });
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const tagName = target.tagName.toLowerCase();
      const isInteractive = ['button', 'a', 'input', 'textarea'].includes(tagName) || 
                           target.classList.contains('cursor-pointer') ||
                           target.closest('button, a, [role="button"]');
      
      if (isInteractive && outerCursorRef.current) {
        setIsHovering(false);
        gsap.to(outerCursorRef.current, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className={`fixed pointer-events-none z-50 rounded-full w-3 h-3 bg-${cursorColor} ${isHovering ? 'mix-blend-difference' : ''}`}
        style={{ left: 0, top: 0 }}
      />
      <div
        ref={outerCursorRef}
        className={`fixed pointer-events-none z-50 rounded-full w-8 h-8 border-2 border-${cursorColor} ${isHovering ? 'bg-white/10 backdrop-blur-sm' : ''}`}
        style={{ left: 0, top: 0 }}
      >
        <div
          className={`w-full h-full ${clicked ? "scale-100 opacity-30" : "scale-0 opacity-0"} rounded-full bg-${cursorColor} transition-all duration-300 ease-out`}
        />
      </div>
    </>
  );
};

export default CustomCursor;
