"use client";

import { useEffect, useState } from "react";

export default function FloatHeader() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });

    return () => {
      window.removeEventListener("scroll", () => {
        setScroll(window.scrollY);
      });
    };
  }, []);

  return (
    <header
      className={`fixed w-screen top-0 left-0 min-h-14 z-50 ${
        scroll > 340 ? "bg-black/95 shadow-md" : ""
      }`}
    >
      <div className="container h-full mx-auto flex items-center justify-center">
        <nav className="py-4 w-full px-8 mx-auto">
          <ul className="flex flex-wrap items-center gap-10 justify-center">
            <li className="hover:text-lime-50">
              <a
                href="#hero"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("hero")!
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                // inicio
              </a>
            </li>
            <li className="hover:text-lime-50">
              <a
                href="#skills"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("skills")!
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                // habilidades
              </a>
            </li>
            <li className="hover:text-lime-50">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("projects")!
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                // serviços
              </a>
            </li>
            <li className="hover:text-lime-50">
              <a
                href="#work-experience"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("work-experience")!
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                // experiência
              </a>
            </li>
            <li className="hover:text-lime-50">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("contact")!
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                // contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
