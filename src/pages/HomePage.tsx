import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  Bot,
  Brain,
  Briefcase,
  Code2,
  Cpu,
  Github,
  Rocket,
  Sparkles,
  Workflow,
  Youtube,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import GitHubRepos from '../components/GitHubRepos';
import PageMeta from '../components/PageMeta';
import { featuredProjects } from '../data/portfolioData';

const typedPhrases = ['AI Automation Engineer', 'ML Developer', 'Startup Builder'];

const capabilities = [
  {
    icon: Workflow,
    title: 'AI Automation Engineering',
    description: 'I design workflow systems that replace repetitive human operations with reliable automation.',
    iconColor: 'text-violet-600',
    iconBg: 'bg-violet-50',
    borderHover: 'hover:border-violet-200',
  },
  {
    icon: Brain,
    title: 'Machine Learning Solutions',
    description: 'From model prototyping to deployment-ready APIs, I build practical ML systems around business goals.',
    iconColor: 'text-blue-600',
    iconBg: 'bg-blue-50',
    borderHover: 'hover:border-blue-200',
  },
  {
    icon: Code2,
    title: 'Full-Stack Product Delivery',
    description: 'I combine backend intelligence and polished frontend UX so AI products feel production-ready.',
    iconColor: 'text-teal-600',
    iconBg: 'bg-teal-50',
    borderHover: 'hover:border-teal-200',
  },
];

const stack = ['Python', 'Flask', 'LangChain', 'LLMs', 'Scikit-learn', 'SQL', 'n8n', 'React', 'TypeScript'];

const ctaCards = [
  {
    icon: Briefcase,
    title: 'Proof of Work',
    text: 'GitHub repositories, demos, and deployable project references.',
    cta: 'Open GitHub',
    href: 'https://github.com/Nachiket858',
    external: true,
  },
  {
    icon: Rocket,
    title: 'Startup Mindset',
    text: 'I build with outcome focus: speed, reliability, and user value.',
    cta: 'View Brand',
    href: '/about',
    external: false,
  },
  {
    icon: Bot,
    title: "Let's Build Together",
    text: 'Open to recruiter conversations, client work, and strategic collaborations.',
    cta: 'Contact Me',
    href: '/contact',
    external: false,
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

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.4 } },
};

export default function HomePage() {
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % typedPhrases.length);
    }, 1900);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <>
      <PageMeta
        title="Nachiket Shinde | AI Engineer & ML Developer Portfolio"
        description="Portfolio of Nachiket Shinde — AI automation engineer, ML developer, and startup builder delivering production-ready LLM, RAG, computer vision, and automation systems."
        canonicalPath="/"
      />

      {/* ── HERO ── */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative overflow-hidden rounded-3xl border border-blue-100 bg-white p-8 shadow-[0_25px_80px_-35px_rgba(59,130,246,0.4)] sm:p-12"
        aria-label="Introduction"
      >
        {/* Animated background blobs */}
        <motion.div
          animate={{ scale: [1, 1.18, 1], rotate: [0, 12, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br from-blue-200 to-indigo-200 opacity-60 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.22, 1], rotate: [0, -12, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="pointer-events-none absolute -bottom-20 left-6 h-56 w-56 rounded-full bg-gradient-to-tr from-teal-100 to-cyan-100 opacity-60 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
          className="pointer-events-none absolute bottom-10 right-1/3 h-32 w-32 rounded-full bg-gradient-to-br from-violet-100 to-purple-100 opacity-50 blur-2xl"
        />

        <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          {/* Left: text */}
          <div>
            <motion.p
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-blue-700"
            >
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              Built for recruiters, clients, and collaborators
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="mt-6 text-4xl font-black leading-tight text-slate-900 sm:text-5xl lg:text-6xl"
            >
              I Build AI Systems
              <span className="animate-gradient-x bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-500 bg-clip-text text-transparent">
                {' '}That Replace Manual Work
              </span>
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-5 max-w-2xl text-lg text-slate-600">
              AI/ML engineer and full-stack developer building automation products, LLM assistants,
              and ML systems that ship fast and create measurable impact.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-6 flex items-center gap-2 text-sm font-semibold text-indigo-700"
            >
              <Cpu className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>Positioning:</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={phraseIndex}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.28 }}
                  className="min-w-[185px] rounded-md bg-indigo-50 px-2.5 py-1 text-indigo-700"
                >
                  {typedPhrases[phraseIndex]}
                </motion.span>
              </AnimatePresence>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
              <a href="/projects" className="btn-primary">
                View Projects <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a href="mailto:nachiketshinde2004@gmail.com" className="btn-secondary">
                Hire Me
              </a>
              <a
                href="https://github.com/Nachiket858"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
                aria-label="Visit GitHub profile"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
                GitHub
              </a>
            </motion.div>
          </div>

          {/* Right: stat cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid gap-4"
          >
            {[
              { value: '40+', label: 'Real-world AI, web & automation projects delivered' },
              { value: 'Founder / Core', label: 'KodeNeurons startup — product and engineering execution' },
              { value: 'End-to-End', label: 'From model design to UI and deployment workflows' },
            ].map(({ value, label }) => (
              <motion.article
                key={value}
                variants={fadeUp}
                whileHover={{ scale: 1.025, transition: { duration: 0.18 } }}
                className="rounded-2xl border border-slate-200 bg-white/95 p-5 shadow-sm transition-shadow hover:border-blue-200 hover:shadow-md"
              >
                <p className="text-2xl font-extrabold text-slate-900">{value}</p>
                <p className="mt-1 text-sm text-slate-600">{label}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* ── CAPABILITIES ── */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        className="mt-12 grid gap-4 sm:grid-cols-3"
        aria-label="Core capabilities"
      >
        {capabilities.map((cap) => (
          <motion.article
            key={cap.title}
            variants={fadeUp}
            whileHover={{ y: -5, transition: { duration: 0.18 } }}
            className={`card-hover ${cap.borderHover}`}
          >
            <div className={`inline-flex rounded-xl p-2.5 ${cap.iconBg}`}>
              <cap.icon className={`h-5 w-5 ${cap.iconColor}`} aria-hidden="true" />
            </div>
            <h2 className="mt-4 text-lg font-bold text-slate-900">{cap.title}</h2>
            <p className="mt-2 text-sm text-slate-600">{cap.description}</p>
          </motion.article>
        ))}
      </motion.section>

      {/* ── FEATURED PROJECTS ── */}
      <section className="mt-14" aria-labelledby="featured-heading">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <p className="section-kicker">YouTube + GitHub Projects</p>
            <h2 id="featured-heading" className="section-title-light">
              Featured builds with live demos
            </h2>
          </div>
          <a
            href="/projects"
            className="shrink-0 text-sm font-semibold text-blue-700 hover:text-blue-800"
          >
            See all →
          </a>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid gap-5 lg:grid-cols-3"
        >
          {featuredProjects.slice(0, 6).map((project) => (
            <motion.article
              key={project.id}
              variants={fadeUp}
              whileHover={{ y: -5, transition: { duration: 0.18 } }}
              className="case-card"
            >
              <h3 className="text-lg font-bold text-slate-900">{project.title}</h3>
              <p className="mt-2 text-sm">{project.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.slice(0, 3).map((tag) => (
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
                    className="inline-flex items-center gap-1 text-red-600 hover:text-red-700"
                    aria-label={`Watch ${project.title} demo on YouTube`}
                  >
                    <Youtube className="h-4 w-4" aria-hidden="true" />
                    Demo
                  </a>
                ) : null}
                <a
                  href={project.github[0]}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-slate-700 hover:text-blue-700"
                  aria-label={`View ${project.title} source code on GitHub`}
                >
                  <Github className="h-4 w-4" aria-hidden="true" />
                  GitHub
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* ── GITHUB REPOS SHOWCASE ── */}
      <GitHubRepos />

      {/* ── TECH STACK ── */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        className="mt-14 grid gap-6 rounded-3xl border border-slate-200 bg-white p-8 sm:grid-cols-2"
        aria-labelledby="stack-heading"
      >
        <motion.div variants={fadeUp}>
          <p className="section-kicker">Tech Stack</p>
          <h2 id="stack-heading" className="section-title-light">
            Built for speed, scale, and shipping
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            I blend AI engineering with product-focused full-stack execution so prototypes become
            usable products, fast.
          </p>
        </motion.div>

        <motion.div variants={containerVariants} className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {stack.map((item) => (
            <motion.div
              key={item}
              variants={fadeIn}
              whileHover={{ scale: 1.06, transition: { duration: 0.14 } }}
              className="cursor-default rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-center text-sm font-semibold text-slate-700 transition-colors duration-200 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
            >
              {item}
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* ── BOTTOM CTA ── */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        className="mt-14 grid gap-5 sm:grid-cols-3"
        aria-label="Contact and links"
      >
        {ctaCards.map((item) => (
          <motion.article
            key={item.title}
            variants={fadeUp}
            whileHover={{ y: -5, transition: { duration: 0.18 } }}
            className="card-hover"
          >
            <item.icon className="h-5 w-5 text-indigo-600" aria-hidden="true" />
            <h3 className="mt-3 font-bold text-slate-900">{item.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{item.text}</p>
            <a
              href={item.href}
              target={item.external ? '_blank' : undefined}
              rel={item.external ? 'noreferrer' : undefined}
              className="mt-4 inline-flex items-center text-sm font-semibold text-indigo-700 hover:text-indigo-800"
            >
              {item.cta} →
            </a>
          </motion.article>
        ))}
      </motion.section>
    </>
  );
}
