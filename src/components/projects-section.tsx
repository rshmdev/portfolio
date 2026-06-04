"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import Image from "next/image";
import works from "@/mocks/works";

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

const ease = [0.16, 1, 0.3, 1] as const;
const isRemote = (src: string) => src.startsWith("http");

export default function ProjectsSection() {
  const t = useTranslations("projects");
  const [selected, setSelected] = useState<Work | null>(null);
  const [activeImg, setActiveImg] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const open = (w: Work) => {
    setSelected(w);
    setActiveImg(0);
    document.body.style.overflow = "hidden";
  };
  const close = () => {
    setSelected(null);
    document.body.style.overflow = "";
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const base = (w: Work) => w.titleKey.replace(".title", "");

  return (
    <div className="py-24 md:py-36">
      <div className="shell">
        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16"
        >
          <div>
            <span className="label">{t("label")}</span>
            <h2 className="display display-lg mt-3">{t("title")}</h2>
          </div>
          <p className="body-text max-w-[34ch] md:text-right md:self-end">{t("intro")}</p>
        </motion.div>

        <hr className="rule-ink" />

        {/* index list */}
        <ul>
          {works.map((work, i) => (
            <motion.li
              key={work.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease, delay: (i % 4) * 0.05 }}
            >
              <button
                onClick={() => open(work as Work)}
                className="project-row group w-full text-left grid grid-cols-[auto_1fr_auto] md:grid-cols-[auto_1fr_auto_auto] items-center gap-x-5 md:gap-x-10 py-7 md:py-9"
              >
                <span className="index-num text-sm self-start pt-1.5">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <span className="min-w-0">
                  <span className="block display display-md transition-colors duration-300 group-hover:text-[var(--accent)]">
                    {t(`${base(work as Work)}.title`)}
                  </span>
                  <span className="block label mt-2 normal-case tracking-normal" style={{ fontSize: "0.85rem" }}>
                    {t(`${base(work as Work)}.tagline`)}
                  </span>
                  <span className="flex flex-wrap gap-1.5 mt-4">
                    {work.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="token">{tech}</span>
                    ))}
                  </span>
                </span>

                {/* thumbnail */}
                <span className="hidden md:block relative w-44 h-28 overflow-hidden border" style={{ borderColor: "var(--line)" }}>
                  <Image
                    src={work.images[0]}
                    alt={t(`${base(work as Work)}.title`)}
                    width={352}
                    height={224}
                    unoptimized={isRemote(work.images[0])}
                    className="w-full h-full object-cover grayscale opacity-80 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
                  />
                </span>

                <span
                  className="self-start pt-2 text-xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[var(--accent)]"
                  aria-hidden
                >
                  ↗
                </span>
              </button>
              <hr className="rule" />
            </motion.li>
          ))}
        </ul>
      </div>

      {/* modal */}
      {mounted && selected && createPortal(
        <ProjectModal
          work={selected}
          base={base(selected)}
          t={t}
          activeImg={activeImg}
          setActiveImg={setActiveImg}
          onClose={close}
        />,
        document.body
      )}
    </div>
  );
}

function ProjectModal({
  work,
  base,
  t,
  activeImg,
  setActiveImg,
  onClose,
}: {
  work: Work;
  base: string;
  t: ReturnType<typeof useTranslations>;
  activeImg: number;
  setActiveImg: (n: number) => void;
  onClose: () => void;
}) {
  const lists: { key: string; label: string }[] = [
    { key: work.methodsKey, label: t("modal.methods") },
    { key: work.benefitsKey, label: t("modal.benefits") },
  ];

  return (
    <div
      className="fixed inset-0 z-[9999] overflow-y-auto"
      style={{ background: "rgba(24,21,15,0.45)", backdropFilter: "blur(6px)" }}
      onClick={onClose}
    >
      <div className="min-h-full flex items-start md:items-center justify-center p-4 md:p-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-4xl"
          style={{ background: "var(--paper)", border: "1px solid var(--ink)" }}
        >
          {/* image */}
          <div className="relative aspect-[16/9] overflow-hidden border-b" style={{ borderColor: "var(--ink)" }}>
            <Image
              src={work.images[activeImg] || work.images[0]}
              alt={t(`${base}.title`)}
              width={1280}
              height={720}
              unoptimized={isRemote(work.images[activeImg] || work.images[0])}
              className="w-full h-full object-cover"
            />
            <button
              onClick={onClose}
              aria-label={t("modal.close")}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-lg transition-colors"
              style={{ background: "var(--paper)", border: "1px solid var(--ink)" }}
            >
              ✕
            </button>
          </div>

          {/* gallery thumbs */}
          {work.images.length > 1 && (
            <div className="flex gap-2 p-4 overflow-x-auto hide-scrollbar border-b" style={{ borderColor: "var(--line)" }}>
              {work.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImg(idx)}
                  className="flex-shrink-0 w-24 h-16 overflow-hidden transition-all"
                  style={{ border: activeImg === idx ? "1px solid var(--accent)" : "1px solid var(--line)", opacity: activeImg === idx ? 1 : 0.55 }}
                >
                  <Image src={img} alt="" width={96} height={64} unoptimized={isRemote(img)} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}

          <div className="p-6 md:p-10">
            <span className="label">{t(`${base}.tagline`)}</span>
            <h3 className="display display-md mt-2 mb-5">{t(`${base}.title`)}</h3>

            <p className="body-text max-w-[60ch]">{t(`${base}.description`)}</p>

            {/* stack */}
            <div className="mt-8">
              <span className="label">{t("modal.stack")}</span>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {work.technologies.map((tech) => (
                  <span key={tech} className="token">{tech}</span>
                ))}
              </div>
            </div>

            {/* method / benefits */}
            <div className="grid md:grid-cols-2 gap-8 mt-10">
              {lists.map(({ key, label }) => (
                <div key={key}>
                  <span className="label">{label}</span>
                  <ul className="mt-3 space-y-2.5">
                    {(t.raw(key) as string[]).map((line, idx) => (
                      <li key={idx} className="flex gap-3 body-text" style={{ fontSize: "0.98rem" }}>
                        <span className="accent select-none">—</span>
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* results */}
            <div className="mt-10">
              <span className="label">{t("modal.results")}</span>
              <div className="grid sm:grid-cols-2 gap-px mt-3" style={{ background: "var(--line)" }}>
                {(t.raw(work.resultsKey) as string[]).map((r, idx) => (
                  <div key={idx} className="p-4 body-text" style={{ background: "var(--paper)", fontSize: "0.98rem" }}>
                    {r}
                  </div>
                ))}
              </div>
            </div>

            {/* links */}
            {(work.github || work.link) && (
              <div className="flex flex-wrap gap-3 mt-10">
                {work.link && (
                  <a href={work.link} target="_blank" rel="noopener noreferrer" className="btn">
                    {t("modal.viewSite")} <span aria-hidden>↗</span>
                  </a>
                )}
                {work.github && (
                  <a href={work.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                    {t("modal.github")} <span aria-hidden>↗</span>
                  </a>
                )}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
