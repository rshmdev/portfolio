"use client";

import { useEffect, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";

export default function FloatHeader() {
  const t = useTranslations("navigation");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = ["hero", "projects", "experience", "about", "contact"];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const current = sections.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const r = el.getBoundingClientRect();
        return r.top <= 120 && r.bottom >= 120;
      });
      if (current) setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const setLang = (l: string) => {
    const seg = pathname.split("/");
    seg[1] = l;
    router.push(seg.join("/"));
  };

  const nav = [
    { id: "projects", label: t("projects") },
    { id: "experience", label: t("experience") },
    { id: "about", label: t("about") },
  ];

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 transition-colors duration-500"
      style={{
        background: scrolled ? "rgba(241,237,226,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(10px)" : "none",
        borderBottom: `1px solid ${scrolled ? "var(--line)" : "transparent"}`,
      }}
    >
      <div className="shell flex items-center justify-between py-4">
        {/* wordmark */}
        <button onClick={() => go("hero")} className="display text-lg md:text-xl tracking-tight">
          Rian Moraes<span className="accent">.</span>
        </button>

        {/* desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {nav.map((n) => (
            <button
              key={n.id}
              onClick={() => go(n.id)}
              className="label normal-case tracking-normal transition-colors"
              style={{ color: active === n.id ? "var(--accent)" : "var(--ink-soft)", fontSize: "0.85rem" }}
            >
              {n.label}
            </button>
          ))}

          <span className="font-mono text-xs" style={{ color: "var(--line-strong)" }}>
            <button onClick={() => setLang("pt")} style={{ color: locale === "pt" ? "var(--ink)" : "var(--ink-mute)" }}>PT</button>
            <span className="mx-1.5">/</span>
            <button onClick={() => setLang("en")} style={{ color: locale === "en" ? "var(--ink)" : "var(--ink-mute)" }}>EN</button>
          </span>

          <button onClick={() => go("contact")} className="btn !py-2.5 !px-4">{t("contact")}</button>
        </nav>

        {/* mobile toggle */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          className="md:hidden label normal-case tracking-normal"
          aria-label="Menu"
        >
          {menuOpen ? "Fechar" : "Menu"}
        </button>
      </div>

      {/* mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-400"
        style={{ maxHeight: menuOpen ? "320px" : "0", background: "var(--paper)", borderBottom: menuOpen ? "1px solid var(--line)" : "none" }}
      >
        <div className="shell py-5 flex flex-col gap-1">
          {[...nav, { id: "contact", label: t("contact") }].map((n) => (
            <button
              key={n.id}
              onClick={() => go(n.id)}
              className="display text-2xl py-2 text-left"
              style={{ color: active === n.id ? "var(--accent)" : "var(--ink)" }}
            >
              {n.label}
            </button>
          ))}
          <div className="font-mono text-sm mt-3 pt-3" style={{ borderTop: "1px solid var(--line)" }}>
            <button onClick={() => setLang("pt")} style={{ color: locale === "pt" ? "var(--ink)" : "var(--ink-mute)" }}>PT</button>
            <span className="mx-2" style={{ color: "var(--line-strong)" }}>/</span>
            <button onClick={() => setLang("en")} style={{ color: locale === "en" ? "var(--ink)" : "var(--ink-mute)" }}>EN</button>
          </div>
        </div>
      </div>
    </header>
  );
}
