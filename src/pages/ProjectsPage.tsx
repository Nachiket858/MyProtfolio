import { ExternalLink, Github } from 'lucide-react';
import PageMeta from '../components/PageMeta';

const projects = [
  {
    title: 'PyCodeML',
    problem: 'ML project setup and model benchmarking consumed too much repetitive engineering effort.',
    solution: 'Created a reusable Python package that automates model training, tuning, and comparative evaluation.',
    stack: 'Python · Scikit-learn · Pandas · NumPy',
    impact: 'Enabled much faster baseline experimentation and cleaner handoff for ML workflows.',
    github: 'https://github.com/Nachiket858/PyCodeML',
    live: 'https://pypi.org/project/pycodeml/',
  },
  {
    title: 'RAG + LLM Chatbot Suite',
    problem: 'Support and information queries were slow, repetitive, and lacked context retention.',
    solution: 'Engineered chatbot systems with retrieval augmentation and multi-turn conversation handling.',
    stack: 'LangChain · LLM APIs · Flask · Vector Databases',
    impact: 'Delivered contextual responses at scale while reducing manual support dependency.',
    github: 'https://github.com/Nachiket858/LangGraph-Chatbot',
  },
  {
    title: 'AI Automation Workflows',
    problem: 'Business operations relied on manual repetitive task chains across tools.',
    solution: 'Built event-driven automation workflows using n8n + Python API integrations.',
    stack: 'n8n · Python · Webhooks · SQL',
    impact: 'Reduced manual effort by up to 90% in repeatable workflow paths.',
    github: 'https://github.com/Nachiket858',
  },
];

export default function ProjectsPage() {
  return (
    <>
      <PageMeta
        title="Projects | Nachiket Shinde"
        description="Case-study portfolio of AI and automation projects built by Nachiket Shinde with measurable impact."
      />

      <section>
        <p className="section-kicker">What I’ve Built</p>
        <h1 className="section-title-light">AI and automation case studies with impact</h1>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="case-card">
              <h2 className="text-xl font-bold text-slate-900">{project.title}</h2>
              <p className="mt-3 text-sm text-slate-600"><span className="font-semibold text-slate-800">Problem:</span> {project.problem}</p>
              <p className="mt-2 text-sm text-slate-600"><span className="font-semibold text-slate-800">Solution:</span> {project.solution}</p>
              <p className="mt-2 text-sm text-slate-600"><span className="font-semibold text-emerald-700">Impact:</span> {project.impact}</p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-indigo-700">{project.stack}</p>

              <div className="mt-5 flex gap-4 text-sm font-semibold">
                <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-slate-700 hover:text-blue-700">
                  <Github className="h-4 w-4" /> GitHub
                </a>
                {project.live ? (
                  <a href={project.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-slate-700 hover:text-blue-700">
                    <ExternalLink className="h-4 w-4" /> Live
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
