'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslations } from 'next-intl';
import { sendEmail, initEmailJS } from '@/lib/emailjs';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ContactSection() {
  const t = useTranslations('contact');
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    initEmailJS();

    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        '.contact-header',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );

      // Divider
      gsap.fromTo(
        '.contact-divider',
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      );

      // Big CTA text
      gsap.fromTo(
        '.contact-big-text',
        { y: 80, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.contact-big-text',
            start: 'top 85%',
          },
        }
      );

      // Social links
      gsap.fromTo(
        '.contact-social',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.contact-socials',
            start: 'top 88%',
          },
        }
      );

      // Form card
      gsap.fromTo(
        '.contact-form-card',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.contact-form-card',
            start: 'top 85%',
          },
        }
      );

      // Footer
      gsap.fromTo(
        '.contact-footer',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.contact-footer',
            start: 'top 95%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus({
        type: 'error',
        message: 'Por favor, preencha todos os campos.'
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const result = await sendEmail(formData);

      if (result.success) {
        setSubmitStatus({
          type: 'success',
          message: t('form.success')
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.message
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: t('form.error')
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={sectionRef} id="contact" className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-1/2 opacity-30"
          style={{ background: 'linear-gradient(0deg, rgba(70, 102, 255, 0.05) 0%, transparent 100%)' }} />
        <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full opacity-8 blur-3xl"
          style={{ background: 'radial-gradient(circle, var(--color-primary) 0%, transparent 70%)' }} />
        <div className="absolute bottom-1/4 left-0 w-72 h-72 rounded-full opacity-5 blur-3xl animate-float"
          style={{ background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 70%)' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Big CTA Area */}
        <div className="contact-big-text text-center my-16">
          <a
            href="mailto:rianherminio2002@gmail.com"
            className="group inline-block"
          >
            <span
              className="block text-4xl md:text-6xl lg:text-7xl font-bold transition-all duration-500 group-hover:tracking-wider"
              style={{
                fontFamily: 'var(--font-header)',
                background: 'linear-gradient(135deg, var(--text-primary) 0%, var(--color-primary) 50%, var(--color-accent) 100%)',
                backgroundSize: '200% 200%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {t('bigCta')}
            </span>
            <div className="flex items-center justify-center gap-3 mt-4">
              <div
                className="h-[2px] w-0 group-hover:w-16 transition-all duration-500"
                style={{ background: 'linear-gradient(90deg, var(--color-primary), var(--color-accent))' }}
              />
              <span className="text-sm font-medium transition-colors duration-300 group-hover:text-white"
                style={{ color: 'var(--text-muted)' }}>
                rianherminio2002@gmail.com
              </span>
              <div
                className="h-[2px] w-0 group-hover:w-16 transition-all duration-500"
                style={{ background: 'linear-gradient(90deg, var(--color-accent), var(--color-primary))' }}
              />
            </div>
          </a>
        </div>

        {/* Social Links - horizontal */}
        <div className="contact-socials flex flex-wrap justify-center gap-4 mb-20">
          {[
            {
              name: 'LinkedIn',
              link: 'https://linkedin.com/in/rian-moraes/',
              icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              ),
            },
            {
              name: 'GitHub',
              link: 'https://github.com/rshmdev',
              icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              ),
            },
            {
              name: 'Email',
              link: 'mailto:rianherminio2002@gmail.com',
              icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              ),
            },
            {
              name: 'WhatsApp',
              link: 'https://wa.me/5561999999999',
              icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              ),
            },
          ].map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social group flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-500 hover:scale-105"
              style={{
                background: 'rgba(70, 102, 255, 0.04)',
                border: '1px solid rgba(70, 102, 255, 0.1)',
              }}
            >
              <span className="transition-colors duration-300" style={{ color: 'var(--color-primary)' }}>
                {social.icon}
              </span>
              <span className="text-sm font-medium transition-colors duration-300 group-hover:text-white"
                style={{ color: 'var(--text-secondary)' }}>
                {social.name}
              </span>
              <svg
                className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                style={{ color: 'var(--text-muted)' }}
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          ))}
        </div>

        {/* Form Card */}
        <div className="contact-form-card max-w-3xl mx-auto">
          <div
            className="rounded-3xl p-8 md:p-12 relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(70, 102, 255, 0.03) 0%, rgba(0, 139, 139, 0.03) 100%)',
              border: '1px solid rgba(70, 102, 255, 0.1)',
            }}
          >
            {/* Accent corner */}
            <div className="absolute top-0 right-0 w-40 h-40 opacity-30 pointer-events-none"
              style={{ background: 'radial-gradient(circle at top right, rgba(70, 102, 255, 0.15) 0%, transparent 70%)' }} />

            {/* Form Header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#4ade80' }} />
                <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#4ade80' }}>
                  {t('availability.title')}
                </span>
              </div>
              <h3 className="heading-sm mb-2" style={{ fontFamily: 'var(--font-header)' }}>
                {t('methods.title')}
              </h3>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                {t('methods.description')}
              </p>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              {/* Name + Email row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-xs font-semibold uppercase tracking-wider transition-colors duration-300"
                    style={{
                      color: focusedField === 'name' ? 'var(--color-primary)' : 'var(--text-muted)',
                    }}
                  >
                    {t('form.name.label')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full px-4 py-4 rounded-xl transition-all duration-300 focus:outline-none text-sm"
                    style={{
                      backgroundColor: 'transparent',
                      border: `1px solid ${focusedField === 'name' ? 'var(--color-primary)' : 'var(--border-color)'}`,
                      color: 'var(--text-primary)',
                      boxShadow: focusedField === 'name' ? '0 0 20px rgba(70, 102, 255, 0.1)' : 'none',
                    }}
                    placeholder={t('form.name.placeholder')}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-xs font-semibold uppercase tracking-wider transition-colors duration-300"
                    style={{
                      color: focusedField === 'email' ? 'var(--color-primary)' : 'var(--text-muted)',
                    }}
                  >
                    {t('form.email.label')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full px-4 py-4 rounded-xl transition-all duration-300 focus:outline-none text-sm"
                    style={{
                      backgroundColor: 'transparent',
                      border: `1px solid ${focusedField === 'email' ? 'var(--color-primary)' : 'var(--border-color)'}`,
                      color: 'var(--text-primary)',
                      boxShadow: focusedField === 'email' ? '0 0 20px rgba(70, 102, 255, 0.1)' : 'none',
                    }}
                    placeholder={t('form.email.placeholder')}
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-xs font-semibold uppercase tracking-wider transition-colors duration-300"
                  style={{
                    color: focusedField === 'message' ? 'var(--color-primary)' : 'var(--text-muted)',
                  }}
                >
                  {t('form.message.label')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  required
                  rows={5}
                  className="w-full px-4 py-4 rounded-xl transition-all duration-300 focus:outline-none resize-none text-sm"
                  style={{
                    backgroundColor: 'transparent',
                    border: `1px solid ${focusedField === 'message' ? 'var(--color-primary)' : 'var(--border-color)'}`,
                    color: 'var(--text-primary)',
                    boxShadow: focusedField === 'message' ? '0 0 20px rgba(70, 102, 255, 0.1)' : 'none',
                  }}
                  placeholder={t('form.message.placeholder')}
                />
              </div>

              {/* Submit + Status */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  <span className="flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        {t('form.sending')}
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                        {t('form.send')}
                      </>
                    )}
                  </span>
                </button>

                {submitStatus.type && (
                  <div className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium ${submitStatus.type === 'success'
                    ? 'text-green-400'
                    : 'text-red-400'
                    }`}
                    style={{
                      background: submitStatus.type === 'success'
                        ? 'rgba(74, 222, 128, 0.08)'
                        : 'rgba(239, 68, 68, 0.08)',
                      border: `1px solid ${submitStatus.type === 'success'
                        ? 'rgba(74, 222, 128, 0.2)'
                        : 'rgba(239, 68, 68, 0.2)'}`,
                    }}>
                    {submitStatus.type === 'success' ? (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                    {submitStatus.message}
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="contact-footer mt-24 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[1px] w-12" style={{ background: 'linear-gradient(90deg, transparent, var(--border-color))' }} />
            <span className="text-sm font-medium" style={{ color: 'var(--text-muted)' }}>
              {t('footer.madeWith')}
            </span>
            <div className="h-[1px] w-12" style={{ background: 'linear-gradient(90deg, var(--border-color), transparent)' }} />
          </div>
          <p className="text-xs" style={{ color: 'var(--text-muted)', opacity: 0.5 }}>
            © {new Date().getFullYear()} {t('footer.rights')}
          </p>
        </div>
      </div>
    </section>
  );
}
