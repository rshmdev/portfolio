"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

export default function HeroSection() {
  const t = useTranslations("hero");

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
  };
  const item = {
    hidden: { y: 24, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.9, ease } },
  };

  return (
    <div className="relative min-h-[100svh] flex flex-col pt-28 pb-8">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="shell w-full flex-1 flex flex-col justify-center"
      >
        {/* eyebrow */}
        <motion.div variants={item} className="flex items-center gap-3 mb-8">
          <span className="h-1.5 w-1.5 rounded-full accent" style={{ background: "var(--accent)" }} />
          <span className="label">{t("role")}</span>
        </motion.div>

        {/* statement */}
        <h1 className="display display-xl max-w-[16ch] text-balance">
          <motion.span variants={item} className="block">
            {t("statementA")}
          </motion.span>
          <motion.span variants={item} className="block serif-italic accent">
            {t("statementB")}
          </motion.span>
        </h1>

        {/* lede */}
        <motion.p variants={item} className="lede max-w-[46ch] mt-8 text-pretty">
          {t("lede")}
        </motion.p>

        {/* actions */}
        <motion.div variants={item} className="flex flex-wrap items-center gap-4 mt-10">
          <button onClick={() => scrollTo("projects")} className="btn">
            {t("ctaWork")}
            <span aria-hidden>↓</span>
          </button>
          <button onClick={() => scrollTo("contact")} className="btn btn-ghost">
            {t("ctaContact")}
          </button>
        </motion.div>
      </motion.div>

      {/* bottom meta strip */}
      <motion.div
        variants={item}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.8, duration: 0.9, ease }}
        className="shell w-full mt-10"
      >
        <hr className="rule mb-4" />
        <div className="flex flex-col md:flex-row md:flex-wrap md:items-center md:justify-between gap-y-1.5 gap-x-8">
          <span className="label">{t("metaLocation")}</span>
          <span className="label">{t("metaRole")}</span>
          <span className="label">{t("metaSince")}</span>
          <span className="label flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--accent)" }} />
            {t("available")}
          </span>
        </div>
      </motion.div>
    </div>
  );
}
