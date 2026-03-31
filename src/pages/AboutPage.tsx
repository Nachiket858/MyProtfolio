import PageMeta from '../components/PageMeta';

const skills = [
  'Python',
  'Machine Learning',
  'Generative AI',
  'LangChain / LangGraph',
  'Flask',
  'React + TypeScript',
  'MongoDB / SQL',
  'Computer Vision',
];

const timeline = [
  ['2026', 'B.Tech in Computer Science & Engineering'],
  ['2025', 'GSSoC Contributor'],
  ['2025', 'NPTEL Star Recognition'],
  ['2024', 'Smart India Hackathon Participant'],
];

export default function AboutPage() {
  return (
    <>
      <PageMeta
        title="About | Nachiket Shinde"
        description="About Nachiket Shinde: AI developer with skills in ML, GenAI, RAG, Python, Flask, and React." 
      />
      <section className="space-y-8">
        <div>
          <h1 className="text-3xl font-extrabold sm:text-4xl">About Me</h1>
          <p className="mt-4 max-w-3xl text-slate-600 dark:text-slate-300">
            I design and ship real-world AI products with focus on usability, deployment readiness, and strong technical
            foundations. My projects span agriculture, healthcare, education, fintech, and civic-tech.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <article className="card">
            <h2 className="text-lg font-semibold">Skills</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill} className="chip-muted">{skill}</span>
              ))}
            </div>
          </article>

          <article className="card">
            <h2 className="text-lg font-semibold">Milestones</h2>
            <ul className="mt-4 space-y-3">
              {timeline.map(([year, title]) => (
                <li key={year + title} className="border-l border-slate-300 pl-3 text-sm dark:border-slate-700">
                  <p className="font-semibold text-blue-600 dark:text-blue-300">{year}</p>
                  <p className="text-slate-700 dark:text-slate-200">{title}</p>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>
    </>
  );
}
