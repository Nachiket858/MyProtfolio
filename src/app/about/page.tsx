import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Nachiket Shinde | AI/ML & Automation Engineer',
  description: 'Learn about Nachiket Shinde, an AI/ML developer focused on practical backend intelligence and scalable automation executing in Python and n8n.',
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

export default function AboutPage() {
  return (
    <>
      <section id="about" style={{ paddingTop: '150px' }}>
        <div className="container">
          <div className="aos-fade-up">
            <p className="sec-eyebrow">About Me</p>
            <h2 className="sec-title">Automation-First Developer<br />with Real Execution Ownership</h2>
          </div>

          <div className="about-grid">
            <div className="glass-card aos-fade-right" style={{ transitionDelay: '100ms' }}>
              <p className="sec-eyebrow" style={{ marginBottom: '1rem' }}>Who I Am</p>
              <p style={{ color: 'var(--muted)', lineHeight: 1.75, marginBottom: '1rem' }}>
                I&#39;m Nachiket Bhagaji Shinde — an AI/ML-focused developer who builds practical
                systems around automation, retrieval, and backend intelligence. My work blends
                Python engineering, n8n workflow design, API integration, and prompt-controlled
                LLM pipelines.
              </p>
              <p style={{ color: 'var(--muted)', lineHeight: 1.75, marginBottom: 0 }}>
                One goal: convert business requirements into reliable systems that improve speed,
                decision quality, and execution consistency.
              </p>
            </div>

            <div className="glass-card aos-fade-left" style={{ transitionDelay: '200ms' }}>
              <p className="sec-eyebrow" style={{ marginBottom: '1rem' }}>Core Strengths</p>
              {ABOUT_STRENGTHS.map(s => (
                <div key={s.title} className="strength-item">
                  <div className="strength-icon">
                    <i className={`bi ${s.icon}`} />
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
                  <i className={`bi ${a.icon}`} />
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
