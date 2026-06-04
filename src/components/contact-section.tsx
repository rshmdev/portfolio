"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { sendEmail, initEmailJS } from "@/lib/emailjs";

const ease = [0.16, 1, 0.3, 1] as const;

const socials = [
  { key: "linkedin", href: "https://linkedin.com/in/rian-moraes/" },
  { key: "github", href: "https://github.com/rshmdev" },
  { key: "email", href: "mailto:rianherminio2002@gmail.com" },
];

export default function ContactSection() {
  const t = useTranslations("contact");
  const email = t("email");

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    msg: string;
  }>({
    type: null,
    msg: "",
  });

  useEffect(() => {
    initEmailJS();
  }, []);

  const change = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({ type: "error", msg: t("form.required") });
      return;
    }
    setSubmitting(true);
    setStatus({ type: null, msg: "" });
    try {
      const res = await sendEmail(form);
      if (res.success) {
        setStatus({ type: "success", msg: t("form.success") });
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus({ type: "error", msg: res.message || t("form.error") });
      }
    } catch {
      setStatus({ type: "error", msg: t("form.error") });
    } finally {
      setSubmitting(false);
    }
  };

  const field =
    "w-full bg-transparent border-0 border-b py-3 font-sans text-base focus:outline-none transition-colors";

  return (
    <div
      className="pt-24 md:pt-36 pb-12"
      style={{ background: "var(--paper-2)" }}
    >
      <div className="shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease }}
        >
          <span className="label">{t("label")}</span>
          <h2 className="display display-xl mt-4 max-w-[14ch] text-balance">
            {t("big")}
          </h2>
          <a
            href={`mailto:${email}`}
            className="link display display-md inline-block mt-6"
            style={{ fontSize: "clamp(1.5rem,4vw,2.5rem)" }}
          >
            {email}
          </a>
          <p className="lede max-w-[42ch] mt-8 text-pretty">{t("lede")}</p>
        </motion.div>

        {/* form + socials */}
        <div className="grid md:grid-cols-[1.3fr_1fr] gap-12 md:gap-20 mt-16 md:mt-24">
          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease }}
            className="space-y-7"
          >
            <div className="grid sm:grid-cols-2 gap-7">
              <div>
                <label htmlFor="name" className="label block mb-1">
                  {t("form.name.label")}
                </label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={change}
                  placeholder={t("form.name.placeholder")}
                  className={field}
                  style={{
                    borderColor: "var(--line-strong)",
                    color: "var(--ink)",
                  }}
                />
              </div>
              <div>
                <label htmlFor="email" className="label block mb-1">
                  {t("form.email.label")}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={change}
                  placeholder={t("form.email.placeholder")}
                  className={field}
                  style={{
                    borderColor: "var(--line-strong)",
                    color: "var(--ink)",
                  }}
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="label block mb-1">
                {t("form.message.label")}
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={form.message}
                onChange={change}
                placeholder={t("form.message.placeholder")}
                className={`${field} resize-none`}
                style={{
                  borderColor: "var(--line-strong)",
                  color: "var(--ink)",
                }}
              />
            </div>
            <div className="flex flex-wrap items-center gap-5">
              <button
                type="submit"
                disabled={submitting}
                className="btn disabled:opacity-50"
              >
                {submitting ? t("form.sending") : t("form.send")}
                {!submitting && <span aria-hidden>→</span>}
              </button>
              {status.type && (
                <span
                  className="font-mono text-sm"
                  style={{
                    color:
                      status.type === "success"
                        ? "var(--ink)"
                        : "var(--accent)",
                  }}
                >
                  {status.msg}
                </span>
              )}
            </div>
          </motion.form>

          {/* socials */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease, delay: 0.1 }}
          >
            <span className="label">{t("label")}</span>
            <ul className="mt-5 space-y-1">
              {socials.map((s) => (
                <li key={s.key}>
                  <a
                    href={s.href}
                    target={s.key === "email" ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between py-3 border-b transition-colors"
                    style={{ borderColor: "var(--line)" }}
                  >
                    <span className="display" style={{ fontSize: "1.4rem" }}>
                      {t(`social.${s.key}`)}
                    </span>
                    <span
                      className="text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[var(--accent)]"
                      aria-hidden
                    >
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* footer */}
        <footer
          className="mt-24 md:mt-32 pt-6 flex flex-col sm:flex-row justify-between gap-3"
          style={{ borderTop: "1px solid var(--line)" }}
        >
          <span className="label normal-case tracking-normal">
            © {new Date().getFullYear()} {t("footer.rights")}
          </span>{" "}
        </footer>
      </div>
    </div>
  );
}
