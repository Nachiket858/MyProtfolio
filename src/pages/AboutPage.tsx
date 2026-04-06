import PageMeta from '../components/PageMeta';

const principles = [
  'Builder mindset over buzzwords',
  'Ship fast, measure impact, improve continuously',
  'Design AI systems people can trust and use daily',
  'Combine engineering depth with product execution',
];

export default function AboutPage() {
  return (
    <>
      <PageMeta
        title="About | Nachiket Shinde"
        description="Personal brand profile of Nachiket Shinde: AI automation engineer, ML developer, startup builder."
        canonicalPath="/about"
      />

      <section className="space-y-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-8">
          <p className="section-kicker">Personal Branding</p>
          <h1 className="section-title-light">Engineer. Builder. Startup Operator.</h1>
          <p className="mt-4 max-w-3xl text-slate-600">
            I’m Nachiket Shinde — an AI/ML engineer and full-stack developer focused on building real systems that eliminate manual work.
            As founder/core member at KodeNeurons, I work across ideation, engineering, and product delivery to turn concepts into useful products.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <article className="card-hover">
            <h2 className="text-lg font-bold text-slate-900">Positioning</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>• AI Automation Engineer</li>
              <li>• ML Developer</li>
              <li>• Startup Builder</li>
            </ul>
          </article>

          <article className="card-hover">
            <h2 className="text-lg font-bold text-slate-900">Execution Principles</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              {principles.map((point) => <li key={point}>• {point}</li>)}
            </ul>
          </article>
        </div>
      </section>
    </>
  );
}
