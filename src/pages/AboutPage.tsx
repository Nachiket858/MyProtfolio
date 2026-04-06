import { motion } from 'framer-motion';
import { Award, Code, GraduationCap, Zap } from 'lucide-react';
import PageMeta from '../components/PageMeta';

const principles = [
  'Builder mindset over buzzwords',
  'Ship fast, measure impact, improve continuously',
  'Design AI systems people can trust and use daily',
  'Combine engineering depth with product execution',
];

const timeline = [
  {
    year: '2026',
    title: 'B.Tech — Computer Science & Engineering',
    org: 'CSMSS Chh. Shahu College of Engineering (DBATU)',
    desc: 'Graduating with strong foundations in AI/ML, backend systems, and full-stack development.',
    icon: GraduationCap,
    color: 'from-blue-500 to-indigo-500',
    iconBg: 'bg-blue-50 text-blue-600',
  },
  {
    year: '2025',
    title: 'NPTEL Star — IIT Madras',
    org: 'NPTEL Certifications',
    desc: 'Recognized as NPTEL Star for outstanding performance across multiple CS & Engineering courses from IITs.',
    icon: Award,
    color: 'from-amber-500 to-orange-500',
    iconBg: 'bg-amber-50 text-amber-600',
  },
  {
    year: '2025',
    title: 'GSSoC Contributor',
    org: 'GirlScript Summer of Code',
    desc: 'Contributed to open-source web and AI projects using Python and Generative AI.',
    icon: Zap,
    color: 'from-violet-500 to-purple-500',
    iconBg: 'bg-violet-50 text-violet-600',
  },
  {
    year: '2025',
    title: 'AI Developer — KodeNeurons',
    org: 'KodeNeurons (Startup)',
    desc: 'Core member & AI developer — built Face Recognition Voting, Price Compare, AI Floor Plan Generator.',
    icon: Code,
    color: 'from-teal-500 to-cyan-500',
    iconBg: 'bg-teal-50 text-teal-600',
  },
  {
    year: '2024',
    title: 'Smart India Hackathon Participant',
    org: 'SIH 2024 / 2025',
    desc: 'Contributed innovative AI-driven solutions including domain-agnostic RAG chatbot architectures.',
    icon: Zap,
    color: 'from-rose-500 to-pink-500',
    iconBg: 'bg-rose-50 text-rose-600',
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

export default function AboutPage() {
  return (
    <>
      <PageMeta
        title="About | Nachiket Shinde — AI Engineer & Builder"
        description="Personal brand profile of Nachiket Shinde — AI automation engineer, ML developer, NPTEL Star, GSSoC contributor, and startup builder at KodeNeurons."
        canonicalPath="/about"
      />

      {/* Bio */}
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
      >
        <p className="section-kicker">Personal Branding</p>
        <h1 className="section-title-light">Engineer. Builder. Startup Operator.</h1>
        <p className="mt-4 max-w-3xl text-slate-600">
          I'm Nachiket Shinde — an AI/ML engineer and full-stack developer focused on building real
          systems that eliminate manual work. As founder/core member at{' '}
          <span className="font-semibold text-blue-700">KodeNeurons</span>, I work across ideation,
          engineering, and product delivery to turn concepts into useful products.
        </p>
        <p className="mt-3 max-w-3xl text-slate-600">
          With 40+ projects spanning computer vision, NLP, LLM chatbots, RAG pipelines, and
          full-stack web apps — I bring both the depth to build and the mindset to ship.
        </p>
      </motion.section>

      {/* Positioning + Principles */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="mt-6 grid gap-5 md:grid-cols-2"
      >
        <motion.article variants={fadeUp} className="card-hover">
          <h2 className="text-lg font-bold text-slate-900">Positioning</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            {['AI Automation Engineer', 'ML Developer', 'Startup Builder', 'Open Source Contributor'].map(
              (p) => (
                <li key={p} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
                  {p}
                </li>
              )
            )}
          </ul>
        </motion.article>

        <motion.article variants={fadeUp} className="card-hover">
          <h2 className="text-lg font-bold text-slate-900">Execution Principles</h2>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            {principles.map((point) => (
              <li key={point} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-500 shrink-0" />
                {point}
              </li>
            ))}
          </ul>
        </motion.article>
      </motion.div>

      {/* Timeline */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        className="mt-12"
        aria-labelledby="timeline-heading"
      >
        <div className="mb-6">
          <p className="section-kicker">Journey</p>
          <h2 id="timeline-heading" className="section-title-light">
            Timeline of milestones
          </h2>
        </div>

        <div className="relative space-y-4">
          {/* Vertical line */}
          <div className="absolute left-[22px] top-3 bottom-3 w-px bg-gradient-to-b from-blue-200 via-indigo-200 to-slate-100 hidden sm:block" />

          {timeline.map((item) => (
            <motion.article
              key={`${item.year}-${item.title}`}
              variants={fadeUp}
              whileHover={{ x: 4, transition: { duration: 0.18 } }}
              className="relative flex gap-5"
            >
              {/* Icon dot */}
              <div
                className={`relative z-10 mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-100 shadow-sm ${item.iconBg}`}
                aria-hidden="true"
              >
                <item.icon className="h-5 w-5" />
              </div>

              {/* Content */}
              <div className="flex-1 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-md">
                <div className="mb-1 flex flex-wrap items-center gap-2">
                  <span
                    className={`rounded-full bg-gradient-to-r px-2.5 py-0.5 text-xs font-bold text-white ${item.color}`}
                  >
                    {item.year}
                  </span>
                  <span className="text-xs text-slate-500">{item.org}</span>
                </div>
                <h3 className="font-bold text-slate-900">{item.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{item.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.section>
    </>
  );
}
