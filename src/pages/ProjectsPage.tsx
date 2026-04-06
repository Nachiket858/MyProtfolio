import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import PageMeta from '../components/PageMeta';
import { featuredProjects } from '../data/portfolioData';
import GitHubRepos from '../components/GitHubRepos';

const showcaseProjects = [
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

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function ProjectsPage() {
  return (
    <>
      <PageMeta
        title="Projects | Nachiket Shinde — AI & ML Case Studies"
        description="Case-study portfolio of AI, ML, and automation projects by Nachiket Shinde — including LLM chatbots, computer vision, RAG systems, and 16+ GitHub repositories."
        canonicalPath="/projects"
      />

      {/* Hero section */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="section-kicker">What I've Built</p>
        <h1 className="section-title-light">AI and automation case studies with impact</h1>
        <p className="mt-3 max-w-2xl text-slate-600">
          Real-world systems built from scratch — from ML models and LLM pipelines to computer vision
          apps and automation workflows.
        </p>
      </motion.section>

      {/* Case study cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
      >
        {showcaseProjects.map((project) => (
          <motion.article
            key={project.title}
            variants={fadeUp}
            whileHover={{ y: -5, transition: { duration: 0.18 } }}
            className="case-card"
          >
            <h2 className="text-xl font-bold text-slate-900">{project.title}</h2>
            <p className="mt-3 text-sm text-slate-600">
              <span className="font-semibold text-slate-800">Problem:</span> {project.problem}
            </p>
            <p className="mt-2 text-sm text-slate-600">
              <span className="font-semibold text-slate-800">Solution:</span> {project.solution}
            </p>
            <p className="mt-2 text-sm text-slate-600">
              <span className="font-semibold text-emerald-700">Impact:</span> {project.impact}
            </p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-indigo-700">
              {project.stack}
            </p>
            <div className="mt-5 flex gap-4 text-sm font-semibold">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-slate-700 hover:text-blue-700 transition-colors"
                aria-label={`View ${project.title} on GitHub`}
              >
                <Github className="h-4 w-4" aria-hidden="true" /> GitHub
              </a>
              {project.live ? (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-slate-700 hover:text-blue-700 transition-colors"
                  aria-label={`View ${project.title} live`}
                >
                  <ExternalLink className="h-4 w-4" aria-hidden="true" /> Live
                </a>
              ) : null}
            </div>
          </motion.article>
        ))}
      </motion.div>

      {/* Featured projects from data */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        className="mt-14"
        aria-labelledby="featured-projects-heading"
      >
        <div className="mb-6">
          <p className="section-kicker">AI Product Portfolio</p>
          <h2 id="featured-projects-heading" className="section-title-light">
            All featured projects with YouTube demos
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <motion.article
              key={project.id}
              variants={fadeUp}
              whileHover={{ y: -5, transition: { duration: 0.18 } }}
              className="case-card"
            >
              <h3 className="text-lg font-bold text-slate-900">{project.title}</h3>
              <p className="mt-2 text-sm">{project.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="chip-muted">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex gap-3 text-sm font-semibold">
                {project.youtube?.[0] ? (
                  <a
                    href={project.youtube[0]}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-red-600 hover:text-red-700 transition-colors"
                    aria-label={`Watch ${project.title} demo`}
                  >
                    <ExternalLink className="h-4 w-4" aria-hidden="true" /> Demo
                  </a>
                ) : null}
                <a
                  href={project.github[0]}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-slate-700 hover:text-blue-700 transition-colors"
                  aria-label={`View ${project.title} source`}
                >
                  <Github className="h-4 w-4" aria-hidden="true" /> GitHub
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.section>

      {/* GitHub repos showcase */}
      <GitHubRepos />
    </>
  );
}
