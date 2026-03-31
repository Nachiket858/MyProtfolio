import { Brain, Briefcase, ExternalLink, Github, Linkedin, Mail, Sparkles, Star, Youtube } from 'lucide-react';
import { additionalProjects, featuredProjects, showcaseProjects, skillGroups } from './data/portfolioData';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="blob blob-cyan" />
        <div className="blob blob-violet" />
      </div>

      <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="#home" className="flex items-center gap-2 text-sm font-semibold tracking-wide text-cyan-300">
            <Brain className="h-5 w-5" aria-hidden="true" />
            Nachiket Shinde · AI Developer
          </a>
          <div className="hidden items-center gap-6 text-sm md:flex">
            {['about', 'skills', 'projects', 'contact'].map((item) => (
              <a key={item} href={`#${item}`} className="text-slate-300 transition hover:text-cyan-300">
                {item[0].toUpperCase() + item.slice(1)}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="relative border-b border-slate-800">
          <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-20 sm:px-6 md:grid-cols-2 md:py-28">
            <div className="fade-up">
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
                <Sparkles className="h-3.5 w-3.5" /> Premium AI Portfolio
              </p>
              <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
                I build production-ready AI products with clean UX and measurable impact.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-slate-300">
                This portfolio keeps all your existing project depth and adds a premium design language: refined hierarchy,
                smooth animations, strong visual storytelling, and SEO-ready structure for recruiters, clients, and teams.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#projects" className="rounded-xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-300">
                  Explore All Projects
                </a>
                <a href="https://github.com/Nachiket858" target="_blank" rel="noreferrer" className="rounded-xl border border-slate-700 bg-slate-900/70 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-cyan-300 hover:text-cyan-200">
                  GitHub Profile
                </a>
              </div>
            </div>

            <div className="fade-up glass-card p-6" style={{ animationDelay: '120ms' }}>
              <h2 className="text-xl font-bold text-white">At a glance</h2>
              <div className="mt-5 grid grid-cols-2 gap-4">
                {[
                  { label: 'AI Projects', value: '20+' },
                  { label: 'Mapped Demos', value: '15' },
                  { label: 'Core Domains', value: 'CV + NLP' },
                  { label: 'Focus', value: 'GenAI Apps' },
                ].map((card) => (
                  <div key={card.label} className="rounded-lg border border-slate-700 bg-slate-900/70 p-4">
                    <p className="text-2xl font-bold text-cyan-300">{card.value}</p>
                    <p className="mt-1 text-xs uppercase tracking-wide text-slate-400">{card.label}</p>
                  </div>
                ))}
              </div>
              <ul className="mt-6 space-y-3 text-sm text-slate-300">
                <li>• End-to-end: model + API + user-facing interface</li>
                <li>• Problem-solving with production mindset</li>
                <li>• Clear communication through demos and code</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="about" className="border-b border-slate-800">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <h2 className="section-title">About</h2>
            <p className="mt-5 max-w-4xl leading-7 text-slate-300">
              I&apos;m Nachiket Shinde, an AI developer focused on practical systems that solve real problems in healthcare,
              agriculture, education, civic-tech, and finance. I combine machine learning engineering with product design
              thinking to deliver usable, performant, and business-ready software.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {['GSSoC Contributor (2025)', 'NPTEL Star (IIT Madras recognized)', 'SIH Participant & AI Product Builder'].map((point) => (
                <div key={point} className="glass-card rounded-xl p-4 text-sm text-slate-200">
                  <Star className="mb-2 h-4 w-4 text-cyan-300" />
                  {point}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="border-b border-slate-800">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <h2 className="section-title">Skills & Technology</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {skillGroups.map((group, index) => (
                <article key={group.title} className="glass-card rounded-xl p-5 fade-up" style={{ animationDelay: `${index * 80}ms` }}>
                  <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                  <ul className="mt-4 grid gap-2 text-sm text-slate-300 sm:grid-cols-2">
                    {group.points.map((skill) => (
                      <li key={skill} className="rounded-md border border-slate-700 bg-slate-900/60 px-3 py-2">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="border-b border-slate-800">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <h2 className="section-title">Project Mapping (YouTube ↔ GitHub)</h2>
            <p className="mt-3 text-slate-300">All your mapped projects are preserved and presented in a clean premium card layout.</p>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {featuredProjects.map((project) => (
                <article key={project.id} className="project-card">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">Project {project.id}</p>
                    <Briefcase className="h-4 w-4 text-slate-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{project.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{project.summary}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-md border border-slate-700 bg-slate-900/70 px-2 py-1 text-xs text-slate-300">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 space-y-2 text-sm">
                    {project.youtube?.map((url) => (
                      <a key={url} href={url} target="_blank" rel="noreferrer" className="project-link text-red-200 hover:text-red-300">
                        <Youtube className="h-4 w-4" /> YouTube Demo <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    ))}
                    {project.github.map((url) => (
                      <a key={url} href={url} target="_blank" rel="noreferrer" className="project-link text-cyan-200 hover:text-cyan-300">
                        <Github className="h-4 w-4" /> GitHub Repository <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-semibold text-white">Legacy / Existing Portfolio Highlights</h3>
              <p className="mt-2 text-sm text-slate-300">Kept and showcased from your previous portfolio content.</p>
              <div className="mt-4 grid gap-4 md:grid-cols-3">
                {showcaseProjects.map((project) => (
                  <article key={project.title} className="glass-card rounded-xl p-5">
                    <h4 className="text-lg font-semibold text-white">{project.title}</h4>
                    <p className="mt-2 text-sm text-slate-300">{project.summary}</p>
                    <p className="mt-3 text-xs text-slate-400">{project.stack}</p>
                    <div className="mt-4 flex flex-wrap gap-3 text-sm">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noreferrer" className="project-link text-cyan-200 hover:text-cyan-300">
                          <Github className="h-4 w-4" /> GitHub
                        </a>
                      )}
                      {project.live && (
                        <a href={project.live} target="_blank" rel="noreferrer" className="project-link text-emerald-200 hover:text-emerald-300">
                          <ExternalLink className="h-4 w-4" /> Live
                        </a>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-12 rounded-xl border border-slate-800 bg-slate-900/70 p-6">
              <h3 className="text-lg font-semibold text-white">Additional GitHub Projects (No YouTube Yet)</h3>
              <ul className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
                {additionalProjects.map((url) => (
                  <li key={url}>
                    <a href={url} target="_blank" rel="noreferrer" className="project-link text-slate-200 hover:text-cyan-300">
                      <Github className="h-4 w-4" /> {url.replace('https://github.com/Nachiket858/', '')}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="relative">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-12 sm:px-6 md:flex-row md:items-center">
          <div>
            <p className="text-lg font-semibold text-white">Let&apos;s build impactful AI products together.</p>
            <p className="mt-1 text-sm text-slate-300">
              Email:{' '}
              <a href="mailto:nachiketshinde2004@gmail.com" className="text-cyan-300 hover:text-cyan-200">
                nachiketshinde2004@gmail.com
              </a>
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://github.com/Nachiket858" target="_blank" rel="noreferrer" className="social-btn" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/nachiket-shinde2004" target="_blank" rel="noreferrer" className="social-btn" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:nachiketshinde2004@gmail.com" className="social-btn" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
