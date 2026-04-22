import type { Metadata } from 'next';

const BASE_URL = 'https://nachiket.kodeneurons.in';
const OG_IMAGE = `${BASE_URL}/og-image.png`;

export const metadata: Metadata = {
  title: 'About Nachiket Shinde | AI/ML & Automation Engineer',
  description:
    "Learn about Nachiket Shinde — an AI/ML-focused developer who builds automation-first systems around Python, n8n, RAG pipelines, and LLM-powered backend intelligence. NPTEL Discipline Star & published researcher.",
  alternates: {
    canonical: `${BASE_URL}/about`,
  },
  openGraph: {
    title: 'About Nachiket Shinde | AI/ML & Automation Engineer',
    description:
      "Meet Nachiket Shinde — automation-first developer building practical AI systems. NPTEL Discipline Star & NCISET 2025 published researcher.",
    url: `${BASE_URL}/about`,
    siteName: 'Nachiket Shinde Portfolio',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'About Nachiket Shinde' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Nachiket Shinde | AI/ML & Automation Engineer',
    description:
      "Meet Nachiket Shinde — automation-first developer building practical AI systems. NPTEL Discipline Star & NCISET 2025 published researcher.",
    images: [OG_IMAGE],
  },
};

const ABOUT_STRENGTHS = [
  {
    icon: 'bi-bullseye',
    title: 'Automation-First Mindset',
    desc: 'Every manual process is an automation opportunity.',
  },
  {
    icon: 'bi-wrench-adjustable',
    title: 'Backend & RAG Pipelines',
    desc: 'API workflows and vector retrieval systems.',
  },
  {
    icon: 'bi-bar-chart-fill',
    title: 'Business-Aligned Execution',
    desc: 'Measurable, outcome-driven delivery.',
  },
];

const ACHIEVEMENTS = [
  {
    icon: 'bi-trophy-fill',
    title: 'NPTEL Discipline Star',
    desc: 'IIT-certified academic excellence award for outstanding performance.',
  },
  {
    icon: 'bi-file-earmark-text-fill',
    title: 'NCISET 2025 — Research Paper',
    desc: 'PyCodeML paper accepted at NCISET 2025 international conference.',
  },
];

// JSON-LD: BreadcrumbList — always shows as rich result in SERP
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nachiket.kodeneurons.in' },
    { '@type': 'ListItem', position: 2, name: 'About', item: 'https://nachiket.kodeneurons.in/about' },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <section id="about" style={{ paddingTop: '150px' }}>
        <div className="container">
          <div className="aos-fade-up">
            <p className="sec-eyebrow">About Me</p>
            <h1 className="sec-title">
              Automation-First Developer
              <br />
              with Real Execution Ownership
            </h1>
          </div>

          <div className="about-grid">
            <div className="glass-card aos-fade-right" style={{ transitionDelay: '100ms' }}>
              <p className="sec-eyebrow" style={{ marginBottom: '1rem' }}>
                Who I Am
              </p>
              <p style={{ color: 'var(--muted)', lineHeight: 1.75, marginBottom: '1rem' }}>
                I&#39;m Nachiket Bhagaji Shinde — an AI/ML-focused developer who builds practical
                systems around automation, retrieval, and backend intelligence. My work blends
                Python engineering, n8n workflow design, API integration, and prompt-controlled LLM
                pipelines.
              </p>
              <p style={{ color: 'var(--muted)', lineHeight: 1.75, marginBottom: 0 }}>
                One goal: convert business requirements into reliable systems that improve speed,
                decision quality, and execution consistency.
              </p>
            </div>

            <div className="glass-card aos-fade-left" style={{ transitionDelay: '200ms' }}>
              <p className="sec-eyebrow" style={{ marginBottom: '1rem' }}>
                Core Strengths
              </p>
              {ABOUT_STRENGTHS.map((s) => (
                <div key={s.title} className="strength-item">
                  <div className="strength-icon">
                    <i className={`bi ${s.icon}`} aria-hidden="true" />
                  </div>
                  <div>
                    <div className="strength-title">{s.title}</div>
                    <div className="strength-desc">{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="achievements">
        <div className="container">
          <div className="aos-fade-up">
            <p className="sec-eyebrow">Achievements</p>
            <h2 className="sec-title">Credentials That Matter</h2>
          </div>

          <div className="achievements-grid">
            {ACHIEVEMENTS.map((a, i) => (
              <article
                key={a.title}
                className="glass-card ach-card aos-fade-up"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="ach-icon-wrap">
                  <i className={`bi ${a.icon}`} aria-hidden="true" />
                </div>
                <div>
                  <div className="ach-title">{a.title}</div>
                  <div className="ach-desc">{a.desc}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
