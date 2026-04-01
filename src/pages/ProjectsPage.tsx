import { ExternalLink, Github, Youtube } from 'lucide-react';
import PageMeta from '../components/PageMeta';
import { additionalProjects, featuredProjects } from '../data/portfolioData';

export default function ProjectsPage() {
  return (
    <>
      <PageMeta
        title="Projects | Nachiket Shinde"
        description="Full YouTube + GitHub project portfolio by Nachiket Shinde across AI, ML, and automation systems."
      />

      <section>
        <p className="section-kicker">All Projects</p>
        <h1 className="section-title-light">YouTube demos + GitHub repositories</h1>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <article key={project.id} className="case-card">
              <p className="text-xs font-bold uppercase tracking-widest text-indigo-600">Project {project.id}</p>
              <h2 className="mt-1 text-lg font-bold text-slate-900">{project.title}</h2>
              <p className="mt-2 text-sm text-slate-600">{project.summary}</p>

              <div className="mt-3 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="chip-muted">{tag}</span>
                ))}
              </div>

              <div className="mt-4 space-y-2 text-sm font-semibold">
                {project.youtube?.map((url) => (
                  <a key={url} href={url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-red-600 hover:text-red-700">
                    <Youtube className="h-4 w-4" /> YouTube Demo <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                ))}
                {project.github.map((url) => (
                  <a key={url} href={url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-slate-700 hover:text-blue-700">
                    <Github className="h-4 w-4" /> GitHub Repo <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>

        <article className="mt-10 rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-bold text-slate-900">More GitHub Projects</h2>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {additionalProjects.map((url) => (
              <li key={url}>
                <a href={url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-blue-700">
                  <Github className="h-4 w-4" /> {url.replace('https://github.com/Nachiket858/', '')}
                </a>
              </li>
            ))}
          </ul>
        </article>
      </section>
    </>
  );
}
