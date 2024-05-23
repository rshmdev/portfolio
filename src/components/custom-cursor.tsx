'use client'

import React, { useEffect, useRef, useState } from 'react';

const CURSOR_COLORS: { [key: string]: string } = {
  "h1": "green-400",
  "button": "orange-500",
  "default": "sky-500"
};

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const outerCursorRef = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState<{ x: number, y: number }>({ x: 0, y: 0 });
  const [cursorColor, setCursorColor] = useState<string>("sky-500");
  const [clicked, setClicked] = useState<boolean>(false);
  const requestRef = useRef<number>();

  const updatePosition = (x: number, y: number) => {
    setPosition({ x, y });
    if (cursorRef.current && outerCursorRef.current) {
      cursorRef.current.style.top = `${y}px`;
      cursorRef.current.style.left = `${x}px`;
      outerCursorRef.current.style.top = `${y}px`;
      outerCursorRef.current.style.left = `${x}px`;
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
      setTimeout(() => {
        setClicked(false);
      }, 800);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const tagName = (e.target as HTMLElement).tagName.toLowerCase();
      setCursorColor(CURSOR_COLORS[tagName] || CURSOR_COLORS["default"]);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className={`fixed pointer-events-none transition-transform -translate-x-1/2 -translate-y-1/2 z-50 ease-in duration-300 rounded-full w-3 h-3 bg-${cursorColor}`}
      />
      <div
        ref={outerCursorRef}
        className={`p-0 fixed pointer-events-none transition-transform -translate-x-1/2 -translate-y-1/2 z-50 ease-in duration-500 rounded-full w-8 h-8 border-2 border-${cursorColor}`}
      >
        <div
          className={`w-8 h-8 ${clicked ? "scale-100 opacity-30" : "scale-0 opacity-0"} -translate-x-[1px] -translate-y-[1px] rounded-full bg-${cursorColor} ease-in transition-all duration-500 -z-10`}
        />
      </div>
    </>
  );
};

export default CustomCursor;
