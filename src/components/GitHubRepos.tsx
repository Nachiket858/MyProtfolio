import { AnimatePresence, motion } from 'framer-motion';
import { Github } from 'lucide-react';
import { useState } from 'react';
import { type RepoCategory, githubRepos } from '../data/portfolioData';

type FilterCategory = 'All' | RepoCategory;

const categories: FilterCategory[] = [
  'All',
  'Computer Vision',
  'NLP & Text AI',
  'LLM & Chatbots',
  'ML Prediction',
  'Web & Product',
];

const categoryConfig: Record<RepoCategory, { badge: string; border: string; bar: string; dot: string }> = {
  'Computer Vision': {
    badge: 'bg-violet-50 text-violet-700 border-violet-200',
    border: 'hover:border-violet-300 hover:shadow-violet-100',
    bar: 'from-violet-500 to-purple-500',
    dot: 'bg-violet-500',
  },
  'NLP & Text AI': {
    badge: 'bg-blue-50 text-blue-700 border-blue-200',
    border: 'hover:border-blue-300 hover:shadow-blue-100',
    bar: 'from-blue-500 to-indigo-500',
    dot: 'bg-blue-500',
  },
  'LLM & Chatbots': {
    badge: 'bg-teal-50 text-teal-700 border-teal-200',
    border: 'hover:border-teal-300 hover:shadow-teal-100',
    bar: 'from-teal-500 to-cyan-500',
    dot: 'bg-teal-500',
  },
  'ML Prediction': {
    badge: 'bg-orange-50 text-orange-700 border-orange-200',
    border: 'hover:border-orange-300 hover:shadow-orange-100',
    bar: 'from-orange-500 to-amber-500',
    dot: 'bg-orange-500',
  },
  'Web & Product': {
    badge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    border: 'hover:border-emerald-300 hover:shadow-emerald-100',
    bar: 'from-emerald-500 to-green-500',
    dot: 'bg-emerald-500',
  },
};

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.055 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 22, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1] },
  },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } },
};

export default function GitHubRepos() {
  const [active, setActive] = useState<FilterCategory>('All');

  const filtered = active === 'All' ? githubRepos : githubRepos.filter((r) => r.category === active);

  const counts: Record<FilterCategory, number> = {
    All: githubRepos.length,
    'Computer Vision': githubRepos.filter((r) => r.category === 'Computer Vision').length,
    'NLP & Text AI': githubRepos.filter((r) => r.category === 'NLP & Text AI').length,
    'LLM & Chatbots': githubRepos.filter((r) => r.category === 'LLM & Chatbots').length,
    'ML Prediction': githubRepos.filter((r) => r.category === 'ML Prediction').length,
    'Web & Product': githubRepos.filter((r) => r.category === 'Web & Product').length,
  };

  return (
    <section className="mt-16" aria-labelledby="gh-repos-heading">
      {/* Header */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="section-kicker">Open Source Work</p>
          <h2 id="gh-repos-heading" className="section-title-light">
            GitHub Repository Showcase
          </h2>
          <p className="mt-2 max-w-xl text-sm text-slate-500">
            {githubRepos.length} repositories spanning computer vision, NLP, LLMs, and full-stack
            products — each built to solve a real problem.
          </p>
        </div>
        <a
          href="https://github.com/Nachiket858"
          target="_blank"
          rel="noreferrer"
          aria-label="View all repositories on GitHub"
          className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-slate-600 transition hover:text-blue-700"
        >
          <Github className="h-4 w-4" />
          View all on GitHub →
        </a>
      </div>

      {/* Category filter pills */}
      <div className="mb-7 flex flex-wrap gap-2" role="group" aria-label="Filter by category">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            aria-pressed={active === cat}
            className={`relative rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-200 ${
              active === cat
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-200/60'
                : 'border border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-700'
            }`}
          >
            {cat}
            <span
              className={`ml-1.5 rounded-full px-1.5 py-0.5 text-[9px] font-bold ${
                active === cat ? 'bg-white/25 text-white' : 'bg-slate-100 text-slate-500'
              }`}
            >
              {counts[cat]}
            </span>
          </button>
        ))}
      </div>

      {/* Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {filtered.map((repo) => {
            const cfg = categoryConfig[repo.category];
            return (
              <motion.a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noreferrer"
                variants={cardVariants}
                whileHover={{ y: -5, transition: { duration: 0.18 } }}
                className={`group flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-lg ${cfg.border}`}
                aria-label={`View ${repo.displayName} on GitHub`}
              >
                {/* Top row */}
                <div className="mb-3 flex items-start justify-between gap-2">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider ${cfg.badge}`}
                  >
                    <span className={`h-1.5 w-1.5 rounded-full ${cfg.dot}`} />
                    {repo.category}
                  </span>
                  <Github className="h-4 w-4 shrink-0 text-slate-300 transition-colors group-hover:text-slate-600" aria-hidden="true" />
                </div>

                {/* Repo name */}
                <h3 className="mb-2 text-sm font-bold leading-snug text-slate-900 transition-colors group-hover:text-blue-700">
                  {repo.displayName}
                </h3>

                {/* Description */}
                <p className="mb-4 flex-1 text-xs leading-relaxed text-slate-500">
                  {repo.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {repo.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-slate-100 bg-slate-50 px-2 py-0.5 text-[10px] font-medium text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Animated bottom bar */}
                <div
                  className={`mt-4 h-0.5 w-0 rounded-full bg-gradient-to-r transition-all duration-500 group-hover:w-full ${cfg.bar}`}
                />
              </motion.a>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
