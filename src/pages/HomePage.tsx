import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import PageMeta from '../components/PageMeta';
import { NavAnchor } from '../components/simpleRouter';

export default function HomePage() {
  return (
    <>
      <PageMeta
        title="Nachiket Shinde | AI Developer Portfolio"
        description="Minimalist AI developer portfolio of Nachiket Shinde featuring ML, GenAI, RAG, and computer vision projects."
      />
      <section className="grid gap-8 md:grid-cols-2 md:items-center">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
          <p className="chip"><Sparkles className="h-3.5 w-3.5" /> Minimalist + Lite Dark Mode</p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">
            Building practical AI products with clean interfaces.
          </h1>
          <p className="mt-5 max-w-xl text-slate-600 dark:text-slate-300">
            I’m Nachiket Shinde, an AI developer focused on production-ready machine learning systems, RAG chatbots,
            and computer vision tools.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <NavAnchor to="/projects" className="btn-primary">View Projects <ArrowRight className="h-4 w-4" /></NavAnchor>
            <a href="https://pypi.org/user/nachiket/" target="_blank" rel="noreferrer" className="btn-secondary">PyPI Profile</a>
          </div>
        </motion.div>
        <motion.div className="card" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.1 }}>
          <h2 className="text-lg font-bold">Highlights</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
            <li>• 15 mapped projects with YouTube demos + GitHub sources</li>
            <li>• Focus areas: GenAI, RAG, CV, and predictive ML</li>
            <li>• Open-source contributions and hackathon-ready delivery</li>
          </ul>
        </motion.div>
      </section>
    </>
  );
}
