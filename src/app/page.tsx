import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Counter from '../components/Counter';

// ── Home page metadata ────────────────────────────────────────────────────────
// Root layout provides the base fallback; we re-declare here for full control.
export const metadata: Metadata = {
  title: 'Nachiket Shinde | AI Systems & Automation Builder',
  description:
    'I build AI systems that actually work. Portfolio of Nachiket Shinde — AI/ML engineer specialising in Python, LLM apps, RAG pipelines, API integration, and scalable workflow automation.',
  alternates: {
    canonical: 'https://nachiket.kodeneurons.in',
  },
  openGraph: {
    title: 'Nachiket Shinde | AI Systems & Automation Builder',
    description:
      'I build AI systems that actually work. Portfolio of Nachiket Shinde — AI/ML engineer specialising in Python, LLM apps, RAG pipelines, API integration, and scalable workflow automation.',
    url: 'https://nachiket.kodeneurons.in',
    type: 'website',
  },
};

export default function Home() {
  return (
    <section id="hero">
      <div className="container">
        <div className="hero-grid">
          <div>
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              Available for opportunities
            </div>

            <h1 className="hero-title">
              I Build <span className="grad-text">AI Systems</span>
              <br />
              That Actually Work.
            </h1>

            <p className="hero-subtitle">
              AI/ML pipelines, LLM-powered apps, backend APIs, and intelligent automation systems
              — converting complex requirements into reliable, scalable execution.
            </p>

            <div className="hero-tags">
              {['AI/ML Engineer', 'Automation Builder', 'Backend Dev', 'RAG & LLMs'].map((t) => (
                <span key={t} className="hero-tag">
                  {t}
                </span>
              ))}
            </div>

            <div className="hero-actions">
              <Link className="btn-primary" href="/projects">
                <i className="bi bi-grid-3x3-gap-fill" aria-hidden="true" /> View Projects
              </Link>
              <a className="btn-ghost" href="/Nachiket_Shinde_Resume.pdf" download>
                <i className="bi bi-download" aria-hidden="true" /> Download Resume
              </a>
            </div>

            <div className="hero-social">
              {[
                { href: 'https://github.com/Nachiket858', icon: 'bi-github', label: 'GitHub' },
                {
                  href: 'https://www.linkedin.com/in/nachiket-shinde2004',
                  icon: 'bi-linkedin',
                  label: 'LinkedIn',
                },
                {
                  href: 'mailto:nachiketshinde2004@gmail.com',
                  icon: 'bi-envelope-fill',
                  label: 'Email',
                },
              ].map((s) => (
                <a
                  key={s.label}
                  className="social-chip"
                  href={s.href}
                  target={s.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={`Nachiket Shinde on ${s.label}`}
                >
                  <i className={`bi ${s.icon}`} aria-hidden="true" /> {s.label}
                </a>
              ))}
            </div>
          </div>

          <div className="hero-right">
            <div className="profile-ring-wrap float-1">
              {/*
               * next/image — enables:
               *   • Automatic WebP / AVIF conversion
               *   • Responsive srcset
               *   • priority=true → preloaded as LCP resource (no lazy load)
               *   • Eliminates CLS via explicit width/height
               */}
              <Image
                src="/nachiket-shinde-profile.jpg"
                alt="Nachiket Shinde — AI/ML Engineer"
                className="profile-photo"
                width={400}
                height={400}
                priority
                sizes="(max-width: 768px) 90vw, 400px"
              />
            </div>

            <div className="hero-stats-grid">
              {[
                { value: 7, suffix: '+', label: 'Projects Built', icon: 'bi-folder-fill' },
                { value: 3, suffix: '+', label: 'AI/ML Apps', icon: 'bi-cpu-fill' },
                { value: 2, suffix: '', label: 'Certifications', icon: 'bi-patch-check-fill' },
                {
                  value: 1,
                  suffix: '',
                  label: 'Research Paper',
                  icon: 'bi-file-earmark-text-fill',
                },
              ].map((s, i) => (
                <div key={s.label} className={`stat-card float-${(i % 3) + 1}`}>
                  <i className={`bi ${s.icon} stat-icon`} aria-hidden="true" />
                  <span className="stat-value">
                    <Counter to={s.value} suffix={s.suffix} />
                  </span>
                  <span className="stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
