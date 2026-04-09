'use client';

import { useState } from 'react';

type Category = 'All' | 'Automation' | 'Backend' | 'AI/ML';

type Project = {
  title: string;
  category: Exclude<Category, 'All'>;
  problem: string;
  solution: string;
  tech: string[];
  impact: string;
  github?: string;
  demo?: string;
};

const FILTERS: Category[] = ['All', 'Automation', 'Backend', 'AI/ML'];

const PROJECTS: Project[] = [
  {
    title: 'AI Recruiter Automation Suite',
    category: 'Automation',
    problem: 'Manual screening delayed hiring decisions.',
    solution: 'Automation pipelines to filter & rank candidates using semantic methods.',
    tech: ['Python', 'n8n', 'REST APIs', 'Semantic Ranking'],
    impact: 'Reduced manual intervention & improved shortlisting speed.',
  },
  {
    title: 'Arjuna — Context-Aware Chat Assistant',
    category: 'AI/ML',
    problem: 'Generic chatbot responses lacked context relevance.',
    solution: 'RAG with Qdrant vector retrieval and prompt-controlled response flows via LangGraph.',
    tech: ['Flask', 'Qdrant', 'LangGraph', 'RAG', 'Prompt Engineering'],
    impact: 'Improved response precision and contextual understanding.',
    github: 'https://github.com/Nachiket858/LangGraph-Chatbot',
  },
  {
    title: 'AI Interview Coach',
    category: 'AI/ML',
    problem: 'Candidates lacked personalized interview practice mapped to their resume.',
    solution: 'Prompt engineering workflows generating role-specific questions and feedback.',
    tech: ['Flask', 'LLMs', 'Prompt Engineering', 'Resume Parsing'],
    impact: 'Enabled personalized preparation with clearer feedback loops.',
    github: 'https://github.com/Nachiket858/AI-Interview-Platform',
  },
  {
    title: 'API-Driven Client Onboarding',
    category: 'Backend',
    problem: 'Onboarding steps were fragmented with repeated manual follow-ups.',
    solution: 'API-first onboarding logic with status tracking and automated notifications.',
    tech: ['Python', 'Flask', 'API Integrations', 'Postman'],
    impact: '45% faster onboarding handoff and clearer execution visibility.',
  },
  {
    title: 'Face Recognition Attendance System',
    category: 'AI/ML',
    problem: 'Manual attendance was slow and error-prone.',
    solution: 'Face-recognition workflow for secure, rapid contactless check-ins.',
    tech: ['Python', 'OpenCV', 'Flask', 'Face Recognition'],
    impact: 'Contactless attendance logging, eliminated manual entry.',
    github: 'https://github.com/Nachiket858/FaceAttend',
    demo: 'https://www.youtube.com/watch?v=estMi2NEydg',
  },
  {
    title: 'PyCodeML — ML Automation Toolkit',
    category: 'AI/ML',
    problem: 'ML experimentation required repeated training/evaluation boilerplate.',
    solution: 'Packaged reusable automation for model training, tuning, and evaluation.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
    impact: 'Accelerated experimentation cycles and improved repeatability.',
    github: 'https://github.com/Nachiket858/PyCodeML',
    demo: 'https://pypi.org/project/pycodeml/',
  },
  {
    title: 'Price Comparison Automation Engine',
    category: 'Automation',
    problem: 'Cross-source price checks were too slow for quick decisions.',
    solution: 'Automated collection and normalization of pricing signals into one workflow.',
    tech: ['Python', 'Flask', 'Data Extraction', 'Automation'],
    impact: 'Improved decision speed and reduced repetitive comparison work.',
    github: 'https://github.com/Nachiket858/PriceCompare',
    demo: 'https://www.youtube.com/watch?v=R6cirNSMMZM',
  },
];

export default function ProjectsClient() {
  const [filter, setFilter] = useState<Category>('All');
  const visible = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === filter);

  return (
    <section id="projects" style={{ paddingTop: '150px' }}>
      <div className="container">
        <div className="aos-fade-up">
          <p className="sec-eyebrow">Projects</p>
          <h2 className="sec-title">Impact-Oriented Builds</h2>
          <p className="sec-subtitle">Real problems. Real solutions. Measurable results.</p>
        </div>

        <div className="filter-bar aos-fade-up" style={{ transitionDelay: '80ms' }}>
          {FILTERS.map(f => (
            <button
              key={f}
              className={`filter-btn${filter === f ? ' active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {visible.map((p, i) => (
            <article
              key={p.title}
              className="project-card aos-fade-up"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="project-card-top">
                <h3 className="project-title">{p.title}</h3>
                <span className="project-cat-badge">{p.category}</span>
              </div>

              <div className="project-rows">
                <div className="project-row">
                  <span className="project-row-label">
                    <i className="bi bi-exclamation-circle-fill" /> Problem
                  </span>
                  <span className="project-row-val">{p.problem}</span>
                </div>
                <div className="project-row">
                  <span className="project-row-label">
                    <i className="bi bi-lightbulb-fill" /> Solution
                  </span>
                  <span className="project-row-val">{p.solution}</span>
                </div>
                <div className="project-row">
                  <span className="project-row-label">
                    <i className="bi bi-graph-up-arrow" /> Impact
                  </span>
                  <span className="project-row-val impact-text">{p.impact}</span>
                </div>
                <div className="project-tech-tags">
                  {p.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
                </div>
              </div>

              {(p.github || p.demo) && (
                <div className="project-links">
                  {p.github && (
                    <a className="project-link" href={p.github} target="_blank" rel="noreferrer">
                      <i className="bi bi-github" /> Source Code
                    </a>
                  )}
                  {p.demo && (
                    <a className="project-link" href={p.demo} target="_blank" rel="noreferrer">
                      <i className="bi bi-box-arrow-up-right" /> Live Demo
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>

        <div className="projects-more aos-fade-up">
          <a className="btn-ghost" href="https://github.com/Nachiket858" target="_blank" rel="noreferrer">
            <i className="bi bi-github" /> All Repositories on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
