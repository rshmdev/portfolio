"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export default function ExperienceSection() {
  const t = useTranslations("experience");

  const jobs = [
    { id: "smi", current: true, stack: ["React", "Next.js", "Node.js", "TypeScript", "Azure", "IoT"] },
    { id: "faciltel", current: false, stack: ["Next.js 14", "React", "TypeScript", "Tailwind"] },
    { id: "direcao", current: false, stack: ["React", "Next.js", "Node.js", "SEO"] },
  ];

  return (
    <div className="py-24 md:py-36" style={{ background: "var(--paper-2)" }}>
      <div className="shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease }}
          className="mb-12 md:mb-16"
        >
          <span className="label">{t("label")}</span>
          <h2 className="display display-lg mt-3">{t("title")}</h2>
        </motion.div>

        <hr className="rule-ink" />

        {jobs.map((job, i) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease, delay: i * 0.06 }}
          >
            <div className="grid md:grid-cols-[14rem_1fr] gap-x-10 gap-y-4 py-10 md:py-12">
              {/* left rail */}
              <div className="flex flex-wrap md:flex-col items-baseline md:items-start gap-x-3 gap-y-1 md:gap-2">
                <span className="index-num text-sm">{t(`jobs.${job.id}.period`)}</span>
                <span className="display display-md" style={{ fontSize: "1.5rem" }}>
                  {t(`jobs.${job.id}.company`)}
                </span>
                {job.current && (
                  <span className="label flex items-center gap-2 normal-case tracking-normal" style={{ fontSize: "0.8rem" }}>
                    <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--accent)" }} />
                    {t("current")}
                  </span>
                )}
              </div>

              {/* body */}
              <div>
                <h3 className="display" style={{ fontSize: "clamp(1.5rem,3vw,2.1rem)", lineHeight: 1.1 }}>
                  {t(`jobs.${job.id}.position`)}
                </h3>
                <p className="body-text mt-4 max-w-[60ch]">{t(`jobs.${job.id}.description`)}</p>

                <div className="mt-6">
                  <span className="label">{t("achievements")}</span>
                  <ul className="mt-3 grid sm:grid-cols-2 gap-x-8 gap-y-2.5">
                    {(t.raw(`jobs.${job.id}.achievements`) as string[]).map((a, idx) => (
                      <li key={idx} className="flex gap-3 body-text" style={{ fontSize: "0.98rem" }}>
                        <span className="accent select-none">—</span>
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-6">
                  {job.stack.map((s) => (
                    <span key={s} className="token">{s}</span>
                  ))}
                </div>
              </div>
            </div>
            <hr className="rule" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
