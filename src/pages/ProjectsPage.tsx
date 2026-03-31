import { ExternalLink, Github, Youtube } from 'lucide-react';
import PageMeta from '../components/PageMeta';
import { additionalProjects, featuredProjects } from '../data/portfolioData';

export default function ProjectsPage() {
  return (
    <>
      <PageMeta
        title="Projects | Nachiket Shinde AI Portfolio"
        description="Explore AI projects by Nachiket Shinde with complete YouTube to GitHub mapping and additional repositories."
      />
      <section>
        <h1 className="text-3xl font-extrabold sm:text-4xl">Projects</h1>
        <p className="mt-3 text-slate-600 dark:text-slate-300">Complete project mapping (YouTube ↔ GitHub).</p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <article key={project.id} className="card">
              <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-300">Project {project.id}</p>
              <h2 className="mt-1 text-lg font-semibold">{project.title}</h2>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{project.summary}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="chip-muted">{tag}</span>
                ))}
              </div>
              <div className="mt-4 space-y-2 text-sm">
                {project.youtube?.map((url) => (
                  <a key={url} className="project-link text-red-600 dark:text-red-300" href={url} target="_blank" rel="noreferrer">
                    <Youtube className="h-4 w-4" /> YouTube Demo <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                ))}
                {project.github.map((url) => (
                  <a key={url} className="project-link text-blue-700 dark:text-blue-300" href={url} target="_blank" rel="noreferrer">
                    <Github className="h-4 w-4" /> GitHub Repo <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>

        <article className="card mt-10">
          <h2 className="text-lg font-semibold">Additional GitHub Projects</h2>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {additionalProjects.map((url) => (
              <li key={url}>
                <a className="project-link text-sm text-slate-700 hover:text-blue-700 dark:text-slate-200 dark:hover:text-blue-300" href={url} target="_blank" rel="noreferrer">
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
