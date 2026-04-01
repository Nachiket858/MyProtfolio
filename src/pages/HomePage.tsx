import { motion } from 'framer-motion';
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
import PageMeta from '../components/PageMeta';
import { featuredProjects } from '../data/portfolioData';

const typedPhrases = ['AI Automation Engineer', 'ML Developer', 'Startup Builder'];

const capabilities = [
  {
    icon: Workflow,
    title: 'AI Automation Engineering',
    description: 'I design workflow systems that replace repetitive human operations with reliable automation.',
  },
  {
    icon: Brain,
    title: 'Machine Learning Solutions',
    description: 'From model prototyping to deployment-ready APIs, I build practical ML systems around business goals.',
  },
  {
    icon: Code2,
    title: 'Full-Stack Product Delivery',
    description: 'I combine backend intelligence and polished frontend UX so AI products feel production-ready.',
  },
];

const stack = ['Python', 'Flask', 'LangChain', 'LLMs', 'Scikit-learn', 'SQL', 'n8n', 'React', 'TypeScript'];

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
        title="Nachiket Shinde | AI Automation Engineer Portfolio"
        description="High-conversion portfolio of Nachiket Shinde, AI/ML engineer and startup builder delivering production-ready automation and ML products."
      />

      <section className="relative overflow-hidden rounded-3xl border border-blue-100 bg-white p-8 shadow-[0_25px_80px_-35px_rgba(59,130,246,0.45)] sm:p-12">
        <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gradient-to-br from-blue-200 to-indigo-200 blur-3xl" />
        <div className="absolute -bottom-16 left-10 h-48 w-48 rounded-full bg-gradient-to-tr from-teal-100 to-cyan-100 blur-3xl" />

        <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-blue-700">
              <Sparkles className="h-3.5 w-3.5" /> Built for recruiters, clients, and collaborators
            </p>
            <h1 className="mt-6 text-4xl font-black leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
              I Build AI Systems
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-500 bg-clip-text text-transparent"> That Replace Manual Work</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-slate-600">
              AI/ML engineer and full-stack developer building automation products, LLM assistants, and ML systems that ship fast and create measurable impact.
            </p>

            <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-indigo-700">
              <Cpu className="h-4 w-4" /> Positioning: <span className="min-w-[180px] rounded-md bg-indigo-50 px-2 py-1">{typedPhrases[phraseIndex]}</span>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/projects" className="btn-primary">View Projects <ArrowRight className="h-4 w-4" /></a>
              <a href="mailto:nachiketshinde2004@gmail.com" className="btn-secondary">Hire Me</a>
              <a href="https://github.com/Nachiket858" target="_blank" rel="noreferrer" className="btn-secondary">GitHub</a>
            </div>
          </div>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="grid gap-4">
            {[
              ['40+', 'Real-world AI, web, and automation projects delivered'],
              ['Founder/Core Member', 'KodeNeurons startup — product and engineering execution'],
              ['End-to-End', 'From model design to UI and deployment workflows'],
            ].map(([value, label]) => (
              <article key={value} className="rounded-2xl border border-slate-200 bg-white/95 p-5">
                <p className="text-2xl font-extrabold text-slate-900">{value}</p>
                <p className="mt-1 text-sm text-slate-600">{label}</p>
              </article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="mt-12 grid gap-4 sm:grid-cols-3">
        {capabilities.map((capability) => (
          <article key={capability.title} className="card-hover">
            <capability.icon className="h-5 w-5 text-blue-600" />
            <h2 className="mt-4 text-lg font-bold text-slate-900">{capability.title}</h2>
            <p className="mt-2 text-sm text-slate-600">{capability.description}</p>
          </article>
        ))}
      </section>

      <section className="mt-14">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="section-kicker">YouTube + GitHub Projects</p>
            <h2 className="section-title-light">Featured builds with live demos</h2>
          </div>
          <a href="/projects" className="text-sm font-semibold text-blue-700 hover:text-blue-800">See all projects →</a>
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-3">
          {featuredProjects.slice(0, 6).map((project) => (
            <article key={project.id} className="case-card">
              <h3 className="text-lg font-bold text-slate-900">{project.title}</h3>
              <p className="mt-2 text-sm">{project.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.slice(0, 3).map((item) => <span key={item} className="chip-muted">{item}</span>)}
              </div>
              <div className="mt-4 flex gap-3 text-sm font-semibold">
                {project.youtube?.[0] ? (
                  <a href={project.youtube[0]} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-red-600 hover:text-red-700">
                    <Youtube className="h-4 w-4" /> Demo
                  </a>
                ) : null}
                <a href={project.github[0]} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-slate-700 hover:text-blue-700">
                  <Github className="h-4 w-4" /> GitHub
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-14 grid gap-6 rounded-3xl border border-slate-200 bg-white p-8 sm:grid-cols-2">
        <div>
          <p className="section-kicker">Tech Stack</p>
          <h2 className="section-title-light">Built for speed, scale, and shipping</h2>
          <p className="mt-3 text-sm text-slate-600">I blend AI engineering with product-focused full-stack execution so prototypes become usable products, fast.</p>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {stack.map((item) => (
            <div key={item} className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-center text-sm font-semibold text-slate-700">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14 grid gap-5 sm:grid-cols-3">
        {[
          { icon: Briefcase, title: 'Proof of Work', text: 'GitHub repositories, demos, and deployable project references.', cta: 'Open GitHub', href: 'https://github.com/Nachiket858' },
          { icon: Rocket, title: 'Startup Mindset', text: 'I build with outcome focus: speed, reliability, and user value.', cta: 'View Branding', href: '/about' },
          { icon: Bot, title: 'Let's Build Together', text: 'Open to recruiter conversations, client work, and strategic collaborations.', cta: 'Contact Me', href: '/contact' },
        ].map((item) => (
          <article key={item.title} className="card-hover">
            <item.icon className="h-5 w-5 text-indigo-600" />
            <h3 className="mt-3 font-bold text-slate-900">{item.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{item.text}</p>
            <a href={item.href} className="mt-4 inline-flex items-center text-sm font-semibold text-indigo-700 hover:text-indigo-800">{item.cta} →</a>
          </article>
        ))}
      </section>
    </>
  );
}