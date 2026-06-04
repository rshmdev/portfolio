"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export default function AboutSection() {
  const t = useTranslations("about");

  const groups = ["frontend", "backend", "data", "infra"];
  const info = ["location", "role", "available"];

  const reveal = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.8, ease },
  };

  return (
    <div className="py-24 md:py-36">
      <div className="shell">
        <motion.div {...reveal} className="mb-12 md:mb-16">
          <span className="label">{t("label")}</span>
          <h2 className="display display-lg mt-3">{t("title")}</h2>
        </motion.div>

        <div className="grid md:grid-cols-[1.4fr_1fr] gap-12 md:gap-20">
          {/* narrative */}
          <motion.div {...reveal}>
            <p className="lede text-pretty">{t("p1")}</p>
            <p className="body-text mt-6 max-w-[56ch]">{t("p2")}</p>

            {/* info table */}
            <dl className="mt-12">
              {info.map((k) => (
                <div key={k} className="flex justify-between items-baseline py-3.5 border-b" style={{ borderColor: "var(--line)" }}>
                  <dt className="label">{t(`info.${k}`)}</dt>
                  <dd className="font-mono text-sm" style={{ color: "var(--ink)" }}>{t(`info.${k}Value`)}</dd>
                </div>
              ))}
            </dl>
          </motion.div>

          {/* capabilities */}
          <motion.div {...reveal} transition={{ ...reveal.transition, delay: 0.1 }}>
            <span className="label">{t("stackTitle")}</span>
            <div className="mt-5 space-y-8">
              {groups.map((g) => (
                <div key={g}>
                  <h3 className="display" style={{ fontSize: "1.35rem" }}>{t(`capabilities.${g}.title`)}</h3>
                  <ul className="mt-2.5 space-y-1">
                    {(t.raw(`capabilities.${g}.items`) as string[]).map((it) => (
                      <li key={it} className="font-mono text-sm" style={{ color: "var(--ink-soft)" }}>{it}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
