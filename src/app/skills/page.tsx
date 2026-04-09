import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Skills & Services | Nachiket Shinde',
  description: 'Technical proficiencies spanning machine learning, LangGraph, process automation, n8n, Python, and scalable API backend systems.',
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
    pills: ['Machine Learning', 'Scikit-learn', 'TensorFlow', 'NLP', 'Computer Vision', 'RAG', 'LangChain', 'LangGraph'],
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

export default function SkillsPage() {
  return (
    <>
      <section id="skills" style={{ paddingTop: '150px' }}>
        <div className="container">
          <div className="aos-fade-up">
            <p className="sec-eyebrow">Skills</p>
            <h2 className="sec-title">Focused Stack for<br />Automation & Backend Delivery</h2>
          </div>
          <div className="skills-grid">
            {SKILLS.map((cat, i) => (
              <article
                key={cat.title}
                className="glass-card aos-fade-up"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="skill-cat-title">
                  <i className={`bi ${cat.icon} skill-cat-icon`} />
                  {cat.title}
                </div>
                <div className="skill-pills">
                  {cat.pills.map(p => (
                    <span key={p} className="skill-pill">{p}</span>
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
                  <i className={`bi ${s.icon}`} />
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
