import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Counter from '../components/Counter';

// ── Home page metadata ────────────────────────────────────────────────────────
// Root layout provides the base fallback; we re-declare here for full control.
export const metadata: Metadata = {
  title: 'Nachiket Shinde | AI Systems & Automation Builder',
  description:
    'Portfolio of Nachiket Shinde — AI/ML engineer with 19+ projects spanning computer vision, GenAI chatbots, RAG pipelines, NLP, face recognition, plant disease detection, and scalable automation.',
  keywords: [
    'Nachiket Shinde',
    'AI ML engineer portfolio',
    'computer vision projects',
    'GenAI chatbot',
    'RAG pipeline',
    'face recognition',
    'plant disease detection',
    'NLP sentiment analysis',
    'Python AI developer',
    'deep learning projects India',
  ],
  alternates: {
    canonical: 'https://nachiket.kodeneurons.in',
  },
  openGraph: {
    title: 'Nachiket Shinde | AI/ML Engineer — 19+ Projects in Computer Vision, GenAI & NLP',
    description:
      '19+ production-grade AI/ML projects by Nachiket Shinde — face recognition, RAG chatbots, plant disease AI, fraud detection, sentiment analysis, and scalable automation.',
    url: 'https://nachiket.kodeneurons.in',
    type: 'website',
  },
};

export default function Home() {
  const experience = [
    {
      period: 'Jan 2026 – Present',
      role: 'Associate Developer Intern',
      company: 'Idyllic Services',
      badge: 'Current',
      points: [
        'Developing an AI-based Recruiter Automation Suite to streamline end-to-end hiring workflows.',
        'Built pipelines to collect, filter, and rank candidate profiles using rule-based and semantic methods.',
        'Designed candidate scoring and shortlisting logic based on skills and role-fit criteria.',
        'Implemented automation workflows to significantly reduce manual intervention in recruitment processes.',
      ],
    },
    {
      period: 'June 2025 – Dec 2025',
      role: 'Software Developer',
      company: 'Mountreach Solutions (Remote)',
      badge: null,
      points: [
        'Mentored students in building AI/ML and full-stack applications.',
        'Guided implementation of machine learning pipelines including preprocessing, training, and evaluation.',
        'Provided support for backend API development and integration of ML systems.',
      ],
    },
    {
      period: '2022 – 2026',
      role: 'B.Tech, Computer Science & Engineering',
      company: 'CSMSS Chh. Shahu College of Engineering (DBATU)',
      badge: null,
      points: [
        'Built foundations in AI/ML, computer vision, NLP, backend systems, and problem-solving.',
        'CGPA: 7.53 / 10.',
      ],
    },
  ];

  return (
    <>
      {/* ── Hero ── */}
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
                  { value: 19, suffix: '+', label: 'Projects Built', icon: 'bi-folder-fill' },
                  { value: 10, suffix: '+', label: 'AI/ML Apps', icon: 'bi-cpu-fill' },
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

      {/* ── Experience & Education ── */}
      <section id="experience" style={{ paddingTop: '100px', paddingBottom: '80px' }}>
        <div className="container">
          <div className="aos-fade-up">
            <p className="sec-eyebrow">Experience</p>
            <h2 className="sec-title">Execution with Real Ownership</h2>
            <p className="sec-subtitle">Building real AI systems — from internships to mentorship.</p>
          </div>

          <div className="timeline">
            {experience.map((item, i) => (
              <div
                key={item.role}
                className="tl-item aos-fade-up"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <span className="tl-period">
                  <i className="bi bi-calendar3" aria-hidden="true" /> {item.period}
                  {item.badge && (
                    <span style={{
                      marginLeft: '10px',
                      background: 'linear-gradient(135deg, #6c63ff, #a78bfa)',
                      color: '#fff',
                      fontSize: '0.65rem',
                      fontWeight: 700,
                      padding: '2px 8px',
                      borderRadius: '20px',
                      letterSpacing: '0.05em',
                      verticalAlign: 'middle',
                    }}>
                      {item.badge}
                    </span>
                  )}
                </span>
                <h3 className="tl-role">{item.role}</h3>
                <p className="tl-company">
                  <i className="bi bi-building" aria-hidden="true" /> {item.company}
                </p>
                <ul className="tl-points">
                  {item.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

