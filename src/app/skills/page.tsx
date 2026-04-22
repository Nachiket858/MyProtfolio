import type { Metadata } from 'next';

const BASE_URL = 'https://nachiket.kodeneurons.in';
const OG_IMAGE = `${BASE_URL}/og-image.png`;

export const metadata: Metadata = {
  title: 'Skills & Services | AI/ML, Automation & Backend',
  description:
    'Technical proficiencies of Nachiket Shinde: machine learning, LangGraph, RAG pipelines, n8n workflow automation, Python, FastAPI, Flask, and scalable API backend systems.',
  alternates: {
    canonical: `${BASE_URL}/skills`,
  },
  openGraph: {
    title: 'Skills & Services | Nachiket Shinde',
    description:
      'Technical proficiencies: ML, LangGraph, RAG, n8n automation, Python, FastAPI, Flask, and API backend systems.',
    url: `${BASE_URL}/skills`,
    siteName: 'Nachiket Shinde Portfolio',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Nachiket Shinde — Skills' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Skills & Services | Nachiket Shinde',
    description:
      'Technical proficiencies: ML, LangGraph, RAG, n8n automation, Python, FastAPI, Flask, and API backend systems.',
    images: [OG_IMAGE],
  },
};

const SKILLS = [
  {
    icon: 'bi-diagram-3-fill',
    title: 'Automation',
    pills: ['n8n', 'Webhook Orchestration', 'CI/CD', 'Process Mapping', 'Task Elimination'],
  },
  {
    icon: 'bi-hdd-network-fill',
    title: 'Backend & APIs',
    pills: ['Python', 'Flask', 'FastAPI', 'REST APIs', 'Business Logic'],
  },
  {
    icon: 'bi-robot',
    title: 'AI & ML',
    pills: [
      'Machine Learning',
      'Scikit-learn',
      'TensorFlow',
      'NLP',
      'Computer Vision',
      'RAG',
      'LangChain',
      'LangGraph',
    ],
  },
  {
    icon: 'bi-tools',
    title: 'Tools',
    pills: ['Git & GitHub', 'Postman', 'OpenAI APIs', 'Gemini APIs', 'SQL', 'MongoDB', 'Qdrant'],
  },
];

const SERVICES = [
  {
    icon: 'bi-lightning-charge-fill',
    title: 'Process Automation Design',
    desc: 'Map manual workflows and implement automation that removes repetitive execution bottlenecks.',
  },
  {
    icon: 'bi-braces-asterisk',
    title: 'Backend & API Integration',
    desc: 'Develop robust backend logic and reliable API workflows for production-oriented systems.',
  },
  {
    icon: 'bi-cpu-fill',
    title: 'LLM / AI Systems',
    desc: 'RAG pipelines, prompt engineering, and context-aware LLM application architectures.',
  },
];

// JSON-LD: BreadcrumbList — always shows as rich result in SERP
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://nachiket.kodeneurons.in' },
    { '@type': 'ListItem', position: 2, name: 'Skills', item: 'https://nachiket.kodeneurons.in/skills' },
  ],
};

export default function SkillsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <section id="skills" style={{ paddingTop: '150px' }}>
        <div className="container">
          <div className="aos-fade-up">
            <p className="sec-eyebrow">Skills</p>
            <h1 className="sec-title">
              Focused Stack for
              <br />
              Automation &amp; Backend Delivery
            </h1>
          </div>
          <div className="skills-grid">
            {SKILLS.map((cat, i) => (
              <article
                key={cat.title}
                className="glass-card aos-fade-up"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="skill-cat-title">
                  <i className={`bi ${cat.icon} skill-cat-icon`} aria-hidden="true" />
                  {cat.title}
                </div>
                <div className="skill-pills">
                  {cat.pills.map((p) => (
                    <span key={p} className="skill-pill">
                      {p}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="services">
        <div className="container">
          <div className="aos-fade-up">
            <p className="sec-eyebrow">Services</p>
            <h2 className="sec-title">What I Can Deliver</h2>
          </div>
          <div className="services-grid">
            {SERVICES.map((s, i) => (
              <article
                key={s.title}
                className="glass-card service-card aos-fade-up"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="svc-icon-wrap">
                  <i className={`bi ${s.icon}`} aria-hidden="true" />
                </div>
                <h3 className="svc-title">{s.title}</h3>
                <p className="svc-desc">{s.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
